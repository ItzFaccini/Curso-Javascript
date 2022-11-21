function parimp(n){// var n esta aguardando o valor na chamada
    if(n%2==0){
        return 'par'
    } else{
        return 'impar'
    }
}
var res = parimp(5) //chamada
console.log(`${res}`)