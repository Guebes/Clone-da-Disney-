//Objetivo: Programar botoes como toggle tabs.

// Pirmeiro o DOM e depois o comportamento JS
document.addEventListener('DOMContentLoaded', function(){
    const botoes = document.querySelectorAll('[data-tab-button]') //"[]" para capturar, nesse caso, o atributo data-tab-button
    //Add de evento do click desse button.
    // for(let i = 0; [Aqui, o iterador i deve iterar até a quantidade máxima de botôes]; i++)
    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', function(outputClick){
            const botao = outputClick.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${botao}]`)
            hidenTab()
            aba.classList.add('active')
            removeBotaoAtivo()
            // 1 - Acessando o botão atual através de:
            outputClick.target.classList.add('active')
        })
    }   
})

function hidenTab(){

    const abasUl = document.querySelectorAll('[data-tab-id]')
    
    for(let i = 0; i < abasUl.length; i++){
        abasUl[i].classList.remove('active')
    }
}

function removeBotaoAtivo(){
    const botoes = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < botoes.length; i++){
        botoes[i].classList.remove('active')
    }
}