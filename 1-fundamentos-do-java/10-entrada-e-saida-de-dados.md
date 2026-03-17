# Capítulo 10: Entrada e Saída de Dados (Interagindo com Scanner)

## A Máquina Pede Ajuda ao Humano
Até agora, nós, como programadores, fomos os donos de todos os dados do sistema. Escrevemos o valor direto no código (`int idade = 25;`).
Mas sistemas reais precisam que o **Usuário** digite alguma coisa, não que o programador "chumbe" o valor no código fonte.

- Como mandar o Java escrever algo na tela negra do sistema (Saída / Output)? **Nós já sabemos: `System.out.println();`**
- Como mandar o Java aguardar o usuário digitar algo e captar esse texto pelo teclado (Entrada / Input)? **Vamos aprender agora: usando a ferramenta `Scanner`.**

## A Classe Scanner
No Java, para recebermos a entrada do teclado, nós convidamos um "garçom" pra trabalhar pra gente chamado **Scanner**.
Como ele é uma ferramenta "avançada", ele não está pronto para ser usado desde o início; nós precisamos **importar** ele da biblioteca gigantesca do Java antes de podermos usá-lo. (O Intellij tem o dom de fazer isso sozinho pra você se apertar Alt + Enter, mas veremos isso na prática!).

### Criando um programa interativo simples na prática:

```java
// Passo 1: Importar o pacote chamado "util" que contém o Scanner
import java.util.Scanner;

public class CadastroDeCliente {
    
    public static void main(String[] args) {
        
        // Passo 2: Criando o garçom e dizendo que ele vai ler as teclas digitadas (`System.in`, entrada do sistema)
        Scanner leitorTeclado = new Scanner(System.in);
        
        // Passo 3: Perguntando pro usuário algo (a saída na tela preta)
        System.out.println("Olá, senhor usuário! Qual é o seu nome?");
        
        // Passo 4: Esperando o usuário digitar um texto.
        // O garçom vai pegar o que foi digitado com "nextLine()" e guardar dentro da nossa variável. A tela do programa fica PARADA esperando o enter do usuário!
        String nomeRecebido = leitorTeclado.nextLine();
        
        System.out.println("E qual é a sua idade atual?");
        
        // Como agora não esperamos texto (String), e sim um inteiro (int), usamos o método "nextInt()"
        int idadeRecebida = leitorTeclado.nextInt();
        
        // Passo 5: Imprimindo tudo que o usuário respondeu na tela (chamamos isso de "Concatenar String")
        System.out.println("Perfeito! O seu nome é " + nomeRecebido + " e você tem " + idadeRecebida + " anos.");
        
        // A Boa Prática: Ao terminar de usar o garçom, sempre dispense ele para não ficar vigiando sua memória à toa.
        leitorTeclado.close();
    }
}
```

A partir do Capítulo 1 da próxima Parte (Lógica de Programação), nós só faremos programas interativos onde o usuário interage e dita os dados do jogo!

## Fim da Parte 1 - Parabéns!
Você já domina o conceito de como a JVM executa seu código, sabe estruturar classes e métodos, e sabe as regras rígidas do Java para os tipos e para não bagunçar referências.
Hora de começar a ver a linguagem explodir de utilidade com algoritmos e condicionais na Parte 2: Lógica de Programação!

## Minhas Anotações
- 
