function submit(){
    let email = document.getElementById('email1')
    let pass = document.getElementById('pass0')
    let cpass = document.getElementById('pass')
    let cidade = document.getElementById('cep')
    let uf = document.getElementById('estado')
    let endereço = document.getElementById('endereco')
    let nome = document.getElementById('name')
    let contato = document.getElementById('phone')
    let foto = document.getElementById('foto')

    if(email.value.length == 0|| pass.value.length == 0|| pass.value.length == 0|| cidade.value.length == 0|| uf.value.length == 0|| endereço.value.length == 0|| nome.value.length == 0|| contato.value.length == 0){
        alert("Não deixe espaços em brancos")
    }
}