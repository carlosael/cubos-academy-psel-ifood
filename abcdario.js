function solucao(letra, palavras) {
	let criancasQueperderam = 0;
    
    for (let indice of palavras) {
        if (letra !== indice[0]){
            criancasQueperderam++;
        }
    }
    console.log (criancasQueperderam);
}