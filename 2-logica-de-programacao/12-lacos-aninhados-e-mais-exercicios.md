# Capítulo 12: Laços Aninhados e Mais Exercícios Práticos

## Tabela de Tabuada Completa (for dentro de for)

```java
for (int i = 1; i <= 10; i++) {          // linha
    for (int j = 1; j <= 10; j++) {      // coluna
        System.out.printf("%2d x %2d = %3d | ", i, j, i*j);
    }
    System.out.println(); // pula linha
}
```

## Desafio Extra (faça hoje!):
Crie um programa que desenhe um quadrado oco de tamanho N no console usando `*`.
Exemplo para N=5:
```text
*****
*   *
*   *
*   *
*****
```

## Mais 3 Exercícios Bônus (nível médio)

1. **Jogo de Adivinhação** com limite de 5 tentativas.
2. **Verificar se um número é primo** (usando while + break).
3. **Imprimir triângulo de números** (1 / 12 / 123 / 1234...).

## Minhas Anotações
- 
