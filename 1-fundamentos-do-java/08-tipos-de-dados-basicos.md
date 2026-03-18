# 📦 Capítulo 08: Variáveis, Tipos de Dados, Operadores e Estruturas — O MEGA GUIA DEFINITIVO

> **Antes de começar:** Você não é burro. Programação é difícil porque ninguém explica direito. Este capítulo vai ser LONGO de propósito. Leia com calma, faça pausas, e volte aqui sempre que precisar. O objetivo é que você saia daqui **entendendo de verdade** cada conceito, não decorando.

---

# 🧠 MEGA SEÇÃO 1 — VARIÁVEIS: A BASE DE TUDO

## 1.1 — O Que É Uma Variável? (Explicação Profunda)

Antes de qualquer código, vamos entender o conceito na vida real.

### A Analogia do Armário

Imagina que o seu computador é um **armário gigante com milhões de gavetas vazias**. Cada gaveta tem um espaço diferente. Umas são pequenas (cabem um papel), outras são médias (cabem uma caixa de sapato), e algumas são enormes (cabem um cobertor).

O problema é: **o computador é muito organizado, mas muito burro**. Ele não sabe o que você quer guardar se você não avisar antes. Ele precisa de 3 informações:

1. **Que TIPO de coisa você vai guardar?** (Isso define o TAMANHO da gaveta)
2. **Qual o NOME dessa gaveta?** (Para você achar ela depois)
3. **O que vai DENTRO dela?** (O valor inicial)

### O Diálogo Com o Computador

Quando você escreve uma variável, é como se você tivesse esta conversa:

**Você:** "Ei, computador! Preciso de uma gaveta."
**Computador:** "Certo. Que tipo de coisa você vai guardar? Se for um número pequeno, eu pego uma gaveta pequena. Se for texto longo, eu pego uma grande."
**Você:** "Vou guardar um número inteiro (sem vírgula)."
**Computador:** "Beleza. Vou reservar a gaveta do tipo `int`. Qual o nome que você vai dar pra ela?"
**Você:** "Vou chamar de `idade`."
**Computador:** "Fechado. A gaveta `int idade` está pronta. O que tem dentro?"
**Você:** "O número `25`."

### Em código Java, esse diálogo vira UMA linha:
```java
int idade = 25;
```

### Dissecando Cada Pedaço Dessa Linha:

| Pedaço   | O que é              | Analogia                              |
|----------|----------------------|---------------------------------------|
| `int`    | O **TIPO** da gaveta | "Quero uma gaveta para números inteiros" |
| `idade`  | O **NOME** da gaveta | "A etiqueta colada na frente"          |
| `=`      | O **COMANDO** "coloca dentro" | "Abre a gaveta e bota isso lá"   |
| `25`     | O **VALOR** guardado | "O conteúdo da gaveta"                |
| `;`      | O **PONTO FINAL**    | "Fim da ordem. Obrigatório no Java."  |

> 💡 **Sacou?** A variável é só isso: **uma gaveta na memória do computador com um nome, um tipo e um valor dentro.**

---

## 1.2 — Por Que Variáveis Existem? Qual a Lógica?

Imagine um programa de banco. Quando você abre o app do banco e vê "Saldo: R$ 1.500,00", aquele número **R$ 1.500** está guardado em algum lugar. Ele não aparece do nada. Ele está **armazenado em uma variável** no servidor do banco.

Sem variáveis, o programa não conseguiria:
- **Lembrar** do seu nome quando você faz login
- **Guardar** o seu saldo
- **Calcular** quanto sobra depois de um pagamento
- **Comparar** se você tem saldo suficiente para uma compra

**Variáveis são a MEMÓRIA do programa.** Sem elas, o programa seria como uma pessoa com amnésia total — não guardaria nenhuma informação.

---

## 1.3 — Onde as Variáveis Moram? (RAM vs Disco)

Muitos iniciantes se perguntam: "Para onde vai a variável quando eu desligo o computador?".

1. **Memória RAM:** É onde as variáveis vivem. É uma memória **ultra rápida**, mas **volátil** (apaga quando desliga). Quando você roda o seu programa, as variáveis nascem na RAM. Quando você fecha o programa ou desliga o PC, a RAM é limpa e as variáveis **morrem**.
2. **Disco Rígido (HD/SSD):** É onde ficam os arquivos permanentes (fotos, vídeos, arquivos .txt).

**Por que isso importa?** Porque criar variáveis "gasta" RAM. Por isso o Java pede pra você escolher o "tamanho da caixa" (byte, int, long) com cuidado — pra não desperdiçar memória.

