# ⚡ Mergulho Profundo: Operadores (Os Verbos do Java)

> **Objetivo:** Se as variáveis são as "Caixas" (substantivos), os **Operadores** são os **"Verbos"** (ações). Sem operadores, as variáveis seriam estátuas — ficariam paradas com o mesmo valor para sempre. Aqui vamos entender **cada tipo de operador**, **por que existe**, **como altera o código** e **como usar na prática**.

---

## 🏗️ 1. O Que São Operadores? (A Lógica da Existência)

Imagine que você tem duas maçãs em uma mão e três na outra. Você sabe que tem cinco no total. Como seu cérebro chegou nesse resultado? Ele usou a operação "soma".

**Na programação, o único jeito de transformar, comparar ou combinar valores é usando operadores.** Sem eles, as variáveis seriam dados mortos que não fazem nada.

```java
int saldo = 1000;   // Saldo é 1000 para sempre? Não!
saldo = saldo - 200; // O operador '-' TRANSFORMOU o valor! Agora é 800.
```

---

## ➕ 2. Operadores Aritméticos (A Matemática do Código)

São os operadores que fazem **cálculos**. Quase iguais à escola, com pequenas diferenças:

| Operador | Nome | Exemplo | Resultado | Detalhe Importante |
|:---:|---|---|---|---|
| `+` | Adição | `10 + 3` | `13` | Com Strings, vira "colagem"! |
| `-` | Subtração | `10 - 3` | `7` | Normal |
| `*` | Multiplicação | `10 * 3` | `30` | Use `*`, NÃO use `x`! |
| `/` | Divisão | `10 / 3` | `3` ⚠️ | `int/int` = `int`! Joga decimal fora! |
| `%` | Módulo (Resto) | `10 % 3` | `1` | Dá o RESTO da divisão, não a %! |

### 🔍 Operador `/` (Divisão) — A Armadilha

A divisão no Java tem um comportamento que pega todo iniciante:

```java
int resultado = 10 / 3;
System.out.println(resultado);  // 3 (NÃO é 3.33!)

double correto = 10.0 / 3.0;
System.out.println(correto);    // 3.3333... (agora sim!)
```

**Regra:** Se os DOIS lados forem `int`, o resultado é `int` (sem decimal). Para ter decimal, pelo menos UM lado precisa ser `double`.

### 🔍 Operador `%` (Módulo) — O Mais Útil em Entrevistas

O `%` **NÃO calcula porcentagem**. Ele dá o **RESTO** da divisão:

```
10 ÷ 3 = 3 (cabe 3 vezes), sobra 1
Então: 10 % 3 = 1
```

**Uso mais famoso:** Descobrir se um número é par ou ímpar:
```java
int numero = 7;
if (numero % 2 == 0) {
    System.out.println("Par!");
} else {
    System.out.println("Ímpar!");  // ← Esse será impresso (7 % 2 = 1, não é 0)
}
```

### 💡 Como o Operador Aritmético Altera o Código:

```java
int preco = 10 + 5 * 2;  // Quanto dá? 🤔
```

Você pode pensar: `10 + 5 = 15`, depois `15 * 2 = 30`. **ERRADO!**

O Java segue a mesma ordem da matemática: **multiplicação antes da soma!**
- Primeiro: `5 * 2 = 10`
- Depois: `10 + 10 = 20`

**Resultado: `20`, não `30`!** A ordem dos operadores literalmente altera o destino do seu programa!

**Para forçar a ordem:** Use parênteses!
```java
int preco = (10 + 5) * 2;  // Agora sim: 15 * 2 = 30
```

---

## ⚖️ 3. Operadores Relacionais (As Perguntas de Sim ou Não)

Esses operadores **comparam** dois valores e SEMPRE geram um `boolean` (`true` ou `false`). São o ingrediente principal do `if/else`.

| Operador | Pergunta | Exemplo | Resultado |
|:---:|---|---|---|
| `==` | "É igual?" | `5 == 5` | `true` |
| `!=` | "É diferente?" | `5 != 3` | `true` |
| `>` | "É maior?" | `5 > 3` | `true` |
| `<` | "É menor?" | `5 < 3` | `false` |
| `>=` | "É maior ou igual?" | `5 >= 5` | `true` |
| `<=` | "É menor ou igual?" | `3 <= 5` | `true` |

### ⚠️ PEGADINHA MORTAL: `=` vs `==`
- **`=`** (um só) = **Atribuição**: "Coloca esse valor na caixa"
- **`==`** (dois) = **Comparação**: "Esses dois valores são iguais?"

```java
int x = 10;          // Atribuição (coloca 10 em x)
boolean teste = (x == 10); // Comparação (x é igual a 10? true!)
```

### Como os Relacionais Alteram o Código:
São os **gatilhos** das decisões. Sem eles, o computador não teria como escolher entre dois caminhos:

