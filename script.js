function limparNome(){
    campo.value = '';
};

//register input data
let campo = document.getElementById("teste");
let but = document.getElementById("exemplo");
let participantes = [];

//onclick event button Cadastrar
but.onclick = function(){
    if(campo.value ==''){
        alert('Digite seu nome para participar do sorteio');
        limparNome();
    }else{
        participantes.push(campo.value);
        alert('Muito obrigado, você está participando do sorteio');
        limparNome();
    };
    
    // return nameArray - 
    console.log(participantes);
};

//onclick event button Sortear
function sortear(){
    let numeroPessoas = participantes.length;
    let numeroSorteado = Math.floor(Math.random() * numeroPessoas);
    document.getElementById('display').innerHTML = participantes[numeroSorteado];
};
