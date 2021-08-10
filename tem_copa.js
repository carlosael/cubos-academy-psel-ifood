function solucao(ano) {
	if (ano % 4  == 0){
        console.log ("JOGOS");
    } else if (ano % 4 == 1 || ano % 4 == 3){
        console.log("MEH")
    } else if (ano % 4 == 2) {
        console.log ("COPA");
    }
}