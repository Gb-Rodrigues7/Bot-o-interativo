let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

// Função que move o botão "Não" para uma nova posição
botaoNao.addEventListener("mouseover", function(){
    // move o botao "Não" aleatoriamente na tela
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";

    // Exibe a mensagem de erro
    mensagemErro.style.display = "block";
});

// Mantém o botao "sim" fixo

botaoSim.addEventListener("click", function() {
    alert("Realmente ele é! ");
}); // FINAL