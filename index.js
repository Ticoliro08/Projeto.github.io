// Seleciona todas asimagens do slider
const imagens = document.querySelectorAll("#slider img");

// Variável para controlar qual imagem está sendo exibida no momento
let imagemAtual = 0;

// Função para mostrar uma imagem específica
function mostrarImagem(index) {
  // Primeiro, escondemos todas as imagens
  imagens.forEach((img) => (img.style.display = "none"));

  // Depois, exibimos a imagem com o índice indicado
  imagens[index].style.display = "block";
}

// Função para ir para a próxima imagem
function proximaImagem() {
  // Incremente o índice da imagem atual e volta para início se chegar ao final
  imagemAtual = (imagemAtual + 1) % imagens.length;
  mostrarImagem(imagemAtual);
}

// Função para ir para a imagem anterior
function imagemAnterior() {
  // Decrementa o índice da imagem atual e volta para o final se for negativo
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(imagemAtual);
}

// Exibe a primeira imagem quando a página carrega
mostrarImagem(imagemAtual);

let intervalo = setInterval(proximaImagem, 2000)





