//pegar as referencias para cada elemento
//a ser manipulado

let botao = document.getElementById("bota-add-tarefa")
botao.addEventListener("click", function (){
    //como pegar o texto do input;
    //como pegar uma li para, depois, colocar como elemento filho da lista;
    //como criar um botão que vai estar relacionado a li recém criada;
    
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Concluir tarefa";

    btnRemover.addEventListener("click", function() {
        //remover o li
        //utilizar o .remove()!
    })

    //fazer o appendChild() para o botao, (ou seja, adicionar ele dentro da li)
    //fazer o appendChild para a li, (ou seja. adicionar ela dentro da ul)

    //deixar o .value do input como vazio ("")
    //exemplo: input.vale = "";

})