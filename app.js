let numeroSecreto = Math.round(Math.random() * 100);
let tentativas = 1;
let chances = 5;
let input = document.querySelector("input");
let chutarBt = document.getElementById("chutar")

document.getElementById("reiniciar").removeAttribute("disabled");

function escreveTexto(tag, texto) {
    let h1 = document.querySelector("h1");
    let p = document.querySelector("p");
    
    h1.innerHTML = tag;
    p.innerHTML = texto;
    responsiveVoice.speak(texto ,"Brazilian Portuguese Female", {rate:1.0});
    
    //utilizamos o método speak para tocar uma voz em responsiveVoice.
    // passamos os parametros de conteúdo, idioma e velocidade.
    //{rate:1.0} indica a velocidade da fala, qual maior os números mais rápido é a fala
}

function comparaNumero () {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        escreveTexto("Acerto miseravi!", "Tu descobriu caraiooo! com "  + tentativas + " tentativas");
        fimDeJogo();
            
        } else {
            if(chute < numeroSecreto){
                escreveTexto("Se fudeu!", "Você erô! O número é maior");
                console.log(numeroSecreto);
                
            } else {
            escreveTexto("Se fudeu!", "Você erô! O número é menor");
            console.log(numeroSecreto);
            
        }
        tentativas++;
        input.setAttribute("placeholder", `Ce tem ${chances -= 1} chances`);
        console.log(numeroSecreto);
        
        
        limparCampo();
    }
    
    if(chances === 0) {
        fimDeJogo()
        escreveTexto("Se fudeu!", "Suas chances acabram!");
        input.setAttribute("placeholder", `Jogue novamente`);
    }
    
}


function fimDeJogo() {
    chutarBt.disabled = true;
    input.disabled = true;
}

function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciar() {
    numeroSecreto = parseInt(Math.random() * 10);
    limparCampo();
    escreveTexto("Jogo do número secreto!", "Digite um número:");
    input.setAttribute("placeholder", `Você tem 5 chances`);
    chutarBt.disabled = false;
    input.disabled = false;
    tentativas = 1;
    chances = 5
}

document.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        if(chances != 0) {
            comparaNumero();
        }
    }
})
