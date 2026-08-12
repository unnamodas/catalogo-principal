const express = require('express');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const cors = require('cors');

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // 1. Se estiver no Render, lê a variável de ambiente blindada
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n').replace(/\r/g, '');
} else {
    // 2. Se estiver no seu computador, lê o arquivo físico
    serviceAccount = require('./firebase-key.json');
}

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
const app = express();

// 2. CONFIGURA O ROBÔ PARA ENTENDER JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function atualizarEstoqueProduto(sku, saldoAtual) {
    console.log(`🔎 Procurando o SKU ${sku} no banco de dados...`);
    const colecoes = ['produtos', 'produtosLiquidacao'];
    let encontrou = false;

    for (const nomeColecao of colecoes) {
        const snapshot = await db.collection(nomeColecao).get();

        for (const doc of snapshot.docs) {
            const produto = doc.data();

            if (produto.variantes && Array.isArray(produto.variantes)) {
                const varianteExiste = produto.variantes.find(v => v.codigoBling === sku);

                if (varianteExiste) {
                    encontrou = true;
                    let alterou = false;

                    // Lógica corrigida:
                    produto.variantes = produto.variantes.map(v => {
                        if (v.codigoBling === sku) {
                            // Se saldo > 0, o produto NÃO está mais vendido (deve aparecer no site)
                            const novoStatusVendido = saldoAtual <= 0;

                            if (v.vendido !== novoStatusVendido) {
                                v.vendido = novoStatusVendido;
                                alterou = true;
                            }
                        }
                        return v;
                    });

                    if (alterou) {
                        await db.collection(nomeColecao).doc(doc.id).update({
                            variantes: produto.variantes
                        });

                        const statusTexto = saldoAtual <= 0 ? "ESGOTADO" : "DISPONÍVEL";
                        console.log(`✅ SUCESSO! Produto "${produto.nome}" (SKU: ${sku}) atualizado para: ${statusTexto} (Estoque: ${saldoAtual})`);
                    } else {
                        console.log(`ℹ️ O produto "${produto.nome}" já está com o status correto (Vendido: ${produto.variantes.find(v => v.codigoBling === sku).vendido}).`);
                    }
                    return;
                }
            }
        }
    }

    if (!encontrou) {
        console.log(`⚠️ Aviso: SKU ${sku} não encontrado.`);
    }
}

// 4. A "PORTA" QUE O BLING VAI BATER (WEBHOOK)
app.post('/webhook/bling', async (req, res) => {
    console.log('🔔 O Bling enviou uma atualização!');

    // 👇 COLE EXATAMENTE AQUI:
    console.log("📥 JSON bruto recebido do Bling:", JSON.stringify(req.body, null, 2));

    try {
        let payload = req.body;
        if (req.body.data) {
            payload = JSON.parse(req.body.data);
        }

        if (payload.retorno && payload.retorno.estoques) {
            for (const item of payload.retorno.estoques) {
                const sku = item.estoque.codigo;

                // MUDANÇA AQUI: Pegando o "estoqueAtual" correto do Bling
                const saldoRaw = item.estoque.estoqueAtual;

                const saldoAtual = (saldoRaw === "" || saldoRaw === null || saldoRaw === undefined) ? 0 : parseFloat(saldoRaw);

                console.log(`📦 Bling avisou: SKU ${sku} agora tem ${saldoAtual} peças.`);

                // Agora ele processa tanto para zerar quanto para repor
                await atualizarEstoqueProduto(sku, saldoAtual);
            }
        } else {
            console.log("Recebido, mas formato inesperado:", payload);
        }

        res.status(200).send('OK');
    } catch (error) {
        console.error('❌ Erro ao processar:', error);
        res.status(500).send('Erro interno');
    }
});

// 5. LIGA O ROBÔ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🤖 Servidor do Robô UNNA acordou e está vigiando a porta ${PORT}!`);
});