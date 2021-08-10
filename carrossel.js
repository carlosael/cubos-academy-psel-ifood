function solucao(sequencia) {
	let imagem = 0;
    for (let lado = 0; lado < sequencia.length; lado++){
        if (sequencia[lado] === ">") {
            imagem = imagem + 1;
            if (imagem > 6){
                imagem = 0;
            }
            } else if (sequencia[lado] === "<"){
                imagem = imagem - 1;
                if (imagem < 0){
                    imagem = 6;
                }
            }
    } console.log(imagem);
}