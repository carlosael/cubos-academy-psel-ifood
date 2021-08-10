function solucao(tempo, distancia) {
	if (tempo >=5) {
        if (tempo >= 60){
            if (distancia < 100) {
                console.log (distancia * 200);
            } else {
                console.log (distancia * 150);
            }
        } else {
            console.log (100 * tempo + 50 * distancia);
        }
        
        } else {
          console .log ("600");
    }

}