# language: pt

Funcionalidade: Alugar Filme
  Como um usuario
  Eu quero cadastrar alugueis de filmes
  Para controlar preços e datas de entrega

  Cenário: Deve alugar um filme com sucesso
    Dado um filme com estoque de 2 unidades
    E que o preco do aluguel seja R$ 3
    Quando alugar
    Então o preco do aluguel sera R$ 3
    E a data de entrega sera no dia seguinte
    E o estoque do filme sera 1 unidade

  Cenário: Nao deve alugar um filme sem estoque
    Dado um filme com estoque de 0 unidades
    Quando alugar
    Então nao sera possivel por falta de estoque
    E o estoque do filme sera 0 unidade