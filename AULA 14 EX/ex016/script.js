function contar(){
var begin = document.getElementById('begin')
var end = document.getElementById('end')
var step = document.getElementById('step')
var counting = document.getElementById('counting')

    if(begin.value.length == 0 || end.value.length == 0 || step.value.length == 0 ){
        counting.innerHTML= 'Impossivel contar!'
    } else{
        counting.innerHTML= 'Contando: </br>'
        var b = Number(begin.value)
        var e = Number(end.value)
        var s = Number(step.value)
        if(s <= 0){
            window.alert(`Erro, considerando Passo:1`)
            s = 1
        }
        if(b < e){
            //contagem progressiva
        for(var x = b; x <= e;x += s){
            counting.innerHTML += ` ${x}\u{1F449}`
    }
    
        }else{
        for(var x = b; x >= e;x -= s){
            //contagem regressiva
            counting.innerHTML += `${x} \u{1F449}`
            }

         }
         counting.innerHTML += `\u{1F3C1}`
    }

}