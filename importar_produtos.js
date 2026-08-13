const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');

// Carrega a sua chave de acesso
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || fs.readFileSync('./firebase-key.json', 'utf8'));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function importar() {
    const produtos = JSON.parse(fs.readFileSync('./produtos.json', 'utf8'));

    for (const p of produtos) {
        console.log(`🚀 Enviando: ${p.nome}...`);
        // O comando abaixo garante que vá SEMPRE para o catálogo principal
        await db.collection('produtos').doc(p.id).set(p);
    }
    console.log("✅ Todos os produtos foram importados com sucesso!");
}

importar();