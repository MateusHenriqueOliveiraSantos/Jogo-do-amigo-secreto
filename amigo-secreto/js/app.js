let listaAmigos;
let amigos = [];

function adicionar(){
let nomeDoAmigo = document.getElementById('nome-amigo');
if(nomeDoAmigo.value ==  ''){
    alert('Digite um nome!');
    return;
}

if(amigos.includes(nomeDoAmigo.value)){
    alert('Nome já existente, faça uma alteração!(ex:"add um sobrenome")')
    return;
}
listaAmigos = document.getElementById('lista-amigos');
amigos.push(nomeDoAmigo.value);

    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeDoAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeDoAmigo.value;
    }

limparCampo();
}
function sortear(){
    if(amigos.length < 4){
        alert('Escolha no mínimo 4 amigos!');
        return;
    }
    embaralha(amigos);
let sorteio = document.getElementById('lista-sorteio');
    for(let i = 0;i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML =sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
            sorteio.innerHTML =sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}
function reiniciar(){
listaAmigos.textContent = '';
amigos.length = 0;
document.getElementById('lista-sorteio').textContent = '';
}

function limparCampo(){
    let limpar = document.getElementById('nome-amigo');
    limpar.value = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
