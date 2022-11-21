function gerar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert(`ERRRRRROU`)
        
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML='' //para limpar o local onde fica a informação
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //serve pra colocar "Value" na option como se fosse no HTML
            c++
            tab.appendChild(item)
        }
    }
}