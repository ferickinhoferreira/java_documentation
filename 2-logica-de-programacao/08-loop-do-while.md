# Capítulo 8: Loop: do while (Executa pelo menos uma vez)

## A pegadinha do *While* tradicional
No capítulo anterior, nós usamos o `while` para pedir uma senha de banco.
Porém, olha a seguinte estrutura:

```java
int moedasNaCarteira = 0;

// O Java vai olhar para isso e pensar: "0 é maior que 0? FALSO. Então nem entro aí!"
while (moedasNaCarteira > 0) {
    System.out.println("Vou comprar um pão");
}

System.out.println("Fui pra casa dormir.");
```
Se a condição do `while` tradicional for Falsa logo na **primeira vez** que o Java olha para ele, o bloco de código interno é sumariamente ignorado. O programa pula direto para as linhas debaixo. Nenhuma ação será tomada.

Mas e se você precisar garantir que o seu sistema faça uma ação **pelo menos uma vez na vida**, antes de perguntar se deve repetir?

## Entra em cena o `do-while` (Faça-Enquanto)
A palavra `do` significa "Faça". 
Na prática, o `do-while` trabalha de **cabeça para baixo** em relação ao `while` comum.
Ele primeiro executa o seu código (mesmo que seja algo errado ou absurdo), e SÓ NO FIM, lá embaixo, ele pergunta para a condição: *"Ei, era pra eu rodar isso de novo?"*

### Sintaxe Prática (O Menu Interativo Infalível)

Essa estrutura é a queridinha dos professores de faculdade para criar Menus em terminais, pois o menu sempre **tem que aparecer na tela a primeira vez** pro usuário ler as opções numéricas, antes que o usuário possa interagir pra decidir fechar (opção de Saída).

```java
import java.util.Scanner;

public class MaquinaSalgadinhos {

    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        int opcaoEscolhida; // Nós só declaramos a classe aqui no topo (vazia), sem dar valor a ela ainda.
        
        // CÉREBRO DO FAÇA-ENQUANTO
        do {
            
            // O Java engole esse "do" e desce rasgando o código SEM FAZER PERGUNTAS!
            System.out.println("\n========== MÁQUINA DE SALGADINHOS ==========");
            System.out.println("1. Doritos ($5,00)");
            System.out.println("2. Cheetos ($4,50)");
            System.out.println("3. SAIR do sistema");
            System.out.print("Escolha seu lanche: ");
            
            opcaoEscolhida = input.nextInt(); // Aqui o usuário bate a opção no teclado...
            
            if (opcaoEscolhida == 1) {
                System.out.println("Você pegou um pacote de Doritos 🧀");
            } else if (opcaoEscolhida == 2) {
                System.out.println("Você pegou um pacote de Cheetos 🔥");
            } else if (opcaoEscolhida != 3) {
                System.out.println("Opção inválida, a mola travou!");
            }
            
        // É apenas AQUI no pé de página da chave final que o Java checa a condição:
        // "Enquanto a opção digitada lá em cima for diferente de 3 (Sair), repita a tela toda!"
        } while (opcaoEscolhida != 3); 
        
        
        System.out.println("Obrigado por comprar, desligando a máquina e indo embora...");
        input.close();
    }
}
```

## Resumo (O Segredo de Entrevista)
Qual é a diferença brutal entre `while` e `do-while`?
*   O **while** é pré-testado: Verifica a fechadura antes de rodar a maçaneta. Pode acontecer de rodar `Zero` vezes na vida do programa.
*   O **do-while** é pós-testado: Arromba a porta, entra, bagunça a casa e depois pergunta *"Podia entrar?"*. Se a resposta for sim ele quebra a casa toda denovo. Senão ele sai e vai embora. Mas rodou obrigatoriamente `1 Vez` na vida de qualquer jeito.

## Minhas Anotações
- 
