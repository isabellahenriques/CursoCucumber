package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/alugar_filme.feature",
        glue = "steps",
        tags = {},
        plugin = {"pretty", "html:target.report-html", "json:target/report.json"}, //relatorios
        monochrome = true,
        snippets = SnippetType.CAMELCASE,
        dryRun = false,
        strict = false
        )
public class Runner {

}

//relatorios
//plugin = "pretty"
//plugin = {"pretty", "html:target.report-html"}
//plugin = {"pretty", "html:target.report-html", "json:target/report.json"}