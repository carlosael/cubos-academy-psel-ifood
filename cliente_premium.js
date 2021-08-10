function solucao(precos) {
    let total = 0;
    let maximo = 0;
   for (let i = 0; i < precos.length; i++) {
       total = total + precos[i];
       if (maximo < precos[i]){
           maximo = precos[i];
       }
   }
    if (maximo > 200) {
        if (total > 1000) {
            console.log ("PREMIUM");
        } else {
            console.log ("NORMAL");
        }
    } else {
        if (total > 1000) {
            console.log ("VIP");
        } else {
            console.log ("NORMAL");
        }
    }
}