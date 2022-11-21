function descobrir(){
    var kanto_region = document.getElementById('kantoregion')
    var jotoh_region = document.getElementById('jotohregion')
    var hoen_region = document.getElementById('hoenregion')
    var fire_element = document.getElementById('fireelement')
    var water_element = document.getElementById('waterelement')
    var grass_element = document.getElementById('grasselement')
    var img = document.createElement('img')
    var anuncio = document.getElementById('anuncio')
    img.setAttribute('id','inicialfoto')
    if(kanto_region.checked){
        var região= 'Kanto'
        if(fire_element.checked){
            //charmander
            img.setAttribute('src','charmander.png')
            var element = 'Fogo'
            var pokenome = '<strong>Charmander</strong>'
        } else if(water_element.checked){
            //squirtle
            img.setAttribute('src','squirtle.png')
            var element = 'Água'
            var pokenome = '<strong>Squirtle</strong>'
        } else if(grass_element.checked){
            //Bulbassaur
            var element = 'Planta'
            img.setAttribute('src','bulbassauro.png')
            var pokenome = '<strong>Bulbassauro</strong>'
        }
    } else if(jotoh_region.checked){
        var região= 'Jotoh'
        if(fire_element.checked){
            var element = 'Fogo'
            //cyndaquil
            img.setAttribute('src','cyndaquil.png')
            var element = 'Fogo'
            var pokenome = '<strong>Cyndaquil</strong>'

        } else if(water_element.checked){
            //totodile
            img.setAttribute('src','totodile.png')
            var element = 'Água'
            var pokenome = '<strong>Totodile</strong>'

        } else if(grass_element.checked){
            //chikorita
            img.setAttribute('src','chikorita.png')
            var element = 'Planta'
            var pokenome = '<strong>Chikorita</strong>'

        }
    } else if(hoen_region.checked){
        var região= 'Hoen'
        if(fire_element.checked){
            //torchic
            img.setAttribute('src','torchic.png')
            var element = 'Fogo'
            var pokenome = '<strong>Torchic</strong>'
        } else if(water_element.checked){
            //mudkip
            img.setAttribute('src','mudkip.png')
            var element = 'Água'
            var pokenome = '<strong>Mudkip</strong>'
        } else if(grass_element.checked){
            //treecko
            img.setAttribute('src','treecko.png')
            var element = 'Planta'
            var pokenome = '<strong>Treecko</strong>'
        }
    }
    anuncio.innerHTML= `Região de ${região} e do tipo ${element}? Então você escolheu ${pokenome}</br>`
    anuncio.appendChild(img)
    
}