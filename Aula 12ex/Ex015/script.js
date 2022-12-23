function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        alert('[ERROR] Verifique os dados e tente novamente! ')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
                res.innerHTML = `Detectamos um bebê com ${idade} anos`
            } else if (idade < 21 ){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                res.innerHTML = `Detectamos um jovem com ${idade} anos`
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                res.innerHTML = `Detectamos um senhor com ${idade} anos`
            }
                
        } else if (fsex [1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
                res.innerHTML = `Detectamos um bebê com ${idade} anos`
            } else if (idade < 21 ){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                res.innerHTML = `Detectamos uma jovem com ${idade} anos`
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                res.innerHTML = `Detectamos uma adulta com ${idade} anos`
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                res.innerHTML = `Detectamos uma senhora com ${idade} anos`
                
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.paddingTop = '15px'
    }
}