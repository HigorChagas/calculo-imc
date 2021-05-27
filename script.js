function calcular() {
    var nome = window.document.getElementById('nome')
    var altura = window.document.getElementById('altura')
    var peso = window.document.getElementById('peso')

    var resultado = window.document.getElementById('resultado')

    var nome = String(nome.value)
    var numeroAltura = parseFloat(altura.value)
    var numeroPeso = Number(peso.value)

    var calculoImc = numeroPeso / (numeroAltura * numeroAltura)

    resultado.innerHTML = `Olá ${nome}, o seu IMC é: ${calculoImc.toFixed(2)}`
}