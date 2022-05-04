class IMC {
    constructor() {
        this.button = document.querySelector('.btn');
        this.eventos();
    }

    eventos() {
        this.button.addEventListener('click', () => {
        
            this.removeHighlight();
        });
    }
 
    removeHighlight() {
        const lines = document.getElementsByTagName('tr');

        for(let chaves of lines) {
            chaves.classList.remove('red', 'blue', 'orange');
        }
    }

    calculoImc(peso, altura) {
        const calculo = (peso / (altura * altura)).toFixed(2);
        let resultado = '';
        let cor = '';
        const cores = [
            'blue,',
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

        return{ calculo, resultado, cor }
    }
}

const imc = new IMC('Higor', 80, 1.95);
console.log(imc);