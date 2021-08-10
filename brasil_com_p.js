function solucao(primeiraLetra, segundaLetra, palavras) {
    let certo = 0;
    for (let i = 0; i < palavras.length; i++) {
        if (primeiraLetra === palavras[i][0] && segundaLetra === palavras[i][1]) {
            certo++;
            console.log (palavras[i]);
        }
    } if (certo === 0){
                console.log("NENHUMA");
    }
}