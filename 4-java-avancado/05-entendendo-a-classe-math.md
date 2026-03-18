# Capítulo 9: Entendendo a classe Math

## A Calculadora Científica do Java
Na maioria dos sistemas de negócio que você for construir (sistemas de notas, controle médico de IMC, calculadoras de imposto contábil ou mesmo jogos simples em Java), o uso de operadores simples como `+, -, *, /` e `%` soluciona quase tudo. 

Porém, e se você precisar extrair uma Raiz Quadrada? Elevar um número ao cubo? Achar o número máximo entre dois inteiros sem ter que usar if/else? Ou pior: chutar um número aleatório pros dados do Monopoly?

Para coisas pesadas de matemática, o Java nos fornece a classe mestre de utilidades: a poderosa **`Math`**.

## 1. As funções de Utilidade (Root e Pow)
Sendo a classe `Math` estática por completo, nós nunca damos o comando "new Math()". Assim como os Sysout Print e LocalDate do sistema nós chamamos o nome fixo dela com Ponto (.) no terminal e acoplamos com a resposta.

```java
public class MatematicaGenial {

    public static void main(String[] args) {
        
        // Extrair Raiz Quadrada  .sqrt()
        double x_raiz = Math.sqrt(81.0);  // "Square Root", ou raiz quadrada!
        System.out.println("A raiz de 81 é: " + x_raiz); // 9.0
        
        // Potenciação (Elevar as coisas) .pow()
        //  Math.pow ( NUMERO_BASE, ELEVADO_A );
        double x_cubo = Math.pow(5.0, 3.0); // 5 elevado ao 3 (5 * 5 * 5)
        System.out.println("5 ao Cubo é igual: " + x_cubo); // 125.0
        
        // Os máximos ou O MENOR (if encorporado de base)
        int maiorNotaPegaFácil = Math.max(9, 7); 
        System.out.println("Entre esses aí o maior absoluto visto foi o: " + maiorNotaPegaFácil);
        
        // Forçar arredondamentos pra quebrar centavos:
        System.out.println("Arredonda pra Cima o 5.1 -> " + Math.ceil(5.1));   // O 5.1 vira 6 inteiro Teto.
        System.out.println("Arredonda pro Chão o 5.9 -> " + Math.floor(5.9));  // O 5.9 derrete e vira o 5 no ralo.
        System.out.println("Arredonda Inteligente o 5.5 -> " + Math.round(5.5)); // O clássico de faculdade a favor de cima.
    }
}
```

## 2. A Roleta Russa de Jogos (A Magia Math.random)
Criar dados, raspadinhas e cassinos envolve a geração pura de cálculos baseados em sementes de Nanosegundos da placa mãe para simular incerteza humana computacional.

Para gerar qualquer número cego para roletas no java, chamamos o Mago `random()`.

```java
public class Sorte {
    public static void main(String[] args) {
        
        // ATENÇÃO NA SINTAXE MALDITA:
        // O Math.random() SOMENTE GERA DENTRO DO COMPUTADOR NÚMEROS QUEBRADOS que ficam entre 0.0 (inclusivo) e o maldito 1.0 (exclusivo).
        // Exemplo disso: 0.548 , ou 0.999 , ou 0.001. Apenas quebrados.

        // Como nós forçamos o Random fazer um Sorteio limpo e util pras nós de Mega Sena? (Números fechados de 1 até o limite de 60 por ex:) ?
        
        // PASSO 1 - Nós multiplicamos a farsa aleatoria (ex:0.5) dele por NOSSO LIMITE (No caso a Mega Sena, 60!). Ele virará ex: "30.432".
        // PASSO 2 - Usamos o cast "(int)"  pra serrar o numero quebrado sem dor e ele ser aceito como número primor de roleta redondo ex: "30".
        // PASSO 3 - Nós somamos (+ 1) fora ali se quisermos que o numero zero inicial fosse pro Lixo e comecasse o sorteio do painel rolando à partir do dado número 1.

         // Gira o dado de chumbo (O Pandeiro final mágico da formula clássica dev)
         int numeroRoletadoDaSorte = (int) (Math.random() * 60) + 1;
         
         System.out.println("Mega Sena Sorteia Hoje: " + numeroRoletadoDaSorte);

    }
}
```
Na proxima aula práticaremos nos Exercicios o Random. O uso em games de Math é lei pra IA Inimigas e danos Críticos na cabeça!

## Minhas Anotações
- 
