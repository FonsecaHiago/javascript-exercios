function carregar(){
    var msg = document.getElementById('msg') 
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
     
    if(hora >= 6 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#7a7f9f'
        msg.innerHTML = `Bom Dia!, Agora são extamente <strong>${hora} horas.</strong>`
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#3f2d29'
        msg.innerHTML = `Boa Tarde!, Agora são extamente <strong>${hora} horas.</strong>`
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#0f2c30'
        msg.innerHTML = `Boa Noite!, Agora são extamente <strong>${hora} horas.</strong>`
    }
    if(hora >= 1 && hora < 6 ){
        img.src = 'madrugada.png'
        document.body.style.background = '#3a3d42'
        msg.innerHTML = `Boa Madrugada!, Agora são extamente <strong>${hora} hora/s.</strong>`

    }
}
