# Capítulo 4: Manipulação de Arquivos (Lendo e escrevendo arquivos)

## A Memória Permanente (O Disco Rígido)
Até agora, 100% dos dados que nosso programa criou (variáveis, Listas e Matrizes) viviam na **Memória RAM**. 
Qual o problema da RAM? Ela é volátil. Se o seu programa em Java fechar ou se o computador desligar da tomada, tudo o que o usuário digitou e salvou desaparecerá como fumaça.

Para que os dados sobrevivam, precisamos escrever coisas no **Disco Rígido (HD ou SSD)**, em formato de arquivo (`.txt`, `.csv`, `.json`).

O Java possui uma biblioteca gigante chamada `NIO.2` (New I/O) que facilita absurdamente criar pastas, apagar e ler milhares de textos de uma pancada só. Todas as classes dessa mágica começam na classe mestra `Files` ou `Path`.

## 1. Escrevendo (Gravando) em um Arquivo

Vamos criar um pequeno sistema de Relatório. Pegaremos um arquivo fantasma imaginário chamado `relatorio.txt` na nossa Máquina, e vamos enche-lo de textos das vendas.

```java
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;

public class EscritorDeDisco {

    public static void main(String[] args) {
        
        // 1. Apontando o Dedo (O Path)
        // Isso NÃO cria o arquivo no HD ainda. Ele só prepara o "endereço do mapa" na mente do Java.
        Path enderecoDoArquivo = Paths.get("C:\\MeusDocumentos\\relatorio_vendas.txt");
        
        // 2. Preparando as Linhas
        List<String> conteudo = new ArrayList<>();
        conteudo.add("--- RELATÓRIO DO DIA ---");
        conteudo.add("Caderno: R$ 15,00");
        conteudo.add("Mochila: R$ 120,00");
        conteudo.add("TOTAL DAS VENDAS: R$ 135,00");
        
        // 3. A Gravação Brutal (E o Try-Catch Obrigatório!)
        // O Java exige o bloco Try-Catch para mexer no Windows. E se o disco C: estiver cheio? E se der tela azul?
        try {
            
            // A MÁGICA: Pega o arquivo do endereço e enfia a ArrayList (conteudo) linha por linha lá dentro!
            Files.write(enderecoDoArquivo, conteudo);
            System.out.println("✅ Arquivo gravado no HD com sucesso!");
            
        } catch (IOException erro) {
            
            System.out.println("❌ Deu erro ao gravar no Windows! Detalhes: " + erro.getMessage());
            
        }
    }
}
```

## 2. Puxando de volta à RAM (A Leitura)

Ler um pequeno arquivo de texto e trazer de volta à memória (No formato de uma `List<String>`) é ainda mais simples com o NIO.

```java
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.io.IOException;

public class LeitorDeDisco {

    public static void main(String[] args) {
        
        Path arquivoSalvo = Paths.get("C:\\MeusDocumentos\\relatorio_vendas.txt");
        
        try {
            // A MÁGICA REVERSA: Leia o arquivo no HD, fatie em linhas e traga uma Coleção do Java de volta pramin!
            List<String> linhasDoArquivo = Files.readAllLines(arquivoSalvo);

            // E quem é o mestre pra brincar com Coleções prontas em ArrayList? Nosso Laço for-each
            System.out.println("O QUE TINHA DENTRO DO DISCO:\n");
            
            for (String linhaAtual : linhasDoArquivo) {
                System.out.println("Lendo > " + linhaAtual);
            }
            
        } catch (IOException e) {
            
            System.out.println("Arquivo Inexistente ou corrompido! O Windows barrou a leitura.");
            
        }
    }
}
```

Manipular e parsear (traduzir) arquivos Excel vazados (`.CSV`) são testes práticos recorrentes no Linkedin pros Júniores que disputam vagas corporativas das linguagens orientadas ao ecossistema Back-End e Bancário. Treine seu "Gravar e Ler" no seu prórpio Desktop do Windows antes das provas!

## Minhas Anotações
- 
