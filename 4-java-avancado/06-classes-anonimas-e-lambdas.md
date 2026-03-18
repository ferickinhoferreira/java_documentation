# Capítulo 7: Classes Anônimas e Lambdas

## A Evolução da Redução de Código (Java 8)
Anteriormente, no decorrer de nossas dezenas de capítulos da ADS e Java, você via uma mecânica de código extremamente verbo e muito formal do Java. Para executar uma mini regrinha "O dobro disso ai é x" no compilador de Arrays na ram, o desenvolvedor Senior tinha que assinar um pacote novo, descer classes, construtores malucos e etc.
O Java a partir da versão 8 (que mudou o mercado global de Web Backend) cortou as gorduras e tentou pegar os benefícios de linguagens concorrentes mais soltas e curtas sem foder as travas seguras tipadas. 
A isso deram o título da unção e salvação da "Programação Funcional" misturada à "Orientada a Objeto".

A base pra tudo na nossa ramificação: as **Expressões Lambdas ( `->` )**. 

### Passando botões sem Assinar papéis (Métodos curtos de flecha).
Lembra do nosso bom `ArrayList`? E o grande companheiro listador For-Each?
```java
// Víamos varrer um catálogo assim (O for-each velho elegante):
for(String item : listaDeItens) {
     System.out.println("Item : " + item);
}
```

O For-Each virou uma função brutalmente amassada com as Lambdas: O compilador olha pra tudo encurtado, e você passa uma função sem corpo e sem nome invisível pela ponte `->`.

```java
import java.util.ArrayList;

public class BoteDoLambda {
    public static void main(String[] args) {
        ArrayList<String> frutas = new ArrayList<>();
        frutas.add("Uva");
        frutas.add("Caqui");
        frutas.add("Coco");
        
        // A MAGIA DOS LAMBDAS FLECHADOS ⚡ (Em Uma Única Linha!)
        // LÊ-SE: A coleção pega todos os itens `(f)` no método nativo dela, e para cada um repassa pra direita da seta pra ser printado!
         frutas.forEach( f -> System.out.println("O item achado é: " + f) );
         
        // Funciona nas Coleções dos HashMap Dicionários da aula 2 também? Sim!
        // No foreach do hashmap as lambdas exigem você bater na variavel das CHaves e dos Valores de uma vez no parenteses de recebimento.
        // ex: minhasChavesMapBank.forEach( (chaveCliente, Saldo) -> System.out.println("Fulano "+ chaveCliente + " tem " + Saldo));

    }
}
```

## Por que Classes Anônimas perderam a força perante aos Lambdas?

Antigamente (antes de 2014) em Java, pra se tentar enviar ordens invisíveis ou eventos de Click Mouse curtos dentro dos parâmetros as pessoas eram forçadas no compilador a escrever tudo cru dentro das abas do void (as Classes Anônimas sem título que abriam chaves tortas ali mesmo).

O Lambda Expression `(parametros) -> { corpoDaFuncao }` esmagou as repetições massantes das Interfaces Funcionais de linha unida e é OBRIGATÓRIA pras formatações e Streams fluentes do Capítulo mestre seguinte!

## Minhas Anotações
- 
