const inicio = new Date("2023-05-21");

function atualizarTempo() {
    const hoje = new Date();
    const diff = hoje - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerText = `Estamos juntos há ${dias} dias!`;
}

const musica = document.getElementById("musica")

document.addEventListener("click", function(){

musica.play()

},{once:true})

setInterval(atualizarTempo, 1000);

function toggleCarta(){

const carta = document.getElementById("carta")
const botao = document.getElementById("botaoCarta")

carta.classList.toggle("mostrar")

if(carta.classList.contains("mostrar")){
botao.innerText = "Fechar carta ❌"
}else{
botao.innerText = "Abrir carta 💌"
}

}

function criarCoracao() {
    const coracao = document.createElement("div")

    coracao.classList.add("coracao")

    coracao.innerHTML = "❤️"

    coracao.style.left = Math.random() * 100 + "vw"

    document.body.appendChild(coracao)

    setTimeout(() => {
        coracao.remove()
    }, 5000)
}

setInterval(criarCoracao, 300);


function verificarSenha() {
    const senha = document.getElementById("senhaInput").value.trim().toLowerCase()
    const surpresa = document.getElementById("surpresaSenha");

    if (senha === "momo") {
        surpresa.style.display = "block"
        document.getElementById("surpresa").style.display = "block"
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
}

let posicao = 0

function mover(direcao){

const galeria = document.getElementById("galeria")

posicao += direcao * 130

galeria.scrollLeft = posicao

}

function abrirImagem(img){

const modal = document.getElementById("modal")
const imagemGrande = document.getElementById("imagemGrande")

modal.style.display="flex"
imagemGrande.src = img.src

}

function fecharImagem(){

document.getElementById("modal").style.display="none"

}

