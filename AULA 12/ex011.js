var idade = 18
console.log(`Você tem ${idade} anos de idade. Então...`)
if(idade > 18 && idade <65){
    console.log('O seu voto é obrigatório!')
} else{ if(idade >= 16 || idade > 65){
    console.log('O seu voto é opcional!')} else{
        console.log('Você não vota!')
    }
}