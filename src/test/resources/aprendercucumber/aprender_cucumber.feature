# language: pt
Funcionalidade: Aprender Cucumber
  Como um aluno
  Eu quero aprender a utilizar Cucumber
  Para que eu possa automatizar criterios de aceitacao

Cenario: Deve executar especificacao
  Dado que criei o arquivo corretamente
  Quando executaLo
  Entao a especificacao deve finalizar com sucesso

Cenario: Deve incrementar contador
  Dado que o valor do contador é 15
  Quando eu incrementar em 5
  Então o valor do contador será 18
