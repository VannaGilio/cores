"use strict" /*Não deixar passar erros basicos*/

const botaoTrocarCor = document.getElementById('trocar-cor') /*Chamar elemento*/

function trocarCor (){
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-fundo', cor) /*buscar variavel do style*/
}

botaoTrocarCor.addEventListener('click', trocarCor) /*Adicionar um evento requisitado*/