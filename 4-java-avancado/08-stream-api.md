# Capítulo 8: Stream API (Filtrando e mapeando listas)

## O "Ralo" Mágico das Coleções
Quando a tecnologia **Stream API** foi lançada no Java 8 (junto com os maravilhosos Lambdas do capítulo passado), ela mudou para sempre a forma como nós processamos dados pesados.

Imagine que você foi ao banco de dados e pegou uma lista de **50.000 clientes**.
Seu chefe pediu: *"Gere pra mim uma lista nova, contendo APENAS o nome em maiúsculo dos clientes que estão DEVENDO mais de 10 mil reais."*

**Como faríamos antes (Jeito velho de ADS):**
1. Criar uma Lista nova vazia.
2. Fazer um laço `for` gigante passando nos 50.000 clientes.
3. Colocar um `if` testando a dívida.
4. Se sim, jogar o nome dele no `.toUpperCase()` e dar um `.add()` na lista nova.
(Dezenas de linhas de código poluído e chance de travar).

### A Revolução dos Streams
Um **Stream** (em português: Fluxo/Correnteza) é você transformar sua Coleção (`List`) num rio de água descendo a ladeira, e o programador apenas **coloca filtros (peneiras) no meio do caminho**.
A água que passar pelas peneiras chega limpa no rio final. Custo de linhas de código? **Uma.**

## O Código Na Prática (Filtros e Mapeamentos)

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class MestreDosRios {

    public static void main(String[] args) {
        
        List<String> frutasListadas = new ArrayList<>();
        frutasListadas.add("Manga");
        frutasListadas.add("Mirtilo");
        frutasListadas.add("Banana");
        frutasListadas.add("Melancia");
        frutasListadas.add("Abacate");
        
        // MISSÃO: Quero em outra lista APENAS as frutas que comecem com a letra "M" e em CAPSLOCK.
        
        List<String> frutasFiltradas = frutasListadas.stream() // 1. Abro a torneira (Transforma list em rio stream)
            
            // 2. Primeira Peneira .filter() com LAMBDA:
            // "O rio frutasListadas joga a frutaAtual pra -> A condição de teste de Começa Com M:"
            .filter( frutaAtual -> frutaAtual.startsWith("M") )
                
            // 3. O Chão de Fábrica .map():
            // O map PEGA o que sobreviveu à peneira de cima, e TRANSFORMA. 
            // "Pega a sobrevivente -> Transforma ela Maiúscula e Devolve pro Rio:"
            .map(sobrevivente -> sobrevivente.toUpperCase())
                
            // 4. O Fechamento de balanço .collect():
            // Transforma o fluxo líquido do Stream de volta pra uma "pedra sólida" (O ArrayList novo de saída!)
            .collect(Collectors.toList());
            
            
        // Resultado das Listas:
        System.out.println("Rio Original das 5 Frutas: " + frutasListadas); 
        System.out.println("Lista do Rio Tratado da Filter: " + frutasFiltradas); 
        // Printará apenas o array novo com: [MANGA, MIRTILO, MELANCIA]
    }
}
```

O legal da Stream API é que as listas originais (`frutasListadas` no exemplo) nunca são tocadas e não perdem dados; tudo o que a represa devolve é um novo bloco de Memória fresco! A fluência e leitura parecem poesia. Se você ler a sintaxe em inglês da função Stream em voz alta e colocar sua namorada pra ouvir, ela com certeza entenderá a linha algorítmica!

## Minhas Anotações
- 
