<<<<<<< HEAD
// // Seleciona todas asimagens do slider
// const imagens = document.querySelectorAll("#slider img");

// // Variável para controlar qual imagem está sendo exibida no momento
// let imagemAtual = 0;

// // Função para mostrar uma imagem específica
// function mostrarImagem(index) {
//   // Primeiro, escondemos todas as imagens
//   imagens.forEach((img) => (img.style.display = "none"));
//   // Depois, exibimos a imagem com o índice indicado
//   imagens[index].style.display = "block";
// }

// // Função para ir para a próxima imagem
// function proximaImagem() {
//   // Incremente o índice da imagem atual e volta para início se chegar ao final
//   imagemAtual = (imagemAtual + 1) % imagens.length;
//   mostrarImagem(imagemAtual);
// }

// // Função para ir para a imagem anterior
// function imagemAnterior() {
//   // Decrementa o índice da imagem atual e volta para o final se for negativo
//   imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
//   mostrarImagem(imagemAtual);
// }

// // Exibe a primeira imagem quando a página carrega
// mostrarImagem(imagemAtual);

// // Seleciona os botões de navegação
// const botaoProximo = document.getElementById("nextBtn");
// const botaoAnterior = document.getElementById("prevBtn");

// // Adiciona o evento de clique ao botão "Próximo"
// botaoProximo.addEventListener("click", () => {
//   proximaImagem(); // Mostra a próxima imagem ao clicar
// });

// // Adicionar o evento de clique ao botão "Anterior"
// botaoAnterior.addEventListener("click", () => {
//   imagemAnterior(); // Mostra a imagem anterior ao clicar
// });


// _____________________ ANIMAÇÕES COM SCROLL

const visu = new IntersectionObserver ((entries) =>{
  entries.forEach( (entry) =>{
    if (entry.isIntersecting) {
      entry.target.classList.add("blocoText_show")
    }
    else{
      entry.target.classList.remove("blocoText_show")
    }
  })
})
=======
const confirm = document.getElementById("confirm")
>>>>>>> f0cae99347247d63349e183fba130e9822214e7a

const elements = document.querySelectorAll(".blocoText")

elements.forEach((element) => visu.observe(element))

confirm.addEventListener("submit", function(event) {
  
 alert('Cadastro feito!')
});
