var num = document.getElementById('numero')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value,valores)){ // !inLista - SIGNIFICA COM "!" SE NÃO ESTIVER EM LISTA)
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido, ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            media = soma / total
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.<p>`
        res.innerHTML += `<p>O ${menor} foi o menor número cadastrado.<p>`
        res.innerHTML += `<p>O ${maior} foi o maior número cadastrado.<p>`
        res.innerHTML += `<p> O resultado da soma dos números é igual a ${soma}`
        res.innerHTML += `<p> O resultado da média dos números é igual a ${media}`
    }
}
function clean(){
    lista.innerHTML=''
    res.innerHTML=''
}