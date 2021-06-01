function calcular() {
    var nome = window.document.getElementById('nome')
    var altura = window.document.getElementById('altura')
    var peso = window.document.getElementById('peso')

    var resultadoPeso = window.document.getElementById('resultado-peso')
    var resultadoAbaixoPeso = window.document.getElementById('resultado-abaixo-peso')
    var resultadoSobrePeso = window.document.getElementById('resultado-sobrepeso')
    var resultadoObesidadeUm = window.document.getElementById('resultado-obesidade-um')
    var resultadoObesidadeDois = window.document.getElementById('resultado-obesidade-dois')
    var resultadoObesidadeTres = window.document.getElementById('resultado-obesidade-tres')

    var resultado = window.document.getElementById('resultado')

    var nome = String(nome.value)
    var numeroAltura = Number(altura.value)
    var numeroPeso = Number(peso.value)

    var calculoImc = numeroPeso / (numeroAltura * numeroAltura)

    resultado.innerHTML = `Olá ${nome}, o seu IMC é: ${calculoImc.toFixed(2)}<br />`
    if (calculoImc < 18.50) {
        resultadoAbaixoPeso.classList.add('blue')
        resultadoPeso.classList.remove('blue')
        resultadoSobrePeso.classList.remove('blue')
        resultadoObesidadeUm.classList.remove('orange')
        resultadoObesidadeDois.classList.remove('orange')
        resultadoObesidadeTres.classList.remove('red')
        limparCampo()
    } else if (calculoImc >= 18.50 && calculoImc <= 24.9) {
        resultadoPeso.classList.add('blue')
        resultadoAbaixoPeso.classList.remove('blue')
        resultadoSobrePeso.classList.remove('blue')
        resultadoObesidadeUm.classList.remove('orange')
        resultadoObesidadeDois.classList.remove('orange')
        resultadoObesidadeTres.classList.remove('red')
        limparCampo()
    } else if (calculoImc >= 25 && calculoImc <= 29.9) {
        resultadoSobrePeso.classList.add('blue')
        resultadoAbaixoPeso.classList.remove('blue')
        resultadoPeso.classList.remove('blue')
        resultadoObesidadeUm.classList.remove('orange')
        resultadoObesidadeDois.classList.remove('orange')
        resultadoObesidadeTres.classList.remove('red')
        limparCampo()
    } else if (calculoImc >= 30 && calculoImc <= 34.9) {
        resultadoObesidadeUm.classList.add('orange')
        resultadoAbaixoPeso.classList.remove('blue')
        resultadoPeso.classList.remove('blue')
        resultadoSobrePeso.classList.remove('blue')
        resultadoObesidadeDois.classList.remove('orange')
        resultadoObesidadeTres.classList.remove('red')
        limparCampo()
    } else if (calculoImc >= 35 && calculoImc <= 39.9) {
        resultadoObesidadeDois.classList.add('orange')
        resultadoAbaixoPeso.classList.remove('blue')
        resultadoPeso.classList.remove('blue')
        resultadoSobrePeso.classList.remove('blue')
        resultadoObesidadeUm.classList.remove('orange')
        resultadoObesidadeTres.classList.remove('red')
        limparCampo()
    } else if (calculoImc >= 40) {
        resultadoObesidadeTres.classList.add('red')
        resultadoAbaixoPeso.classList.remove('blue')
        resultadoPeso.classList.remove('blue')
        resultadoSobrePeso.classList.remove('blue')
        resultadoObesidadeUm.classList.remove('orange')
        resultadoObesidadeDois.classList.remove('orange')
        limparCampo()
    }
}

function limparCampo() {
    nome.value = ''
    altura.value = ''
    peso.value = ''
}
