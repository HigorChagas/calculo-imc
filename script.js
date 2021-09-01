function calcular() {
    removeHighlight()
    
    var nome = window.document.getElementById('nome').value
    var altura = window.document.getElementById('altura').value
    var peso = window.document.getElementById('peso').value

    if(nome == "" || altura == "" || peso == "") {
        alert("Por favor, preencha todos os dados do formulário.")
    } else {
        
        var resultado = window.document.getElementById('resultado')
        var resultadoCalculo = calculoImc(peso, altura)

        resultado.innerHTML = `Olá ${nome}, o seu IMC é: ${resultadoCalculo.calculo}<br />`

        window.document.getElementById(resultadoCalculo.resultado).classList.add(resultadoCalculo.cor)

        document.getElementById('calculo')

        limparCampo()
    }
    //altura.replace(',', '.')
}

function removeHighlight() {
    var lines = document.getElementsByTagName('tr')
    for(var i = 0;i < lines.length;i++) {
        lines[i].classList.remove('red', 'blue', 'orange')
    }
}

function limparCampo() {
    nome.value = ''
    altura.value = ''
    peso.value = ''
}

function calculoImc(peso, altura) {
    var calculo = (peso / (altura * altura)).toFixed(2)
    var resultado = ''
    var cor = ''
    var blue = 'blue'
    var orange = 'orange'
    var red = 'red'
    var abaixoPeso = calculo < 18.50
    var pesoNormal = calculo >= 18.50 && calculo <= 24.9
    var sobrepeso = calculo >= 25 && calculo <= 29.9
    var obesidadeI = calculo >= 30 && calculo <= 34.9
    var obesidadeII = calculo >= 35 && calculo <= 39.9
    var obesidadeIII = calculo >= 40

    if (abaixoPeso) {
        resultado = 'resultado-abaixo-peso'
        cor = blue
    } else if (pesoNormal) {
        resultado = 'resultado-peso'
        cor = blue
    } else if (sobrepeso) {
        resultado = 'resultado-sobrepeso'
        cor = blue
    } else if (obesidadeI) {
        resultado = 'resultado-obesidade-um'
        cor = orange
    } else if (obesidadeII) {
        resultado = 'resultado-obesidade-dois'
        cor = orange
    } else if (obesidadeIII) {
        resultado = 'resultado-obesidade-tres'
        cor = red
    } 

    return{calculo, resultado, cor}
}