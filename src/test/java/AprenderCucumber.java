import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class AprenderCucumber {
    @Dado("^que criei o arquivo corretamente$")
    public void queCrieiOArquivoCorretamente() throws Throwable {
        System.out.println("Qualquer coisa");
    }

    @Quando("^executaLo$")
    public void executaLo() throws Throwable {
    }

    @Entao("^a especificacao deve finalizar com sucesso$")
    public void aEspecificacaoDeveFinalizarComSucesso() throws Throwable {
    }
}