---

## 1.4 — Os 3 Ingredientes Obrigatórios de Toda Variável

Toda variável no Java tem exatamente **3 partes**. Se faltar uma, o Java "briga" com você.

```java
//  TIPO   NOME    =  VALOR;
    int    idade   =  25;
    double preco   =  49.90;
    String nome    =  "Ferick";
    boolean ativo  =  true;
```

1. **O TIPO (A Gaveta)**: Diz ao computador **o que** vai ser guardado.
2. **O NOME (A Etiqueta)**: O apelido da caixa. Use `camelCase`: `idadeDoCachorro`.
3. **O VALOR (O Conteúdo)**: O que você está guardando. Usamos `=` para dizer "coloca isso lá dentro".

---

# 🔥 MEGA SEÇÃO 2 — TODOS OS TIPOS DE VARIÁVEIS (EXPLICAÇÃO COMPLETA E PROFUNDA)

Agora vem a parte mais importante. Vou explicar **cada tipo** como se você nunca tivesse visto programação na vida.

---

## 2.1 — `int` (Número Inteiro) — ⭐ O REI dos Tipos

### O que é?
`int` é o tipo que guarda **números inteiros** — ou seja, números **sem vírgula, sem ponto, sem frescura**. Pode ser positivo, negativo ou zero.

### Para que serve?
Para guardar qualquer coisa que se conta em números inteiros na vida real:
- Idade de uma pessoa: `int idade = 25;`
- Quantidade de produtos: `int estoque = 150;`
- Nível de um personagem: `int nivel = 42;`
- Pontuação de um jogo: `int pontos = 9800;`
- Ano de nascimento: `int anoNascimento = 1999;`

### Por que usar `int` e não outro tipo numérico?
Porque `int` é o **tipo padrão** do Java para números inteiros. Quando o Java vê um número como `42` no código, ele automaticamente pensa: "isso é um int". É o mais equilibrado em termos de tamanho (4 bytes na RAM) e capacidade (até ~2 bilhões).

### Capacidade do `int`:
- **Mínimo:** -2.147.483.648 (menos dois bilhões)
- **Máximo:** 2.147.483.647 (dois bilhões)

Isso é mais que suficiente para 99% dos programas do mundo real.

### Exemplo prático COMPLETO com explicação linha por linha:

```java
public class ExemploInt {
    public static void main(String[] args) {

        // Criando variáveis do tipo int
        int idadeDoFerick = 22;        // Guarda a idade (número inteiro, sem vírgula)
        int anoAtual = 2026;           // Guarda o ano (número inteiro)
        int saldoDeVidas = 3;          // Vidas restantes em um jogo

        // Fazendo CONTAS com int (isso é o poder das variáveis!)
        int anoNascimento = anoAtual - idadeDoFerick;
        // O Java pega o valor de 'anoAtual' (2026), subtrai 'idadeDoFerick' (22) = 2004
        // E GUARDA o resultado 2004 dentro da nova variável 'anoNascimento'

        System.out.println("Ferick nasceu em: " + anoNascimento); // Imprime: 2004

        // Alterando o valor da variável (a gaveta é REUTILIZÁVEL!)
        saldoDeVidas = saldoDeVidas - 1;  // Perdeu uma vida! Agora é 2
        System.out.println("Vidas restantes: " + saldoDeVidas); // Imprime: 2
    }
}
```

### ⚠️ O que o `int` NÃO faz:
```java
int preco = 19.99;  // ❌ ERRO! O int não aceita vírgula/ponto decimal!
int preco = 19;     // ✅ CORRETO! Sem vírgula.
```

### 🎯 Erros comuns com `int`:
1. **Tentar guardar decimal:** `int x = 3.14;` → ERRO
2. **Ultrapassar o limite:** Se passar de 2 bilhões, o número "dá a volta" e fica negativo (overflow)
3. **Divisão inteira:** `int resultado = 10 / 3;` → Resultado é `3`, NÃO `3.33`! O Java joga o resto fora.

---

## 2.2 — `double` (Número Decimal) — 💰 O Tipo do Dinheiro

### O que é?
`double` é o tipo que guarda **números com casas decimais** (com ponto). No Java, usamos **ponto** e não vírgula para decimais: `19.99` e não `19,99`.

### Para que serve?
Para guardar qualquer coisa que precisa de precisão decimal:
- Preço de um produto: `double preco = 49.90;`
- Nota de um aluno: `double nota = 8.75;`
- Temperatura: `double temperatura = 36.5;`
- Peso de uma pessoa: `double peso = 72.3;`
- Porcentagem de desconto: `double desconto = 0.15;` (15%)

