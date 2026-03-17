# Capítulo 5: Switch Case (Decisões com opções fixas)

## Escapando de um mar de `else if`
No final do capítulo anterior, eu alertei que colocar 20 comandos `else if` em sequência seria uma péssima ideia para organizar seu código no Java.
Imagine um menu numérico de banco (`1 - Saldo, 2 - Extrato, 3 - Transferir, ... Até o 9`).
Fazer um `if` para cada número ficaria terrível de ler, gigante e propenso a falhas de indentação e esquecimento das chaves.

Para menus, rotas simples e opções pré-definidas (onde você sabe exatamente o que a pessoa vai escolher, como um cardápio de restaurante), nós utilizamos a estrutura de escolha **`switch`**!

A palavra switch vem do inglês "Interruptor", e ele funciona exatamente assim: Ele testa uma variável e liga a chave exata da opção escolhida imediatamente, sem ficar passando pelas outras para perguntar.

## Como Escrever o Switch no Java (A Estrutura Clássica)

```java
import java.util.Scanner;

public class MenuPrincipal {
    
    public static void main(String[] args) {
        
        System.out.println("====== MENU DO BANCO ======");
        System.out.println("1 - Ver Saldo");
        System.out.println("2 - Fazer Pix");
        System.out.println("3 - Falar com Atendente");
        System.out.println("===========================");
        System.out.print("Escolha a opção: ");
        
        Scanner inputUsuario = new Scanner(System.in);
        int opcao = inputUsuario.nextInt();
        
        // Colocamos o valor que queremos comparar puro aqui dentro do parênteses!
        switch (opcao) {
            
            // "Case" é o caso em português. Significa: "Caso o valor seja 1:"
            case 1:
                System.out.println("Seu saldo é R$ 5.000,00");
                // A palavra BREAK quebra o switch pra ele não rodar acidentalmente as linhas de baixo!
                break;
                
            case 2:
                System.out.println("Digite a chave PIX de destino:");
                // Lógica do PIX aqui...
                break;
                
            case 3:
                System.out.println("Transferindo você para a Joana...");
                break;
                
            // Como se fosse o último "else" do if, esse cara executa se nenhum número fechar. Seu caso Padrão (Default).
            default:
                System.out.println("Erro: Opção inválida! Digite de 1 a 3.");
                break;
        }
        
    }
}
```

## Dicas Importantes ADS
*   O Java 14 em diante possui um formato ainda mais rápido para o `switch` (chamado Arrow Switch `->`), mas entender o clássico do Break acima é vital pois muito código legado nas corporações e bancos (a sua grande área de atuação Java!) usará a sintaxe com `break;` descrita acima.
*   A palavra `break` é vital no padrão antigo. Se na *case 1* você esquecer o break, o Java fará o print do caso 1 e logo em seguida continuará imprimindo o texto do caso 2, 3 e por aí vai (esse defeito maluco de comportamento se chama Fall-Through!).
*   O que você pode usar para parear no seu switch-case: No final, até o Java 6 você só podia usar o `switch` em Inteiros e Chars. Hoje, **o Java aceita que você use `switch` em `Strings` (Textos) também!** Perfeito para perguntar ao usuário: `"Você quer P, M ou G?"`

## Minhas Anotações
- 
