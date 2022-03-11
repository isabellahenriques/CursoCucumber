package steps;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import entidades.Filme;
import entidades.NotaAluguel;
import entidades.TipoAluguel;
import org.junit.Assert;
import servicos.AluguelService;
import utils.DateUtils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class AlugarFilmeSteps {

    private Filme filme;
    private AluguelService aluguel = new AluguelService();
    private NotaAluguel nota;
    private String erro;
    private TipoAluguel tipoAulguel = TipoAluguel.COMUM;

    @Dado("^um filme com estoque de (\\d+) unidades$")
    public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
        filme = new Filme();
        filme.setEstoque(arg1);
    }

    @Dado("^que o preco do aluguel seja R\\$ (\\d+)$")
    public void queOPrecoDoAluguelSejaR$(int arg1) throws Throwable {
        filme.setAluguel(arg1);
    }

    @Quando("^alugar$")
    public void alugar() throws Throwable {
        try {
            nota = aluguel.alugar(filme, tipoAulguel);
        } catch (RuntimeException e) {
            erro = e.getMessage();
        }

    }

    @Então("^o preco do aluguel sera R\\$ (\\d+)$")
    public void oPrecoDoAluguelSeraR$(int arg1) throws Throwable {
        Assert.assertEquals(arg1, nota.getPreco());
    }

    @Então("^o estoque do filme sera (\\d+) unidade$")
    public void oEstoqueDoFilmeSeraUnidade(int arg1) throws Throwable {
        Assert.assertEquals(arg1, filme.getEstoque());
    }

    @Então("^nao sera possivel por falta de estoque$")
    public void naoSeraPossivelPorFaltaDeEstoque() throws Throwable {
        Assert.assertEquals("Filme sem estoque",erro);
    }

    @Dado("^que o preço do aluguel seja R\\$ (\\d+)$")
    public void queOPreçoDoAluguelSejaR$(int arg1) throws Throwable {
    }

    @Dado("^que o tipo do aluguel seja (.*)$")
    public void queOTipoDoAluguelSejaExtendida(String tipo) throws Throwable {
        tipoAulguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
    }

    @Então("^o preço do aluguel sera R\\$ (\\d+)$")
    public void oPreçoDoAluguelSeraR$(int arg1) throws Throwable {
    }

    @Então("^a data de entrega sera em (\\d+) dias?$")
    public void aDataDeEntregaSeraEmDias(int arg1) throws Throwable {
        Date dataEsperada = DateUtils.obterDataDiferencaDias(arg1);
        Date dataReal = nota.getDataEntrega();

        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");

        Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
    }

    @Então("^a pontuacao recebida será de (\\d+) pontos$")
    public void aPontuacaoRecebidaSeráDePontos(int arg1) throws Throwable {
        Assert.assertEquals(arg1, nota.getPontuacao());
    }

} //Não apagar