### Por que `double` e não `float`?
O `float` existe, mas o `double` tem o **dobro** da precisão (por isso o nome "double" = duplo). No mercado de trabalho, **sempre use `double`** para dinheiro e cálculos. O `float` é impreciso demais.

### Capacidade do `double`:
- Pode guardar números com até **15-17 dígitos** de precisão
- Vai de números extremamente pequenos a extremamente grandes

### Exemplo prático COMPLETO:

```java
public class ExemploDouble {
    public static void main(String[] args) {

        // Situação real: Calculando o total de uma compra
        double precoProduto = 49.90;
        int quantidade = 3;
        double desconto = 0.10;  // 10% de desconto (0.10 = 10%)

        // Calculando o total
        double totalBruto = precoProduto * quantidade;
        // 49.90 * 3 = 149.70

        double valorDoDesconto = totalBruto * desconto;
        // 149.70 * 0.10 = 14.97

        double totalFinal = totalBruto - valorDoDesconto;
        // 149.70 - 14.97 = 134.73

        System.out.println("Total bruto: R$ " + totalBruto);
        System.out.println("Desconto (10%): -R$ " + valorDoDesconto);
        System.out.println("Total a pagar: R$ " + totalFinal);
    }
}
```

### 🎯 Erros comuns com `double`:
1. **Usar vírgula em vez de ponto:** `double x = 3,14;` → ❌ ERRO! Use `3.14`
2. **Esperar resultado exato:** `0.1 + 0.2` pode dar `0.30000000000000004` (isso é normal em computadores!)
3. **Esquecer que int / int = int**: `double x = 10 / 3;` → resulta em `3.0` e não `3.33`! Correto: `double x = 10.0 / 3;`

---

## 2.3 — `boolean` (Verdadeiro ou Falso) — 🔘 O Interruptor

### O que é?
`boolean` é o tipo mais simples que existe. Ele só guarda **DOIS valores possíveis**: `true` (verdadeiro) ou `false` (falso). Nada mais. Não existe "talvez".

### Para que serve?
Para representar qualquer situação que é **sim ou não, ligado ou desligado, verdadeiro ou falso**:
- O usuário está logado? `boolean estaLogado = true;`
- A conta está bloqueada? `boolean contaBloqueada = false;`
- O jogador está vivo? `boolean estaVivo = true;`
- O aluno foi aprovado? `boolean aprovado = false;`

### Por que o `boolean` existe? Qual a lógica?
Porque TODA decisão no programa precisa de um true/false. Quando você escreve `if (idade >= 18)`, o Java avalia `idade >= 18` e transforma isso em um `boolean`: se a idade for 20, vira `true`. Se for 15, vira `false`. **O `boolean` é o motor que faz o `if/else` funcionar.**

### Exemplo prático COMPLETO:

```java
public class ExemploBoolean {
    public static void main(String[] args) {

        // Situação real: Sistema de login
        String senhaCorreta = "java123";
        String senhaTentativa = "java123";
        boolean senhaConfere = senhaTentativa.equals(senhaCorreta); // true

        boolean contaBloqueada = false;
        boolean estaLogado = false;

        // A lógica do sistema:
        if (senhaConfere && !contaBloqueada) {
            // Se a senha confere E a conta NÃO está bloqueada...
            estaLogado = true;
            System.out.println("Login realizado com sucesso!");
        } else {
            System.out.println("Acesso negado.");
        }

        System.out.println("Usuário está logado? " + estaLogado); // true
    }
}
```

### 🎯 Erros comuns com `boolean`:
1. **Escrever True ou TRUE:** Tem que ser minúsculo: `true` e `false`
2. **Usar 0 e 1:** No Java, `boolean x = 1;` dá ❌ ERRO! Não é como outras linguagens. É `true` ou `false`, ponto.
3. **Comparar de forma redundante:** `if (estaLogado == true)` funciona, mas é feio. Escreva simplesmente `if (estaLogado)`.

---

## 2.4 — `String` (Texto) — 📝 O Tipo do Texto

### O que é?
`String` guarda **texto** — qualquer sequência de letras, números, símbolos, espaços, emojis, o que você quiser, desde que esteja entre **aspas duplas** `""`.

### ATENÇÃO MÁXIMA: String NÃO é um tipo primitivo!
Notou que `String` começa com letra **MAIÚSCULA**? Isso é porque String é uma **Classe** (um objeto), não um tipo primitivo como `int`, `double` e `boolean`. Por isso ela tem superpoderes (métodos) que os primitivos não têm.

