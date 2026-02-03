function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('texano')
    var res = document.querySelector('div#res')

    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{ 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.innerHTML = `idade calculada: ${idade}`
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'foto/foto-crianca.m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'foto/foto-jovem.m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto/foto-adulto.m.png')
            } else {
                img.setAttribute('src', 'foto/foto-idoso.m.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'foto/foto-crianca.f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'foto/foto-jovem.f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto/foto-adulto.f.jpg')
            } else {
                img.setAttribute('src', 'foto/foto-idosa.f.png')
            }
        }
        res.appendChild(img)
}}