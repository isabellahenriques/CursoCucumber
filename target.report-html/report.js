$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Alugar Filme",
  "description": "Como um usuario\r\nEu quero cadastrar alugueis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 10
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 11
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 12
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o preco do aluguel sera R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "a data de entrega sera em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o estoque do filme sera 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 169676200,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 2863800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 4865600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 1052500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 120800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Nao deve alugar um filme sem estoque",
  "description": "",
  "id": "alugar-filme;nao-deve-alugar-um-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 19,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 22,
  "name": "o estoque do filme sera 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 131200,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 81100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.naoSeraPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 131400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "#Scenario Outline"
    }
  ],
  "line": 25,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel sera R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao recebida será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "#examples"
    }
  ],
  "line": 35,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 38,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 39,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 40,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel sera R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 95400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendida(String)"
});
formatter.result({
  "duration": 101800,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 102400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 113600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 310500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 100800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel sera R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao recebida será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 145600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 125800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendida(String)"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 141500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 100100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 371900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel sera R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 200400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 331300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendida(String)"
});
formatter.result({
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 106400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 388200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 116900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel sera R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao recebida será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 151200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 110200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendida(String)"
});
formatter.result({
  "duration": 180700,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 86200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 346900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 85400,
  "status": "passed"
});
});