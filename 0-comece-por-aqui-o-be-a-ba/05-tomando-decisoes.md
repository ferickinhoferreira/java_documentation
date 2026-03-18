# 🚦 Capítulo 5: Tomando Decisões (`if` e `else`)

> **Neste capítulo:** O programa ganha INTELIGÊNCIA. Ele vai aprender a escolher entre dois (ou mais) caminhos diferentes dependendo da situação.

---

## 🤔 Por que Decisões Existem na Programação?

Sem decisões, todo programa seria um **trem sem freio**: rodaria da primeira até a última linha fazendo sempre a MESMA coisa, para TODAS as pessoas, em TODAS as situações.

Imagine o app do banco:
- **Sem if/else:** Ao apertar "Transferir", ele transfere dinheiro pra todo mundo, mesmo se você não tiver saldo. Caos!
- **Com if/else:** Ele VERIFICA: *"O saldo é suficiente? Se SIM, faça a transferência. Se NÃO, mostre uma mensagem de erro."*

**As decisões transformam um programa burro num programa inteligente.**

---

## 🏗️ A Estrutura do `if` (Se)

A palavra `if` significa **"Se"** em inglês. O Java olha para uma condição e pergunta: **"Isso é verdade?"**

```java
if (condição) {
    // Se a condição for VERDADEIRA (true), execute este bloco
}
```

### Exemplo Simples:

```java
int idade = 20;

if (idade >= 18) {
    System.out.println("Pode entrar na festa!");
}
```

**O que acontece aqui:**
1. O Java olha para `idade >= 18`
2. `idade` vale `20`. Então: `20 >= 18` → **true** (verdadeiro!)
3. Como é verdadeiro, o Java **entra** nas chaves `{ }` e executa o println
4. Resultado na tela: `Pode entrar na festa!`

---

## 🔀 O Plano B: `else` (Senão)

E se a condição for **falsa**? O `else` é o que acontece quando o `if` não deu certo.

```java
int idade = 15;

if (idade >= 18) {
    System.out.println("Pode entrar na festa!");
} else {
    System.out.println("Você ainda não tem idade suficiente.");
}
```

**O que acontece aqui:**
1. O Java olha para `idade >= 18`
2. `idade` vale `15`. Então: `15 >= 18` → **false** (falso!)
3. Como é falso, o Java **PULA** o bloco do `if` inteiro
4. O Java **ENTRA** no bloco do `else`
5. Resultado na tela: `Você ainda não tem idade suficiente.`

### Visualizando o Fluxo:

```
     [idade >= 18?]
        /      \
      SIM      NÃO
       ↓        ↓
   "Entra!"  "Não pode"
       ↓        ↓
   [continua o programa]
```

---

## 🚪 Várias Portas: `else if`

E quando existem MAIS de dois caminhos? Usa-se o `else if`:

```java
int nota = 7;

if (nota >= 9) {
    System.out.println("Conceito A - Excelente!");
} else if (nota >= 7) {
    System.out.println("Conceito B - Bom!");      // ✅ Esse será impresso!
} else if (nota >= 5) {
    System.out.println("Conceito C - Regular.");
} else {
    System.out.println("Conceito D - Reprovado.");
}
```

**Regra de ouro:** O Java testa as portas **DE CIMA PARA BAIXO**. Assim que encontra uma verdadeira, **entra nela e ignora todas as outras abaixo**, mesmo que também fossem verdadeiras.

---

## 🔍 Os Operadores de Comparação (As Perguntas)

Para o `if` funcionar, você precisa fazer uma **pergunta** dentro dos parênteses. Essas perguntas usam os operadores de comparação:

| Operador | Significado       | Exemplo          | Resultado |
|----------|-------------------|------------------|-----------|
| `>`      | Maior que         | `10 > 5`         | `true`    |
| `<`      | Menor que         | `10 < 5`         | `false`   |
| `>=`     | Maior ou igual    | `10 >= 10`       | `true`    |
| `<=`     | Menor ou igual    | `5 <= 3`         | `false`   |
| `==`     | É igual a?        | `10 == 10`       | `true`    |
| `!=`     | É diferente de?   | `10 != 5`        | `true`    |

