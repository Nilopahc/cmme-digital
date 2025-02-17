function city(){
    let city = document.getElementsByName('city')
    let res = document.getElementById('res')
    let citys = document.querySelector('.city')
    if(city[0].checked){
        let rua = document.createElement('input')
        let prg = document.createElement('p')
        let label = document.createElement('label')
        label.setAttribute('for', 'rua')
        label.textContent = 'Rua'
        rua.setAttribute('type', 'text')
        rua.setAttribute('id', 'rua')
        prg.appendChild(label)
        prg.appendChild(rua)
        citys.appendChild(prg)

    }
}