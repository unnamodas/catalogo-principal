import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

async function listarIdsNovidades() {
    console.log("⏳ Buscando produtos no Firebase...");

    try {
        const produtosRef = collection(db, "produtos");
        const snapshot = await getDocs(produtosRef);

        let idsNovidades = [];

        snapshot.forEach((documento) => {
            const dados = documento.data();
            const produtoId = documento.id;

            // Verifica se a novidade é verdadeira (considerando booleano ou texto)
            const isNovidade = (dados.novidade === true || String(dados.novidade).toLowerCase() === 'true' || dados.Novidade === true || String(dados.Novidade).toLowerCase() === 'true');

            if (isNovidade) {
                idsNovidades.push(produtoId);
            }
        });

        console.log("\n-----------------------------------------");
        console.log(`✨ Total de produtos com tag de Novidade: ${idsNovidades.length}`);
        console.log("-----------------------------------------");
        console.log("📋 Lista de IDs encontrada:");
        console.log(idsNovidades);
        console.log("\nFormatado para copiar e colar:");
        console.log(JSON.stringify(idsNovidades));
        console.log("-----------------------------------------");

        process.exit(0);

    } catch (erro) {
        console.error("❌ Erro ao buscar os dados:", erro);
        process.exit(1);
    }
}

listarIdsNovidades();