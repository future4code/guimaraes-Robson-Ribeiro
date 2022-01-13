```unction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salarioFixo = 2000
  let comissao = 100
  let percentagemVenda = 0.05
  let novoSalario = salarioFixo + (qtdeCarrosVendidos * comissao ) + (valorTotalVendas * percentagemVenda);
    return novoSalario;
}```