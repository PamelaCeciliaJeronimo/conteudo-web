// * Variaveis globais

let qtdCliques = 0;

// Função para lidar com clique do botão
function handleClick(){
    qtdCliques++; //Mesma coisa que qtdCliques = qtdCliques + 1
    atualizaContador();
}

function atualizaContador(){
    let container = document.getElementById('quantidade-cliques');
    console.log(container)
    container.innerText

}