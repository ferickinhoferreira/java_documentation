# Capítulo 6: Loop: for (Repetições com contador)

## Como não quebrar os dedos do programador
Imagine a seguinte tarefa que seu professor ou chefe passa: *"Escreva um programa em Java que conte sequencialmente na tela todos os números de 1 até 1.000 para eu medir um negócio."*

Se você não souber lógicas de repetição (Loops), você precisaria copiar e colar o `System.out.println` 1.000 vezes na mão alterando os números:
```java
// O jeito da exaustão:
System.out.println(1);
System.out.println(2);
System.out.println(3);
...
System.out.println(1000); // 1.000 linhas perdidas atoa.
```

Para evitar isso, ensinamos o computador a andar em círculos até atingir um objetivo com a criação de **Laços de Repetição**.

O primeiro laço (e de longe o mais famoso na comunidade, presente em praticamente todas as linguagens desde os anos 70) é o laço **`for`** (Traduzindo do inglês: "Para").
Você usa o 'for' **quando você Sabe desde o começo exatamente quantas vezes isso vai se repetir**, você tem o total fechado (seja de 1 a 1000, seja percorrendo uma tabela de 5 posições de carros num estacionamento fechado, etc). Ele foi feito pra **contar**.

## Anatomia de um FOR em Java
Um FOR no Java possui 3 partes grudadas em uma linha só e separadas por ponto e vírgula `;`. Pense assim: De Onde Eu Começo? ; Quando eu Paro? ; E qual meu passo?.

```java
//   (1. Começo do cronômetro); (2. Limite onde ele pára); (3. O Passo dele)
for (int contador = 1; contador <= 1000; contador++) {
    
    // Isso repetirá exatas 1.000 vezes em frações de milissegundo pelo processador!
    System.out.println("Número: " + contador);
    
}
```

### Explicando as três engrenagens do `for`:
1.  **A Origem (`int contador = 1`)**: Ele dita de onde a variável vai nascer pra medir o laço. A maioria das linguagens de programação começa a contagem de tabelas sempre a partir do **Zéro (`0`)**. Mas pra exemplos visuais humanos nós colocamos 1.
2.  **A Condição (`contador <= 1000`)**: O miolo do sanduíche é o nosso **`if`**. Enquanto o número ali for Menor ou Igual a mil, o giro continua rodando loucamente. Se na milésima vez virar 1001, o laço falseia essa condição e **morre**, escapando da repetição para o que vier abaixo dele.
3.  **A Incrementalidade / Ação Final (`contador++`)**: O jeito que o contador dá o próximo passo. O `++` significa *suba o número em "+1"* cada vez que o bloco chaves do código terminar uma repetição. (Ele não precisa ir de 1 em 1, você podia perfeitamente usar `contador += 5` pra contar de 5 em 5 na tela do console!). 

```java
// Um For fazendo tabuada do 7 de trás para frente no Console:
for(int x = 10; x >= 0; x--) {
    System.out.println("7 x " + x + " = " + (7 * x));
}
```

## Minhas Anotações
- 
