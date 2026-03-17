# Capítulo 6: Escopo de Variáveis (Variáveis locais e globais)

## O que acontece em Las Vegas, fica em Las Vegas
Um dos maiores bugs que assombram os alunos iniciantes de ADS em Java se chama **"Erro de Escopo"**.

O escopo (Scope) é o "território" onde uma variável vive e respira. Em Java, o território de uma variável é estritamente definido pelas chaves `{ }` do bloco onde ela nasceu.

Quando o bloco termina (quando a chave fecha `}`), a variável morre, é evaporada pelo *Garbage Collector* e ninguém mais fora dali sabe que ela existiu.

### 1. Escopo Local (De Método)

Se você cria uma variável dentro de um método, ela é **LOCAL**. O método do lado não faz a menor ideia da existência dela!

```java
public class SistemaDeCaixa {

    public static void calcularDesconto() {
        // A variável "desconto" nasce aqui.
        double desconto = 50.0; 
        System.out.println("Desconto aplicado: " + desconto);
    } // Aqui a chave fecha. A variável "desconto" é assassinada pela JVM.

    public static void main(String[] args) {
        
        calcularDesconto();
        
        // ERRO! O main() não consegue ver a variável "desconto", pois ela era exclusiva do outro bloco.
        // System.out.println(desconto); -> IDE Fica vermelha.
    }
}
```

Para consertar o código acima, usaríamos o que aprendemos no Capítulo 5: O `calcularDesconto()` precisaria ter um `return desconto;` para jogar a bola de volta pro Main!

### 2. Escopo de Bloco (If e For)
A regra da "Las Vegas" serve até para blocos de `if` e laços de repetição `for`.

```java
public class Validacao {
    public static void main(String[] args) {
        
        int idade = 20;

        if (idade >= 18) {
            String mensagem = "Maior de idade autorizado!";
            System.out.println(mensagem); // Aqui funciona perfeitamente.
        }
        
        // ERRO! A variável "mensagem" nasceu DENTRO da chave do IF. 
        // Como o if já acabou e a chave fechou ali em cima, a mensagem não existe mais aqui fora.
        // System.out.println(mensagem); 
        
    }
}
```
**A Regra de Ouro do Escopo:** "Quem tá de fora não vê quem tá de dentro. Mas quem tá de dentro, VÊ quem tá de fora!"
Ou seja, se a variável nascer no começo do `main()`, ela sobrevive em tudo que estiver dentro do `main` (inclusive nos `ifs` e `fors`).

### 3. Escopo Global (Nível de Classe)
Mas e se eu realmente quiser uma variável que TODA a classe (todos os métodos) consigam enxergar livremente, tipo um banco de dados temporário ali em cima no topo do arquivo?
Neste caso, criamos ela FORA de todos os métodos, grudada no conceito de Classe. (Por enquanto usaremos ela de forma estática `static`).

```java
public class CaixaEletronico {

    // Escopo GLOBAL. Todos os métodos abaixo conseguem ver e ALTERAR o saldoLivre!
    static double saldoGeralCaixa = 1000.0;

    public static void sacar() {
        saldoGeralCaixa -= 100.0; // Puxou da classe!
    }

    public static void verSaldo() {
        System.out.println("Total ainda sobrando na máquina inteira: " + saldoGeralCaixa);
    }

    public static void main(String[] args) {
        sacar();
        verSaldo(); // Imprimirá 900.0!
    }
}
```

Vá se acostumando: Java te obriga a isolar lógicas. A IDE IntelliJ ajuda você demais com isso gritando se algo estiver fora do escopo.

## Minhas Anotações
- 
