var prova1 = window.document.getElementById('prova1')
var prova2 = window.document.getElementById('prova2')
var prova3 = window.document.getElementById('prova3')
var setaEsquerda = window.document.getElementById('seta-esquerda')
var setaDireita = window.document.getElementById('seta-direita')

var marginCards = window.document.getElementsByClassName('div-cards')

function cardsRight() {
    prova1.style = "display:none"
    prova3.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 55px"
}

function cardsLeft() {
    prova1.style = 'display:flex'
    prova3.style = 'display:none'
    setaDireita.style = "display:flex; margin-top: 55px; "
    setaEsquerda.style = "display:none"
    
}