### Para que serve?
- Nome de um usuário: `String nome = "Ferick";`
- Email: `String email = "ferick@gmail.com";`
- Mensagem de erro: `String erro = "Senha incorreta!";`
- Endereço: `String endereco = "Rua Java, 404";`
- CPF (sim, como texto!): `String cpf = "123.456.789-00";`

### Por que CPF e CEP são `String` e não `int`?
Porque **você nunca vai fazer conta com um CPF**. Você não vai somar dois CEPs. E o `int` não aceita pontos e traços. CPF `"012.345.678-90"` começa com zero — se fosse `int`, o zero da frente sumiria!

### A Diferença entre `10` e `"10"` (ISSO É MUITO IMPORTANTE!)

```java
int numero = 10;        // Isso é um NÚMERO. O Java sabe fazer contas com ele.
String texto = "10";    // Isso é um TEXTO. O Java trata como se fosse uma palavra.

// Prova:
System.out.println(numero + numero);  // 20 (somou os números)
System.out.println(texto + texto);    // "1010" (COLOU os textos lado a lado!)
```

O `+` com números **soma**. O `+` com Strings **cola** (concatena). São coisas completamente diferentes!

### Exemplo prático COMPLETO:

```java
public class ExemploString {
    public static void main(String[] args) {

        String primeiroNome = "Ferick";
        String sobrenome = "Silva";
        int idade = 22;

        // Concatenação: Colando textos com o +
        String nomeCompleto = primeiroNome + " " + sobrenome;
        // "Ferick" + " " + "Silva" = "Ferick Silva"

        System.out.println("Nome: " + nomeCompleto);
        System.out.println("Idade: " + idade + " anos");

        // Superpoderes da String (métodos):
        System.out.println("Tudo maiúsculo: " + nomeCompleto.toUpperCase());
        // Imprime: "FERICK SILVA"

        System.out.println("Tudo minúsculo: " + nomeCompleto.toLowerCase());
        // Imprime: "ferick silva"

        System.out.println("Quantas letras tem? " + nomeCompleto.length());
        // Imprime: 12 (conta espaços também!)

        // Comparando Strings: USE .equals(), NUNCA use ==
        String senha1 = "java123";
        String senha2 = "java123";
        System.out.println("Senhas iguais? " + senha1.equals(senha2)); // true
    }
}
```

### 🎯 Erros comuns com `String`:
1. **Escrever `string` minúsculo:** É `String` com S maiúsculo! `string nome = "X";` → ❌ ERRO
2. **Usar aspas simples:** `String nome = 'Ferick';` → ❌ ERRO! String usa aspas DUPLAS `""`
3. **Comparar com `==`:** `if (nome == "Ferick")` → ERRADO! Use `if (nome.equals("Ferick"))`

---

## 2.5 — Os Outros Tipos Primitivos (byte, short, long, float, char)

### `byte` — O Menor de Todos
```java
byte idadeBebe = 2;  // Vai de -128 a 127. Usa pouquíssima memória.
```
**Quando usar:** Quase nunca no dia a dia. Útil apenas quando memória é crítica (milhões de dados).

### `short` — O Médio
```java
short diasNoAno = 365;  // Vai de -32.768 a 32.767.
```
**Quando usar:** Raramente. O `int` é preferido em quase todas as situações.

### `long` — O Gigante  
```java
long populacaoMundial = 8000000000L;  // PRECISA do L no final!
```
**Quando usar:** Quando o número passa de 2 bilhões (população mundial, IDs de banco de dados enormes).
**⚠️ Não esqueça o `L`** no final do número! Sem ele, o Java acha que é `int` e dá erro.

### `float` — Decimal Menos Preciso
```java
float temperatura = 36.5f;  // PRECISA do f no final!
```
**Quando usar:** Quase nunca. Use `double`. O `float` perde precisão.

### `char` — Uma Única Letra
```java
char letra = 'A';       // Usa aspas SIMPLES! Uma letra só!
char simbolo = '@';     // Pode ser símbolo
char numero = '7';      // Isso é o CARACTERE 7, não o número 7!
```
**Quando usar:** Quando precisa de exatamente UM caractere. É raro — normalmente usamos `String`.

---

## 2.6 — Tabela Resumão: Quando Usar Cada Tipo

