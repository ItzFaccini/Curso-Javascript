var num=[5, 8, 9, 3]
/*num.push(6) //serve para adicionar adicionar um elemento no final com seu valor ()
num.sort() 
for(var pos = 0;pos<num.length;pos++){
console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

for(var pos in num){//para cada posição dentro de num será mostrado o num[pos]
    console.log(`para esta posição dentro de ${pos} será mostrado o ${num[pos]}`)
}*/

var pos= num.indexOf(8)
if(pos == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)}