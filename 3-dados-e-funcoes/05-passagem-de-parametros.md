# Capítulo 5: Passagem de Parâmetros e Retorno

## A Máquina de Suco (Entrada, Processamento e Saída)
Pense em um método como um **Liquidificador**. 
Para ele fazer o trabalho (processamento), você precisa colocar coisas dentro dele (A **Passagem de Parâmetros**).
E, no final, ele te devolve algo pronto (O **Retorno**).

Se eu te pedir: *"Calcule a soma para mim."*, a primeira coisa que você vai me perguntar é: *"A soma de QUAIS números?"*.
Esses "quais números" são os parâmetros!

### 1. Métodos com Parâmetros (Os ingredientes)
Quando criamos o método, colocamos variáveis vazias dentro dos parênteses. Elas ficam "esperando" quem for usar o método jogar valores ali dentro.

```java
public class Calculadora {

    // Método que RECEBE dois números inteiros (Pode receber quantos quiser, separados por vírgula)
    // Mas note: o tipo ainda é void. Ele recebe, processa e imprime ele mesmo. Não devolve o resultado para ninguém.
    public static void somarEImprimir(int numeroA, int numeroB) {
        
        int resultado = numeroA + numeroB;
        System.out.println("A soma de " + numeroA + " e " + numeroB + " é: " + resultado);
        
    }

    public static void main(String[] args) {
        // Quando eu chamo o método, eu SOU OBRIGADO a passar os ingredientes exatos que ele pediu!
        somarEImprimir(10, 5); // Imprime 15
        somarEImprimir(50, 50); // Imprime 100
        
        // somarEImprimir(10.5, 3.2); -> ERRO DE COMPILAÇÃO! Ele exigiu "int", você não pode passar "double".
    }
}
```

### 2. Métodos com Retorno (A vitamina pronta)
E se eu não quiser que o método imprima nada na tela? E se eu quiser que ele *faça a conta e guarde o resultado numa variável minha no Main* para eu poder jogar no banco de dados depois?

Para isso, nós **TROCAMOS A PALAVRA `void`** pelo tipo de dado que ele vai cuspir no final (ex: `int`, `String`, `boolean`). 
E somos obrigados a usar a palavra mágica **`return`** para devolver o valor.

```java
public class Banco {

    // Em vez de void, ele devolve UM DOUBLE.
    public static double calcularImposto(double salario) {
        
        // Calcula 10% do salário
        double taxaDeDesconto = salario * 0.10;
        
        // Devolve PRA QUEM CHAMOU o valor do desconto. 
        // OBS: A palavra return FUNCIONA IGUAL UM BREAK. Assim que o Java lê "return", o método se encerra na hora!
        return taxaDeDesconto; 
    }

    public static void main(String[] args) {
        
        double meuSalario = 3000.0;
        
        // A mágica: Eu chamo o método, e SALVO o que ele "cuspiu" direto na minha nova variável "impostoAReter"!
        double impostoAReter = calcularImposto(meuSalario); 
        
        System.out.println("Você precisa pagar para o governo R$ " + impostoAReter); // R$ 300.0
    }
}
```

## Resumo (O Segredo de Entrevista)
A regra de ouro de funções: **"Faça uma coisa, e faça bem feito"**.
*   Um método nunca deve fazer duas coisas ao mesmo tempo (ex: Calcular o imposto E salvar no arquivo PDF). Divida isso em dois métodos separados!
*   Se o método promete nas iniciais que vai devolver uma `String`, e não tiver a linha `return "Um texto";` você receberá um tapa e um erro do compilador na hora.

## Minhas Anotações
- 
