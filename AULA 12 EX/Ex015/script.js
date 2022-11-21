function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var genero_masculino = document.getElementById('mas')
        var genero_feminino = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')  
        if(genero_masculino.checked){
             gênero = 'Homem'
             if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bebehomem.png')
             } else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
             } else if(idade < 50){
                //adulto
                img.setAttribute('src','adultohomem.png')
             } else{
                //idoso
                img.setAttribute('src','idoso.png')
             }
        } else if(genero_feminino.checked){
             gênero = 'Mulher'
             if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bebemulher.png')
             } else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
             } else if(idade < 50){
                //adulto
                img.setAttribute('src','adultomulher.png')
             } else{//
                //idoso
                img.setAttribute('src','idosa.png')
             }
        }   
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }

}