# 🔄 Capítulo 6: Repetições (`while` e `for`)

> **Neste capítulo:** O computador aprende a fazer a mesma coisa VÁRIAS vezes sem que você precise escrever o mesmo código 100 vezes. Bem-vindo ao poder dos loops!

---

## 🤔 Por que Repetições Existem?

Já aconteceu de você ter que escrever 100 vezes a mesma coisa na escola como castigo? O computador é seu ajudante perfeito pra isso. Ele não se cansa! Pode fazer a mesma coisa 1 milhão de vezes sem reclamar.

**Sem loops (repetições):**
```java
System.out.println("Eu amo Java! (1)");
System.out.println("Eu amo Java! (2)");
System.out.println("Eu amo Java! (3)");
// ... e mais 97 linhas? Impossível!
```

**Com loops:**
```java
for (int i = 1; i <= 100; i++) {
    System.out.println("Eu amo Java! (" + i + ")");
}
// 3 linhas fazem o trabalho de 100! 🎉
```

---

## 🔁 O `while` — "Enquanto For Verdade, Continue!"

O `while` (que significa **"enquanto"**) é o loop mais simples. Ele funciona assim:

1. O Java olha para a condição
2. Se for **true**: executa o bloco, volta e olha de novo
3. Se for **false**: para e sai do loop

```java
while (condição) {
    // Enquanto a condição for verdade, repita isso
    // IMPORTANTE: algo aqui dentro TEM que mudar a condição!
}
```

### Exemplo: Contagem de 1 a 5

```java
int contador = 1;          // A caixinha começa com 1

while (contador <= 5) {     // "Enquanto o contador for menor ou igual a 5..."
    System.out.println("Contando: " + contador);
    contador = contador + 1; // CRUCIAL! Sem isso, loop infinito!
}

System.out.println("Acabou!");
```

**O que acontece passo a passo:**

| Volta | Valor de `contador` | `contador <= 5` ? | O que acontece |
|-------|--------------------|--------------------|----------------|
| 1ª    | 1                  | `1 <= 5` → true   | Imprime "1", soma +1 |
| 2ª    | 2                  | `2 <= 5` → true   | Imprime "2", soma +1 |
| 3ª    | 3                  | `3 <= 5` → true   | Imprime "3", soma +1 |
| 4ª    | 4                  | `4 <= 5` → true   | Imprime "4", soma +1 |
| 5ª    | 5                  | `5 <= 5` → true   | Imprime "5", soma +1 |
| 6ª    | 6                  | `6 <= 5` → **false** | **SAI DO LOOP!** |

### Exemplo Real: Gasolina do Carro

```java
int litrosGasolina = 5;

while (litrosGasolina > 0) {
    System.out.println("Vrumm! Acelerando... Gasolina: " + litrosGasolina + "L");
    litrosGasolina = litrosGasolina - 1;  // Gasta 1 litro por volta
}

System.out.println("Parei! Acabou a gasolina! ⛽");
```

---

## 🔢 O `for` — "Faça Isso EXATAMENTE X Vezes!"

O `for` é o loop preferido dos programadores quando você **sabe quantas vezes** quer repetir. Ele junta 3 coisas em uma linha só:

```java
for (início; condição; incremento) {
    // O que vai ser repetido
}
```

### Dissecando o `for`:

```java
for (int i = 1; i <= 5; i++) {
//   ─────────  ──────  ───
//      ↓         ↓      ↓
//   "COMEÇO    "ATÉ   "DEPOIS DE
//    em 1"    QUANDO?" CADA VOLTA,
//             i <= 5   SOMA +1"
}
```

| Parte | O que faz | Roda quando? |
|-------|-----------|--------------|
| `int i = 1` | Cria o contador começando em 1 | **Uma vez só**, no início |
| `i <= 5` | "Continue enquanto i for ≤ 5" | **Antes** de cada volta |
| `i++` | Soma +1 no contador | **Depois** de cada volta |

### Exemplo: Tabuada do 7

```java
System.out.println("=== TABUADA DO 7 ===");

for (int i = 1; i <= 10; i++) {
    int resultado = 7 * i;
    System.out.println("7 x " + i + " = " + resultado);
}
```

**Saída:**
```
=== TABUADA DO 7 ===
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

---

## ⚔️ `while` vs `for` — Quando Usar Cada Um?

| Situação | Use | Exemplo |
|----------|-----|---------|
| Você **sabe** quantas vezes repetir | `for` | Imprimir de 1 a 100 |
| Você **NÃO sabe** quantas vezes | `while` | Pedir senha até o usuário acertar |
| Ações controladas por um contador | `for` | Percorrer uma lista de nomes |
| Ações controladas por uma condição | `while` | Rodar enquanto o jogo estiver ativo |

---

## ☠️ O Loop Infinito (O Pesadelo)

Se você esquecer de mudar a variável dentro do loop, ele roda **PARA SEMPRE**:

```java
int x = 1;
while (x <= 5) {
    System.out.println("Preso para sempre!");
    // ESQUECEU de fazer x++  → O x nunca muda → A condição nunca fica false → LOOP INFINITO!
}
```

**Como resolver:** Sempre garanta que algo dentro do loop MUDE a condição para que ela eventualmente fique `false`.

> 💡 **Dica:** Se o seu programa "travou" e não faz nada, provavelmente você está num loop infinito. No IntelliJ, clique no botão vermelho de "Stop" para parar.

---

## 🎮 Desafio Prático: Contagem Regressiva de Foguete

```java
public class LancamentoFoguete {
    public static void main(String[] args) {

        System.out.println("=== LANÇAMENTO DO FOGUETE ===");

        // Contagem regressiva com for (de 10 até 1)
        for (int i = 10; i >= 1; i--) {
            System.out.println(i + "...");
        }

        System.out.println("🚀 LANÇAR!!!");
    }
}
```

**Saída:**
```
=== LANÇAMENTO DO FOGUETE ===
10...
9...
8...
7...
6...
5...
4...
3...
2...
1...
🚀 LANÇAR!!!
```

> Perceba: aqui o `for` vai **de trás para frente**! `i--` tira 1 a cada volta, e a condição é `i >= 1`.

---

## 🏁 Parabéns! Você Completou o Bê-á-bá!

Você já sabe as **4 habilidades fundamentais** da programação:

| Habilidade | O que aprendeu | Capítulo |
|---|---|---|
| 📦 **Guardar** | Variáveis (`int`, `double`, `String`, `boolean`) | Cap. 2 |
| 📢 **Falar** | `System.out.println()` | Cap. 3 |
| 🎤 **Ouvir** | `Scanner` | Cap. 4 |
| 🚦 **Decidir** | `if` / `else` | Cap. 5 |
| 🔄 **Repetir** | `while` / `for` | Cap. 6 |

Com essas 5 ferramentas, você já conseguiria criar quase qualquer programa simples do mundo! 🎉

A partir daqui, vamos nos aprofundar nos detalhes do Java para transformar você em um **profissional**. A base já está construída — agora vamos erguer o prédio! 🏗️

> **Você já é um programador em construção!** Não desista! ☕🚀✨💪🏆

## Minhas Anotações
- 
