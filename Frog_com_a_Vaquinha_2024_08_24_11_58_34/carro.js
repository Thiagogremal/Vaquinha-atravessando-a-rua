//Codigo do Carro

let xCarros = [600,600,600,600,600,600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2,2.5,3.5,5,3.3,2.8];
let comprimentoCarro = 60;
let alturaCarro = 40;


function mostraCarro(){
  for(let i=0; i< imagemCarros.length ;i++){
    
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
    
  for(let i=0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  xCarros[i] = voltaPosicaoInicialDoCarro(xCarros[i]);
  }
  
}

function voltaPosicaoInicialDoCarro(x){
  
  if(passouTodaATela(x)){
    return 600;
  }
  return x;
  
  /*if(x < -50){
       x = 600;
  }
  return x;*/
}

function passouTodaATela(x){
  
   if(x < -50){
       return true;
  }
  return false
}

