# Capítulo 1: Tratamento de Erros (Try, catch e finally)

## O que fazer quando tudo dá errado?
Na programação, nem tudo são flores. E se você pedir para o usuário digitar a Idade (um `int`), mas ele digitar a palavra **"Dezesseis"** no teclado? 
O `Scanner.nextInt()` vai tentar transformar a palavra em número, vai falhar tragicamente, e o Java "cuspirá" na tela um erro vermelho bizarro chamado `InputMismatchException`, derrubando (matando) o seu programa na hora.

Para impedir que seu sistema quebre e a tela feche na cara do usuário quando algo de imprevisto acontece, nós usamos os blocos de tratamento de erros: o **`try-catch`** (Tente e Capture).

## A Sintaxe de Defesa (Try / Catch)

O bloco `try` funciona como uma bolha de proteção. Você coloca dentro dele o código que você *"acha que pode dar problema"*.
Se quebrar, em vez do sistema morrer, ele pula na mesma hora para dentro do bloco `catch`, permitindo que você lide com o erro educadamente.

```java
import java.util.Scanner;
import java.util.InputMismatchException;

public class SistemaDeIdade {

    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        System.out.println("Qual é a sua idade em números?");
        
        // Colocamos a "bomba" desarmada dentro do Try
        try {
            
            // SE O USUÁRIO DIGITAR TEXTO AQUI, O JAVA ABORTA A LINHA DE BAIXO E PULA PRO CATCH!
            int idade = input.nextInt(); 
            System.out.println("Legal, você tem " + idade + " anos!");
            
        } catch (InputMismatchException erroDeDigitacao) {
            
            // Aqui é o hospital. O programa não morreu! Ele veio pra cá para ser tratado.
            System.out.println("❌ ERRO: Você deveria ter digitado um número, e não um texto!");
            
        // Podemos ter VÁRIOS catchs para capturar tipos de erros diferentes (Ex: Erro matemático de dividir número por Zero)
        } catch (ArithmeticException erroDeMatematica) {
            System.out.println("❌ ERRO: Impossível dividir por zero.");
            
        // ... E o bloco Finally?
        } finally {
            // Opcional: O finally roda SEMPRE, dando erro ou não, caindo no try ou no catch.
            // É excelente para fechar scanners ou fechar conexões de banco de dados que ficaram abertas.
            input.close();
            System.out.println("\nSistema encerrado com segurança.");
        }
    }
}
```

## Exceptions (A Família dos Erros)
No ecosistema Java, todo erro que estoura na tela é uma "Exceção" (Exception). Existem centenas delas já mapeadas:
*   `NullPointerException`: O infame "Erro de Nulo". Quando você tenta usar uma variável que está vazia e o sistema não acha nada lá.
*   `ArrayIndexOutOfBoundsException`: Quando o seu gaveteiro (Array) tem 5 espaços e você tenta guardar o aluno no 6º espaço.
*   `InputMismatchException`: O do exemplo acima, quando o tipo teclado é incompatível.

> **Regra de Ouro ADS:** 
> NUNCA use `try-catch` para mascarar erros de lógica sua. Se o seu código tem um `NullPointer`, corrija com um laço `if (variavel == null)`. Você só deve usar Try-Catch para lidar com **Entradas Fora do Seu Controle**, como: 
> 1. O usuário do teclado
> 2. O Banco de Dados cair
> 3. O arquivo que sumiu do HD... coisas que o seu código por si só não tinha como prever.

## Minhas Anotações
- 
