
function setup() {
  createCanvas(400, 400);
  somDaTrilha.loop();
}

function draw() {
  
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();  
  movimentaAtor();
  verificaColisa();
  incluiPontos();
  marcaPonto();
}


