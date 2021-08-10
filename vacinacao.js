function solucao(obj) {
    if (!obj.jaTomouVacina) {
        if(obj.idade < 60 && !obj.temComorbidade){
           console.log ("INAPTA");
        } else {
            if (obj.idade >= 60){
                console.log ("APTA POR IDADE");
            } else {
                if (obj.temComorbidade){ 
                    console.log ("APTA POR COMORBIDADE");
                }
            }
        }
    } else {
        console.log("JA TOMOU VACINA");
    } 
}