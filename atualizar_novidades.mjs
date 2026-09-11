import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";

// 🟢 Configuração do seu Banco de Dados (UNNA)
const firebaseConfig = {
    apiKey: "AIzaSyB0hatVfple7r7kbNqbaQ52Q52Su6yMvh0",
    authDomain: "catalogo-unna.firebaseapp.com",
    projectId: "catalogo-unna",
    storageBucket: "catalogo-unna.firebasestorage.app",
    messagingSenderId: "38681293793",
    appId: "1:38681293793:web:87a04deeac99f7aa2118a0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// =========================================================
// 🟢 1. COLOQUE AQUI OS IDs DOS PRODUTOS QUE SÃO NOVIDADES
// =========================================================
const idsNovidades = ['10', '15', '22', '45'];


async function definirNovidades() {
    console.log("⏳ Conectando ao banco de dados...");

    try {
        const produtosRef = collection(db, "produtos");
        const snapshot = await getDocs(produtosRef);

        let contagemAdicionados = 0;
        let contagemRemovidos = 0;

        console.log("🔄 Atualizando sua vitrine de novidades...");

        for (const documento of snapshot.docs) {
            const produtoId = documento.id;
            const dados = documento.data();
            const ref = doc(db, "produtos", produtoId);

            // Verifica as variações de escrita no banco (novidade minúsculo ou maiúsculo)
            const isNovidadeAtualmente = (dados.novidade === true || String(dados.novidade).toLowerCase() === 'true' || dados.Novidade === true || String(dados.Novidade).toLowerCase() === 'true');

            // 1. Se o ID estiver na lista, marcamos como novidade
            if (idsNovidades.includes(produtoId)) {
                if (!isNovidadeAtualmente) {
                    await updateDoc(ref, { novidade: true });
                    console.log(`✅ [${produtoId}] ADICIONADO às Novidades.`);
                    contagemAdicionados++;
                }
            }
            // 2. Se NÃO estiver na lista, removemos a tag (limpeza automática)
            else {
                if (isNovidadeAtualmente) {
                    await updateDoc(ref, { novidade: false });
                    console.log(`❌ [${produtoId}] REMOVIDO das Novidades.`);
                    contagemRemovidos++;
                }
            }
        }

        console.log("\n-----------------------------------------");
        console.log("🎉 PROCESSO FINALIZADO COM SUCESSO!");
        console.log(`✨ ${contagemAdicionados} peças marcadas com a tag de Novidade.`);
        console.log(`🧹 ${contagemRemovidos} peças antigas retiradas da aba.`);
        console.log("-----------------------------------------");

        process.exit(0);

    } catch (erro) {
        console.error("❌ Erro durante a atualização:", erro);
        process.exit(1);
    }
}

definirNovidades();