### ⚠️ CUIDADO GIGANTE: `=` vs `==`
- **`=`** (um igual) = "**Coloca** esse valor dentro da variável" (Atribuição)
- **`==`** (dois iguais) = "**Pergunta**: esses dois valores são iguais?" (Comparação)

```java
int x = 10;          // Atribuição: coloca 10 dentro de x
if (x == 10) { ... } // Comparação: x é igual a 10?
```

---

## 🎮 Exemplo Prático: Sistema de Desconto

```java
double totalCompra = 150.00;

System.out.println("Total original: R$ " + totalCompra);

if (totalCompra > 100) {
    double desconto = 10.00;
    totalCompra = totalCompra - desconto;
    System.out.println("Parabéns! Você ganhou R$ " + desconto + " de desconto!");
} else {
    System.out.println("Compre mais de R$ 100 para ganhar desconto!");
}

System.out.println("Total a pagar: R$ " + totalCompra);
```

**Saída:**
```
Total original: R$ 150.0
Parabéns! Você ganhou R$ 10.0 de desconto!
Total a pagar: R$ 140.0
```

---

## ⚠️ Erros Comuns Com `if/else`

| Erro | Problema | Correção |
|------|----------|----------|
| `if (idade = 18)` | Usou `=` em vez de `==` | `if (idade == 18)` |
| `if (idade >= 18);` | Ponto e vírgula APÓS o if | Tire o `;` depois do `)` |
| Esquecer as chaves `{ }` | O else pode se conectar ao if errado | SEMPRE use `{ }` |

---

Viu como seu computador agora é um sistema que toma decisões? Tudo o que você usa hoje — Facebook, Instagram, apps de banco — funciona exatamente assim: *"Se o login for correto, mostre o perfil. Senão, mostre erro."*

No próximo capítulo, vamos aprender a **Repetir coisas**, para que você não precise escrever 100 vezes o mesmo comando! 🔄

> **Cada capítulo te deixa mais forte.** Você está construindo a base que vai sustentar toda a sua carreira. Continue! ☕🚀✨💪🏆

## Minhas Anotações
- 

<!-- EXERCISES
{
  "quiz": [
    {
      "question": "Qual a diferença entre = e == no Java?",
      "options": ["Nisenhuma", "= é para comparar e == para atribuir", "= é para atribuir valor e == para comparar", "= é mais rápido"],
      "answer": 2,
      "explanation": "A regra de ouro: = (um só) guarda um valor na variável. == (dois) pergunta se dois valores são iguais."
    },
    {
      "question": "O que acontece se a condição do 'if' for falsa e houver um 'else'?",
      "options": ["O programa trava", "O código pula o 'if' e executa o que está no 'else'", "O Java ignora o 'else' também", "O computador explode"],
      "answer": 1,
      "explanation": "O else é o 'Plano B'. Se o if falhar, o Java executa obrigatoriamente o else."
    },
    {
      "question": "No 'else if', quando o Java para de testar as condições?",
      "options": ["Quando testa todas", "Assim que encontra a primeira verdadeira", "Apenas no final do arquivo", "Quando encontra um erro"],
      "answer": 1,
      "explanation": "O else if é uma escada. Assim que o Java pisa num degrau verdadeiro, ele entra nele e ignora todos os degraus abaixo."
    }
  ],
  "challenge": "Crie um programa que peça a velocidade de um carro. Se for acima de 80, imprima 'Multado!'. Se for entre 60 e 80, imprima 'Atenção!'. Se for menos de 60, 'Velocidade Segura'.",
  "project": {
    "title": "Simulador de Crédito Bancário",
    "description": "Crie um sistema que peça o Valor do Empréstimo, o Salário do usuário e o Número de Parcelas. O empréstimo SÓ deve ser aprovado se a parcela mensal não ultrapassar 30% do salário.",
    "hints": ["Calcule a parcela: valorEmprestimo / parcelas", "Use a condição: if (parcela <= salario * 0.3)", "Imprima 'Empréstimo Aprovado' ou 'Reprovado'"]
  }
}
-->