| Tipo      | Guarda                  | Exemplo                        | Quando Usar                         |
|-----------|-------------------------|--------------------------------|-------------------------------------|
| `int`     | Número inteiro          | `int x = 42;`                 | Contar coisas, idades, quantidades  |
| `double`  | Número com decimal      | `double x = 3.14;`            | Preços, notas, pesos, temperaturas  |
| `boolean` | Verdadeiro ou Falso     | `boolean x = true;`           | Sim/Não, Ligado/Desligado           |
| `String`  | Texto                   | `String x = "Oi";`            | Nomes, endereços, mensagens         |
| `long`    | Inteiro gigante         | `long x = 99999999999L;`      | Números acima de 2 bilhões          |
| `float`   | Decimal menos preciso   | `float x = 1.5f;`             | Raramente — prefira `double`        |
| `byte`    | Inteiro mínimo          | `byte x = 100;`               | Raramente — prefira `int`           |
| `short`   | Inteiro pequeno         | `short x = 30000;`            | Raramente — prefira `int`           |
| `char`    | Uma letra só            | `char x = 'A';`               | Raramente — prefira `String`        |

---

# ⚡ MEGA SEÇÃO 3 — OPERADORES (O QUE FAZ OS NÚMEROS FUNCIONAREM)

## 3.1 — Operadores Aritméticos (A Matemática do Java)

### O que são?
Operadores aritméticos são os **símbolos** que fazem o Java calcular coisas. São quase iguais à matemática da escola, mas com algumas diferenças.

### Para que servem?
Sem operadores, as variáveis seriam inúteis. Imagina um app de calculadora que não sabe somar? Os operadores são o que dá AÇÃO às variáveis.

| Operador | Nome          | Exemplo       | Resultado | O que faz                              |
|----------|---------------|---------------|-----------|----------------------------------------|
| `+`      | Adição        | `10 + 3`      | `13`      | Soma dois números                      |
| `-`      | Subtração     | `10 - 3`      | `7`       | Subtrai o segundo do primeiro          |
| `*`      | Multiplicação | `10 * 3`      | `30`      | Multiplica (NÃO use X, use asterisco!) |
| `/`      | Divisão       | `10 / 3`      | `3`       | Divide (⚠️ inteiro / inteiro = inteiro!) |
| `%`      | Módulo (Resto)| `10 % 3`      | `1`       | Dá o RESTO da divisão                  |

### Exemplo COMPLETO que mostra TODOS:

```java
public class OperadoresAritmeticos {
    public static void main(String[] args) {

        int a = 10;
        int b = 3;

        System.out.println("Soma:           " + (a + b));  // 13
        System.out.println("Subtração:      " + (a - b));  // 7
        System.out.println("Multiplicação:  " + (a * b));  // 30
        System.out.println("Divisão:        " + (a / b));  // 3 (NÃO é 3.33!)
        System.out.println("Resto (Módulo): " + (a % b));  // 1

        // 💡 DICA: Para a divisão dar decimal, use double:
        double resultado = (double) a / b;
        System.out.println("Divisão real:   " + resultado); // 3.3333...

        // 💡 DICA: O módulo serve para saber se um número é par ou ímpar:
        int numero = 7;
        System.out.println(numero + " é par? " + (numero % 2 == 0)); // false
    }
}
```

### Atalhos que Todo Programador Usa:
```java
int contador = 10;
contador = contador + 1;  // Jeito longo (funciona, mas ninguém faz assim)
contador += 1;            // Jeito médio (atalho de atribuição)
contador++;               // Jeito profissional (incremento: soma +1)
contador--;               // Decremento: tira -1

int saldo = 100;
saldo += 50;   // saldo agora é 150 (mesmo que: saldo = saldo + 50)
saldo -= 30;   // saldo agora é 120
saldo *= 2;    // saldo agora é 240
```

---

## 3.2 — Operadores Relacionais (As Comparações)

### O que são?
São operadores que **comparam** dois valores e retornam `true` ou `false`. São o ingrediente principal do `if/else`.

### Para que servem?
Para perguntar ao computador coisas como: "Esse número é maior que aquele?" ou "Esses dois valores são iguais?"

| Operador | Significado      | Exemplo     | Resultado |
|----------|------------------|-------------|-----------|
| `==`     | Igual a          | `5 == 5`    | `true`    |
| `!=`     | Diferente de     | `5 != 3`    | `true`    |
| `>`      | Maior que        | `5 > 3`     | `true`    |
| `<`      | Menor que        | `5 < 3`     | `false`   |
| `>=`     | Maior ou igual   | `5 >= 5`    | `true`    |
| `<=`     | Menor ou igual   | `3 <= 5`    | `true`    |

