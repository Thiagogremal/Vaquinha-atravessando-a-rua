//Ator
let yAtor = 370;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  print(yAtor);
}

function movimentaAtor(){
  
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3; 
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3;
  }
  
}

function verificaColisa(){
  
  for(let i=0; i < imagemCarros.length; i++)
    {
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
      if ((colisao) && (meusPontos>0))
    {
    
     yAtor = 370;
     meusPontos--;
     /*xAtor = 100;
     mostraAtor();*/   
    }
      else if((colisao))
        {
          somDaColisao.play();
          yAtor = 370;
        }
       }
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width/5, 27);
  
}

function marcaPonto()
{
  if(yAtor < 15){
    meusPontos++;
    somDoPonto.play();
    yAtor = 375;
    
    }
  
}

function podeSeMover(){
  return yAtor < 380;
  
}


