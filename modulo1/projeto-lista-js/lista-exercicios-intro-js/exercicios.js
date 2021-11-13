// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Informe uma altura"))
  let largura = Number(prompt("Informe uma largura"))
  let resultado = altura * largura
  console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  let idade = anoAtual - anoDeNascimento
  console.log(idade)
}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)

  return imc
}

calculaIMC(85, 1.8)
calculaIMC(70,1.65)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite uma cor favorita")
  let cor2 = prompt("Digite outra cor")
  let cor3 = prompt("Digite mais uma cor")
  let resulado = [cor1, cor2, cor3]

  console.log(resulado)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}
retornaStringEmMaiuscula("oi")
retornaStringEmMaiuscula("bAnAnA")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}
calculaIngressosEspetaculo(3000, 100)
calculaIngressosEspetaculo(5500, 50)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let resultado = Number(string1.length) === Number(string2.length)
  return resultado
}
checaStringsMesmoTamanho("ola","abc")
checaStringsMesmoTamanho("teste","porta")
checaStringsMesmoTamanho("abc","abcd")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}
retornaPrimeiroElemento([1,2,3])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  var last = array.length
  return array[last-1]  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui  
  let ultimoRegistro = array.length
  let primeito = array[0]
  let ultimo = array[ultimoRegistro - 1]
  
  array[0] = ultimo
  array[ultimoRegistro - 1] = primeito
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let resultado = string1.toUpperCase() === string2.toUpperCase()
  return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}