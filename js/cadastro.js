function submit(){
    let email = document.getElementById('name')
    let pass = document.getElementById('pass0')
    let cpass = document.getElementById('pass')
    let cidade = document.getElementById('cep')
    let uf = document.getElementById('estado')
    let endereço = document.getElementById('endereco')
    let nome = document.getElementById('name')
    let contato = document.getElementById('phone')
    let foto = document.getElementById('foto')
}
/*function city(){
    let city = document.getElementsByName('city')
    let res = document.getElementById('res')
    let citys = document.querySelector('.city')
    let prrg = document.getElementById('prrg')
    if(city[0].checked){
        if(!prrg){
            let rua = document.createElement('input')
            let prg = document.createElement('p')
            let label = document.createElement('label')

            label.setAttribute('for', 'rua')
            label.textContent = 'Rua'
            rua.setAttribute('type', 'text')
            rua.setAttribute('id', 'rua')
            prg.setAttribute('id', 'prrg')

            prg.appendChild(label)
            prg.appendChild(rua)
            citys.appendChild(prg)
        }
    }else{
        prrg.remove()
        citys.appendChild('')
    }
}*/