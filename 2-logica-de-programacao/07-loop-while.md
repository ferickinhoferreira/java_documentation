# Capítulo 7: Loop: while (Repetições por condição)

## Mas e se eu NÃO souber a quantidade final?
O loop `for` é incrível quando sabemos o número exato de repetições (ex: processar os 10 pedidos do carrinho).
Porém, e se você criar um jogo da velha contra o computador? Você não faz ideia de quantos turnos de *"Digite um número"* o jogador vai demorar para perder, vencer ou dar velha. Podem ser 5, podem ser 9.

Ou e se você perguntar "Digite a senha para acessar o banco"?
Você vai pedir uma vez e se ele errar vai pedir de novo... e de novo... e de novo **enquanto** a senha dele estiver incorreta. Pode ser 1 vez, podem ser 50 tentativas perdendo a paciência.

É pra isso que existe o laço **`while`** (Significa: *Enquanto*).

O código repete o seu processo infinitamente, até que a variável de checagem dele mude o seu "status" dentro da programação de volta para False.

## A Sintaxe Clássica do While

Exemplo construindo o "Sistema de Segurança":

```java
import java.util.Scanner;

public class AcessoBanco {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        int senhaCorreta = 1234;
        
        // Pede para iniciar:
        System.out.println("Bem-vindo(a)! Digite a sua senha:");
        int senhaDigitada = scanner.nextInt();
        
        // O CÉREBRO INFINITO (O WHILE)
        // Isso lê-se como: ENQUANTO a senha que o cara bateu for DIFERENTE da correta, prenda ele aqui dentro.
        while (senhaDigitada != senhaCorreta) {
            
            System.out.println("❌ SENHA INCORRETA. Acesso Negado!");
            System.out.println("Por favor, tente novamente digitando sua senha: ");
            
            // Você precisa OBRIGATORIAMENTE dar a chance do usuário mudar o valor aqui dentro do laço...
            senhaDigitada = scanner.nextInt(); 
            // ...Senão, haverá um problema eterno que explicarei abaixo!
        }
        
        // Se a instrução do while bater "false" (ou seja, ele quebrou a trava e igualou a senha) ele escapa para cá!
        System.out.println("✅ ACESSO APROVADO! Redirecionando aos seus saldos...");
        
        scanner.close();
    }
}
```

## O Perigo Nº 1 dos Programadores: O LOOP INFINITO (The Infinite Loop 😵)
Se dentro das chaves do `while` `{  }` não existir um caminho, uma digitação ou uma lógica matemática programada que vá mudar (uma hora ou outra) a variável `senhaDigitada`... O programa vai repetir aquele texto `System.out.println("Acesso negado");` milhões de vezes por segundo no terminal!

Isso consome 100% da vida útil do seu processador do computador, a tela vai congelar na Ide, seu HD começará a girar absurdos e você vai precisar forçar o fim do Intellij matando o prompt na mão com raiva pra não queimar ou reiniciar sua máquina (todo dev que já abriu uma IDE já viveu e testou esse bug pra ver funcionar, faz parte da experiência! 🔥).

Por isso: **Sempre** forneça uma forma de quebrar a lógica matemática dentro das chaves do comando While!

## Minhas Anotações
- 
