const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');

// Carrega a sua chave secreta do Firebase
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || fs.readFileSync('./firebase-key.json', 'utf8'));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function removerEtiquetasAntigas() {
    console.log("⏳ Buscando o catálogo atual no Firebase...");

    // Puxa todos os produtos do Firebase
    const snapshot = await db.collection('produtos').get();
    let contador = 0;

    for (const doc of snapshot.docs) {
        const produto = doc.data();

        // Verifica se o produto está com a tag de novidade ativada
        if (produto.novidade === true || String(produto.novidade) === "true") {
            // Se sim, ele atualiza SÓ esse campo para false lá no banco
            await db.collection('produtos').doc(doc.id).update({
                novidade: false
            });
            console.log(`✅ Etiqueta removida da peça: ${produto.nome}`);
            contador++;
        }
    }

    console.log(`🎉 Faxina concluída! ${contador} produtos antigos não são mais novidade.`);
}

removerEtiquetasAntigas();