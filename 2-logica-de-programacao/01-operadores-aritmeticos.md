# Capítulo 1: Operadores Aritméticos

## A Matemática do Java
Na programação, quase tudo se resume a processar dados, e para processar números nós usamos os **Operadores Aritméticos**. Eles são muito parecidos com a matemática que você aprendeu na escola, mas com algumas peculiaridades importantes da linguagem Java.

Os operadores fundamentais são:
*   `+` (Adição e Concatenação)
*   `-` (Subtração)
*   `*` (Multiplicação) — *Atenção: usamos o asterisco, não o 'X'*
*   `/` (Divisão) — *Atenção: usamos a barra*
*   `%` (Módulo / Resto da Divisão) — *Este é muito importante em algoritmos!*

## Exemplo Prático Completo

```java
public class OperadoresMatematicos {
    
    public static void main(String[] args) {
        // Declarando variáveis iniciais
        int a = 10;
        int b = 3;
        
        // 1. Adição (+)
        int soma = a + b;
        System.out.println("Soma: 10 + 3 = " + soma); // Imprime 13
        
        // 2. Subtração (-)
        int subtracao = a - b;
        System.out.println("Subtração: 10 - 3 = " + subtracao); // Imprime 7
        
        // 3. Multiplicação (*)
        int multiplicacao = a * b;
        System.out.println("Multiplicação: 10 * 3 = " + multiplicacao); // Imprime 30
        
        // 4. Divisão (/)
        /*
          CUIDADO AQUI! Em Java, se você divide um inteiro por outro inteiro, 
          o resultado SEMPRE será um inteiro (ele joga o resto fora).
          10 dividido por 3 na vida real é 3.3333. No Java com int, é 3.
        */
        int divisaoInteira = a / b;
        System.out.println("Divisão de int: 10 / 3 = " + divisaoInteira); // Imprime 3
        
        // Como fazer a divisão correta com quebra? Nós transformamos eles em double!
        double divisaoExata = (double) a / b; 
        System.out.println("Divisão exata de double: " + divisaoExata); // Imprime 3.3333333...
        
        // 5. Módulo (%) -> O "Restinho"
        // Este operador não calcula a porcentagem. Ele traz o RESTO da divisão.
        // Se eu divido 10 por 3, dá 3 para cada um, e SOBRA 1. Esse 1 é o módulo.
        int resto = a % b;
        System.out.println("Resto da divisão de 10 por 3 = " + resto); // Imprime 1
    }
}
```

> **Dicas de Mercado 💡**: O operador Módulo (`%`) é extremamente usado em entrevistas de testes de lógica para descobrir se um número é Par ou Ímpar. 
> Pense bem: `qualquerNumero % 2`. Se o resto der `0`, o número é par. Se o resto der `1`, o número é ímpar!

## Facilitadores: Operadores de Incremento e Atribuição
O Java (e a maioria das linguagens C-Like) possui atalhos para você escrever menos código.

```java
int contador = 0;

// O jeito longo de somar 1:
contador = contador + 1;

// O jeito intermediário (Operador de Atribuição Composta):
contador += 1;

// O atalho de Ouro (Incremento Unário):
contador++; // Adiciona +1 instantaneamente.

// Existe também para as outras operações:
int saldo = 100;
saldo -= 20; // Tira 20
saldo *= 2;  // Multiplica o saldo atual por 2
```

## Minhas Anotações
- 
