function solucao(largura, altura) {
    const foto = {
      largura: largura,
      altura: altura,
  }
  if (foto.altura > foto.largura ) {
      console.log ("RETRATO");
  } else if (foto.largura > foto.altura) {
      console.log ("PAISAGEM");
  } else {
      console.log ("QUADRADA");
  }
  
}