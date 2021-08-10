function solucao(obras) {
	let nomeCerto = 0;
    let maiorValor = 0;
    for (let i = 0; i < obras.length; i++){
        if (maiorValor < obras[i].valor){
            maiorValor = obras[i].valor;
            nomeCerto = obras[i].nome;
        }
    } console.log (nomeCerto);
}