function Pessoa(nome, altura, peso) {
    this.nome = nome
    this.altura = altura,
    this.peso = peso
}

function validateForm() {
    if(!nome.value || !altura.value || peso.value) {
        alert('Por favor, preencha todos os dados do formulário.');
        resultado.innerHTML = 'Por favor, preencha todos os campos acima';
        return;
    }
}
function calculate() {
    removeHighlight();
    
    const pessoa = new Pessoa(
        document.querySelector('#nome').value,
        document.querySelector('#altura').value,
        document.querySelector('#peso').value
    );

    const resultado = window.document.getElementById('resultado');

    if(!nome.value || !altura.value || !peso.value) {
        alert("Por favor, preencha todos os dados do formulário.");
        resultado.innerHTML = "Por favor, preencha todos os campos acima";
        return;
    } else {
        const resultadoCalculo = calculoImc(pessoa.peso, pessoa.altura);

        resultado.innerHTML = `Olá ${pessoa.nome}, o seu IMC é: ${resultadoCalculo.calculo}<br />`;
        document.getElementById(resultadoCalculo.resultado).classList.add(resultadoCalculo.cor);
    };
}

function removeHighlight() {
    const lines = document.getElementsByTagName('tr');

    for(let chaves of lines) {
        chaves.classList.remove('red', 'blue', 'orange');
    }
}

function calculoImc(peso, altura) {
    const calculo = (peso / (altura * altura)).toFixed(2);
    let resultado = '';
    let cor = '';
    const cores = [
        'blue',
        'orange',
        'red'
    ];

    const abaixoPeso = calculo < 18.50;
    const pesoNormal = calculo >= 18.50 && calculo <= 24.9;
    const sobrepeso = calculo >= 25 && calculo <= 29.9;
    const obesidadeI = calculo >= 30 && calculo <= 34.9;
    const obesidadeII = calculo >= 35 && calculo <= 39.9;
    const obesidadeIII = calculo >= 40;

    if (abaixoPeso) {
        resultado = 'resultado-abaixo-peso';
        cor = cores[0];
    } else if (pesoNormal) {
        resultado = 'resultado-peso';
        cor = cores[0];
    } else if (sobrepeso) {
        resultado = 'resultado-sobrepeso';
        cor = cores[0];
    } else if (obesidadeI) {
        resultado = 'resultado-obesidade-um';
        cor = cores[1];
    } else if (obesidadeII) {
        resultado = 'resultado-obesidade-dois';
        cor = cores[1];
    } else if (obesidadeIII) {
        resultado = 'resultado-obesidade-tres';
        alert("RISCO DE VIDA! Procure um médico");
        cor = cores[2];
    } 

    return{calculo, resultado, cor}
}