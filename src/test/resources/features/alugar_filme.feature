# language: pt

Funcionalidade: Alugar Filme
  Como um usuario
  Eu quero cadastrar alugueis de filmes
  Para controlar preços e datas de entrega

  Cenário: Deve alugar um filme com sucesso
    Dado um filme
      | estoque | 2     |
      | preco   | 3     |
      | tipo    | comum |
    Quando alugar
    Então o preco do aluguel sera R$ 3
    E a data de entrega sera em 1 dia
    E o estoque do filme sera 1 unidade

  Cenário: Nao deve alugar um filme sem estoque
    Dado um filme com estoque de 0 unidades
    Quando alugar
    Então nao sera possivel por falta de estoque
    E o estoque do filme sera 0 unidade

  #Scenario Outline
  Esquema do Cenário: Deve dar condicoes conforme tipo de aluguel
    Dado um filme com estoque de 2 unidades
    E que o preço do aluguel seja R$ <preco>
    E que o tipo do aluguel seja <tipo>
    Quando alugar
    Então o preço do aluguel sera R$ <valor>
    E a data de entrega sera em <qtdDias> dias
    E a pontuacao recebida será de <pontuacao> pontos

    #examples
    Exemplos:
      | preco | tipo      | valor | qtdDias | pontuacao |
      | 4     | extendido | 8     | 3       | 2         |
      | 4     | comum     | 4     | 1       | 1         |
      | 10    | extendido | 20    | 3       | 2         |
      | 5     | semanal   | 15    | 7       | 3         |