### ⚠️ CUIDADO GIGANTE: `=` vs `==`
- **`=`** (um igual) → **ATRIBUIÇÃO**: "Coloca esse valor dentro da variável"
- **`==`** (dois iguais) → **COMPARAÇÃO**: "Esses dois valores são iguais?"

```java
int x = 10;         // Atribuição: coloca 10 dentro de x
boolean teste = (x == 10);  // Comparação: x é igual a 10? Sim! true
```

---

## 3.3 — Operadores Lógicos (AND, OR, NOT)

### O que são?
São operadores que **combinam** várias condições `boolean` em uma só.

### Para que servem?
Na vida real, as decisões são complexas. "Para entrar no show eu preciso ter **18 anos E ter ingresso**." Você precisa de dois `boolean` verdadeiros ao mesmo tempo.

| Operador | Nome  | Significado                                    | Exemplo                 |
|----------|-------|------------------------------------------------|-------------------------|
| `&&`     | AND   | **TODAS** as condições devem ser true           | `true && true` → `true` |
| `\|\|`  | OR    | **PELO MENOS UMA** condição deve ser true       | `false \|\| true` → `true` |
| `!`      | NOT   | **INVERTE**: true vira false, false vira true   | `!true` → `false`       |

### Exemplo COMPLETO:

```java
public class OperadoresLogicos {
    public static void main(String[] args) {

        int idade = 20;
        boolean temIngresso = true;
        boolean contaBloqueada = false;

        // AND (&&): As DUAS precisam ser verdadeiras
        boolean entraNoShow = (idade >= 18) && temIngresso;
        System.out.println("Entra no show? " + entraNoShow); // true

        // OR (||): Basta UMA ser verdadeira
        boolean temDesconto = (idade < 12) || (idade > 60);
        System.out.println("Tem desconto? " + temDesconto); // false (nem criança, nem idoso)

        // NOT (!): Inverte o resultado
        boolean podeLogar = !contaBloqueada;
        System.out.println("Pode logar? " + podeLogar); // true (conta NÃO está bloqueada)
    }
}
```

---

# 🏗️ MEGA SEÇÃO 4 — ESTRUTURAS DE CONTROLE (O CÉREBRO DO PROGRAMA)

## 4.1 — `if` / `else` (Se / Senão) — 🧠 A Tomada de Decisão

### O que é?
`if` é a estrutura que permite ao programa **tomar decisões**. Em português: "**SE** tal coisa for verdadeira, **FAÇA** isso. **SENÃO**, faça aquilo."

### Para que serve?
Sem `if/else`, o programa seria um trem sem freio — faria sempre a mesma coisa. Com ele, o programa ganha **inteligência**.

### Sintaxe (Como escrever):
```java
if (condicao) {
    // Se a condição for TRUE, esse bloco roda
} else {
    // Se a condição for FALSE, esse bloco roda
}
```

### Exemplo COMPLETO:
```java
public class ExemploIfElse {
    public static void main(String[] args) {

        double notaDoAluno = 6.5;

        if (notaDoAluno >= 7.0) {
            System.out.println("APROVADO! Parabéns!");
        } else {
            System.out.println("REPROVADO. Estude mais!");
        }
        // Como 6.5 < 7.0, a condição é FALSE, então imprime: "REPROVADO. Estude mais!"
    }
}
```

### `else if` (E se...?):
Quando existem MAIS de dois caminhos:
```java
public class FaixaEtaria {
    public static void main(String[] args) {

        int idade = 25;

        if (idade < 12) {
            System.out.println("Criança");
        } else if (idade < 18) {
            System.out.println("Adolescente");
        } else if (idade < 60) {
            System.out.println("Adulto");         // ✅ Esse será impresso!
        } else {
            System.out.println("Idoso");
        }
    }
}
```

---

## 4.2 — `switch` — 🔀 O Seletor de Opções

### O que é?
O `switch` é uma alternativa ao `if/else if/else if` quando você está comparando **UMA variável contra vários valores fixos**. É como um cardápio numerado.

### Para que serve?
Em vez de escrever 10 `else if`, você usa o `switch` que é mais limpo e organizado.

### Exemplo COMPLETO:
```java
public class ExemploSwitch {
    public static void main(String[] args) {

        int diaDaSemana = 3;

        switch (diaDaSemana) {
            case 1:
                System.out.println("Domingo");
                break;   // OBRIGATÓRIO! Sem break ele continua caindo nos próximos cases!
            case 2:
                System.out.println("Segunda-feira");
                break;
            case 3:
                System.out.println("Terça-feira");  // ✅ Esse vai ser impresso!
                break;
            case 4:
                System.out.println("Quarta-feira");
                break;
            default:
                System.out.println("Dia inválido");
                break;
        }
    }
}
```