```java
double saldo = 500.0;
double valorSaque = 300.0;

if (saldo >= valorSaque) {  // O operador >= gera true ou false
    saldo = saldo - valorSaque;
    System.out.println("Saque realizado! Saldo: R$ " + saldo);
} else {
    System.out.println("Saldo insuficiente!");
}
```

---

## 🧠 4. Operadores Lógicos (As Decisões Complexas)

Na vida real, uma pergunta só nem sempre basta:
- "Para entrar no show eu preciso ter 18 anos **E** ter ingresso."
- "A loja fecha se for feriado **OU** domingo."

Os operadores lógicos **combinam** várias condições `boolean`:

| Operador | Nome | Regra | Exemplo |
|:---:|---|---|---|
| `&&` | **E** (AND) | **TODAS** devem ser true | `true && true` → `true` |
| `\|\|` | **OU** (OR) | **PELO MENOS UMA** deve ser true | `false \|\| true` → `true` |
| `!` | **NÃO** (NOT) | **INVERTE** o valor | `!true` → `false` |

### Tabela-Verdade do `&&` (E):

| Condição 1 | Condição 2 | Resultado |
|:---:|:---:|:---:|
| true | true | **true** ✅ |
| true | false | false ❌ |
| false | true | false ❌ |
| false | false | false ❌ |

> **Dica:** Com `&&`, basta UM ser `false` para o resultado ser `false`.

### Tabela-Verdade do `||` (OU):

| Condição 1 | Condição 2 | Resultado |
|:---:|:---:|:---:|
| true | true | **true** ✅ |
| true | false | **true** ✅ |
| false | true | **true** ✅ |
| false | false | false ❌ |

> **Dica:** Com `||`, basta UM ser `true` para o resultado ser `true`.

### Exemplo Completo com os Três:

```java
int idade = 20;
boolean temIngresso = true;
boolean contaBloqueada = false;

// ✅ AND: As DUAS precisam ser verdade
boolean entraNoShow = (idade >= 18) && temIngresso;
System.out.println("Entra no show? " + entraNoShow); // true

// ✅ OR: Basta UMA ser verdade
boolean temDesconto = (idade < 12) || (idade > 60);
System.out.println("Tem desconto? " + temDesconto); // false

// ✅ NOT: Inverte
boolean podeLogar = !contaBloqueada;
System.out.println("Pode logar? " + podeLogar); // true (NÃO está bloqueada)
```

---

## 📈 5. Operadores de Atalho (Hacks de Programador)

### Incremento e Decremento:
```java
int contador = 0;
contador++;   // Agora é 1 (mesmo que: contador = contador + 1)
contador++;   // Agora é 2
contador--;   // Agora é 1 (subtraiu 1)
```
**Para que serve?** Principalmente como contador em loops (`for` e `while`).

### Atribuição Composta:
```java
int saldo = 100;
saldo += 50;   // 150 (mesmo que: saldo = saldo + 50)
saldo -= 30;   // 120
saldo *= 2;    // 240
saldo /= 4;    // 60
```
**Para que serve?** Economiza tempo de digitação e torna o código mais limpo.

---

## 🔥 6. Como o Operador Define o Destino do Código (Exemplo Real)

Imagine um **sistema de radar de trânsito**:

```java
double velocidade = 95.0;           // Velocidade do carro capturada pelo radar
double limiteVia = 80.0;            // Limite permitido na via
boolean multaAplicada = false;       // Começa sem multa

// OPERADOR RELACIONAL: pergunta "tá acima do limite?"
if (velocidade > limiteVia) {                          // 95 > 80 → true!

    // OPERADOR ARITMÉTICO: calcula QUANTO acima do limite
    double excesso = velocidade - limiteVia;            // 95 - 80 = 15 km/h acima

    // OPERADOR ARITMÉTICO: calcula o valor da multa
    double valorMulta = excesso * 7.50;                 // 15 * 7.50 = R$ 112.50

    // OPERADOR DE ATRIBUIÇÃO: registra que a multa foi aplicada
    multaAplicada = true;

    System.out.println("MULTA! Excesso de " + excesso + " km/h");
    System.out.println("Valor da multa: R$ " + valorMulta);
} else {
    System.out.println("Velocidade dentro do limite. Boa viagem!");
}
```

**Viu?** As variáveis guardam os fatos (velocidade, limite). Mas os **operadores criam as consequências** (multa, valor). Sem operadores, o Java seria apenas uma lista de compras inútil. Com eles, o Java torna-se um sistema vivo! ⚡🚗

---

## 🏁 Resumo Rápido

| Tipo | Para que serve | Exemplos |
|---|---|---|
| **Aritméticos** | Fazer contas | `+ - * / %` |
| **Relacionais** | Comparar valores | `== != > < >= <=` |
| **Lógicos** | Combinar condições | `&& \|\| !` |
| **Atalhos** | Economizar código | `++ -- += -= *= /=` |

## Minhas Anotações
- 
