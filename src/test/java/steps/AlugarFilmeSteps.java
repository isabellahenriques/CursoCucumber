package steps;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import entidades.Filme;
import entidades.NotaAluguel;
import org.junit.Assert;
import servicos.AluguelService;

import java.util.Calendar;
import java.util.Date;

public class AlugarFilmeSteps {

    private Filme filme;
    private AluguelService aluguel = new AluguelService();
    private NotaAluguel nota;
    private String erro;

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
            nota = aluguel.alugar(filme);
        } catch (RuntimeException e) {
            erro = e.getMessage();
        }

    }

    @Então("^o preco do aluguel sera R\\$ (\\d+)$")
    public void oPrecoDoAluguelSeraR$(int arg1) throws Throwable {
        Assert.assertEquals(arg1, nota.getPreco());
    }

    @Então("^a data de entrega sera no dia seguinte$")
    public void aDataDeEntregaSeraNoDiaSeguinte() throws Throwable {
        Calendar cal =Calendar.getInstance();
        cal.add(Calendar.DAY_OF_MONTH, 1);

        Date dataRetorno = nota.getDataEntrega();
        Calendar calRetorno = Calendar.getInstance();
        calRetorno.setTime(dataRetorno);

        Assert.assertEquals(cal.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
        Assert.assertEquals(cal.get(Calendar.MONTH), calRetorno.get(Calendar.MONTH));
        Assert.assertEquals(cal.get(Calendar.YEAR), calRetorno.get(Calendar.YEAR));
    }

    @Então("^o estoque do filme sera (\\d+) unidade$")
    public void oEstoqueDoFilmeSeraUnidade(int arg1) throws Throwable {
        Assert.assertEquals(arg1, filme.getEstoque());
    }

    @Então("^nao sera possivel por falta de estoque$")
    public void naoSeraPossivelPorFaltaDeEstoque() throws Throwable {
        Assert.assertEquals("Filme sem estoque",erro);
    }

} //Não apagar