### ⚠️ NUNCA esqueça do `break;`! Sem ele, o Java executa TODOS os cases abaixo do que bateu.

---

## 4.3 — `for` (Loop) — 🔁 O Repetidor Controlado

### O que é?
`for` é uma estrutura de **repetição** (loop). Ele executa um bloco de código **várias vezes**, e VOCÊ controla quantas vezes.

### Para que serve?
Imagina que você precisa imprimir "Olá" 100 vezes. Você vai escrever 100 linhas de `println`? Não! Usa o `for`.

### Anatomia do `for`:
```java
for (int i = 0; i < 5; i++) {
//   ^^^^^^^^^^  ^^^^^  ^^^
//   INÍCIO      CONDIÇÃO  INCREMENTO
//   "começa     "enquanto  "depois de
//    em 0"       i < 5,     cada volta,
//               continue"  soma +1"
}
```

### Exemplo COMPLETO:
```java
public class ExemploFor {
    public static void main(String[] args) {

        // Imprimindo de 1 a 5
        for (int i = 1; i <= 5; i++) {
            System.out.println("Volta número: " + i);
        }
        // Imprime:
        // Volta número: 1
        // Volta número: 2
        // Volta número: 3
        // Volta número: 4
        // Volta número: 5

        // Exemplo real: Tabuada do 7
        System.out.println("\n--- Tabuada do 7 ---");
        for (int i = 1; i <= 10; i++) {
            int resultado = 7 * i;
            System.out.println("7 x " + i + " = " + resultado);
        }
    }
}
```

---

## 4.4 — `while` (Loop) — 🔄 O Repetidor Condicional

### O que é?
`while` é outra estrutura de repetição. A diferença do `for` é que o `while` repete **enquanto uma condição for verdadeira**, sem saber necessariamente quantas vezes.

### Para que serve?
Quando você **não sabe quantas vezes** vai repetir. Exemplo: "Continue pedindo a senha **enquanto** o usuário errar."

### Exemplo COMPLETO:
```java
public class ExemploWhile {
    public static void main(String[] args) {

        int tentativas = 0;
        String senhaCorreta = "java123";
        String tentativa = "";

        // Simula tentativas de senha (máximo 3)
        while (tentativas < 3) {
            tentativa = "senhaErrada"; // Na prática viria do Scanner
            tentativas++;
            System.out.println("Tentativa " + tentativas + ": senha incorreta!");
        }
        System.out.println("Conta bloqueada após " + tentativas + " tentativas.");

        // Contando de trás pra frente
        System.out.println("\nContagem regressiva:");
        int contagem = 5;
        while (contagem > 0) {
            System.out.println(contagem + "...");
            contagem--;
        }
        System.out.println("Lançar!");
    }
}
```

### ⚠️ Loop INFINITO (o pesadelo do programador):
```java
while (true) {
    // Isso NUNCA para! O programa trava!
    // Sempre garanta que a condição vai virar false em algum momento.
}
```

---

# 🔐 MEGA SEÇÃO 5 — CONSTANTES (`final`): A CAIXA COM CADEADO

Às vezes você quer uma variável que **nunca mude**, como o valor de PI ou a taxa de imposto.

```java
final double IMPOSTO = 15.0;
IMPOSTO = 20.0; // ❌ ERRO! O Java não deixa você mudar o que é final.
```

**Convenção:** Constantes são escritas em LETRAS_MAIÚSCULAS_COM_UNDERLINE.

---

# 🎮 MEGA SEÇÃO 6 — PROJETO PRÁTICO: SISTEMA COMPLETO

Aqui está um programa que usa **TUDO** o que aprendemos neste capítulo:

```java
public class SistemaCompleto {
    public static void main(String[] args) {

        // ===== VARIÁVEIS (Seção 1 e 2) =====
        String nomeJogador = "Ferick";       // String: guarda texto
        int nivel = 1;                       // int: nível do jogador
        double vida = 100.0;                 // double: vida com decimal
        boolean estaVivo = true;             // boolean: vivo ou morto?
        final int VIDA_MAXIMA = 100;         // constante: vida máxima nunca muda

        // ===== OPERADORES ARITMÉTICOS (Seção 3.1) =====
        int danoInimigo = 25;
        vida = vida - danoInimigo;           // Subtração: 100.0 - 25 = 75.0
        nivel = nivel + 1;                   // Adição: 1 + 1 = 2
        int xpGanho = danoInimigo * 2;       // Multiplicação: 25 * 2 = 50

        // ===== OPERADORES RELACIONAIS E LÓGICOS (Seção 3.2 e 3.3) =====
        estaVivo = vida > 0;                 // Comparação: 75.0 > 0 é true

        // ===== IF/ELSE (Seção 4.1) =====
        if (estaVivo && nivel >= 2) {
            System.out.println(nomeJogador + " está vivo e no nível " + nivel + "!");
        } else {
            System.out.println("Game Over!");
        }

        // ===== FOR (Seção 4.3) =====
        System.out.println("\n--- Inventário ---");
        String[] itens = {"Espada", "Escudo", "Poção"};
        for (int i = 0; i < itens.length; i++) {
            System.out.println("Item " + (i + 1) + ": " + itens[i]);
        }

        // ===== WHILE (Seção 4.4) =====
        System.out.println("\n--- Batalha ---");
        double vidaInimigo = 50.0;
        int rodada = 1;
        while (vidaInimigo > 0) {
            vidaInimigo -= 15;
            System.out.println("Rodada " + rodada + ": Inimigo com " +
                              Math.max(vidaInimigo, 0) + " de vida");
            rodada++;
        }
        System.out.println("Inimigo derrotado em " + (rodada - 1) + " rodadas!");

        // ===== SWITCH (Seção 4.2) =====
        System.out.println("\n--- Classe do Personagem ---");
        int classeEscolhida = 2;
        switch (classeEscolhida) {
            case 1: System.out.println("Guerreiro"); break;
            case 2: System.out.println("Mago"); break;       // ✅ Esse imprime
            case 3: System.out.println("Arqueiro"); break;
            default: System.out.println("Classe inválida");
        }

        // ===== RESULTADO FINAL =====
        System.out.println("\n===== STATUS FINAL =====");
        System.out.println("Jogador: " + nomeJogador);
        System.out.println("Nível: " + nivel);
        System.out.println("Vida: " + vida + "/" + VIDA_MAXIMA);
        System.out.println("Vivo? " + estaVivo);
        System.out.println("XP ganho: " + xpGanho);
    }
}
```

---

# 🆘 MEGA SEÇÃO 7 — GUIA DE ERROS COMUNS

| Erro que você fez                           | O que o Java mostra           | Como corrigir                          |
|---------------------------------------------|-------------------------------|----------------------------------------|
| Esqueceu o `;`                              | `';' expected`                | Coloque `;` no final da linha          |
| Usou `=` em vez de `==`                     | O código compila mas dá bug   | Use `==` para comparar                 |
| String com aspas simples `'texto'`          | `unclosed character literal`  | Use aspas duplas `"texto"`             |
| `String` com S minúsculo                    | `cannot find symbol`          | É `String`, não `string`               |
| Nome de variável com número no início       | `illegal start of expression` | Use `nome1`, não `1nome`               |
| Usou variável sem declarar                  | `cannot find symbol`          | Declare antes: `int x = 0;`           |
| Loop `while` sem alterar a condição         | Programa trava (loop infinito)| Garanta que a condição mude            |
| Esqueceu `break` no `switch`                | Executa mais de um case       | Coloque `break;` em cada case          |
| `int x = 3.14;`                            | `incompatible types`          | Use `double x = 3.14;`                |
| Comparou Strings com `==`                   | Resultado inconsistente       | Use `.equals()`: `s1.equals(s2)`       |

---

# 🏁 RESUMÃO FINAL PARA O SEU CÉREBRO:

### Tipos:
- 🔢 **Contar coisas?** → `int`
- 💰 **Preços e médias?** → `double`
- ✅ **Sim ou Não?** → `boolean`
- 📝 **Nomes e textos?** → `String` (com S maiúsculo!)
- 🔒 **Não vai mudar?** → `final`

### Operadores:
- ➕ **Fazer contas?** → `+ - * / %`
- 🔍 **Comparar?** → `== != > < >= <=`
- 🧠 **Combinar condições?** → `&& || !`

### Estruturas:
- ❓ **Tomar decisão?** → `if / else`
- 📋 **Escolher entre opções?** → `switch`
- 🔁 **Repetir X vezes?** → `for`
- 🔄 **Repetir enquanto...?** → `while`

> **Recado do Ferick:** Não tente decorar tudo hoje. O Java é como andar de bicicleta: no começo a gente cai nas variáveis, mas daqui a pouco você vai estar fazendo manobras radicais nos Microserviços! ☕🚀💎🏆

## Minhas Anotações
- 