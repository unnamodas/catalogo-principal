(async () => {
    console.log("Iniciando envio para a nuvem...");
    try {
        // Puxa as funções do Firebase direto da fonte
        const firestore = await import("https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js");
        const db = window.db; // Pega sua conexão que já está aberta

        if (!db) throw new Error("Firebase não está conectado!");

        let contador = 0;

        // 1. Envia o catálogo principal
        for (const p of produtos) {
            await firestore.setDoc(firestore.doc(db, "produtos", p.id.toString()), p);
            console.log("✅ Produto salvo: " + p.nome);
            contador++;
        }

        // 2. Envia as liquidações
        for (const pLiq of produtosLiquidacao) {
            await firestore.setDoc(firestore.doc(db, "produtosLiquidacao", pLiq.id.toString()), pLiq);
            console.log("✅ Liquidação salva: " + pLiq.nome);
            contador++;
        }

        alert("🎉 SUCESSO ABSOLUTO! " + contador + " produtos foram para o Firebase!");
    } catch (e) {
        console.error("Algo deu errado:", e);
        alert("Ops, deu erro! Olhe o console.");
    }
})();