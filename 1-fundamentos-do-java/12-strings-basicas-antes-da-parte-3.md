# Capítulo 12: Strings Básicas (Antes da Parte 3)

> **Neste capítulo:** A String é o tipo de dado que você mais vai usar na vida como programador. Antes de avançar para a Parte 3, vamos dominar os fundamentos de texto no Java.

---

## 📝 1. String NÃO É Um Tipo Primitivo!

Lembra que `int`, `double` e `boolean` são tipos **primitivos** (caixas simples)? A `String` é diferente — ela é uma **Classe** (um objeto). Por isso:

- Começa com letra **MAIÚSCULA**: `String` (não `string`)
- Tem **superpoderes** (métodos que os primitivos não têm)
- Usa aspas **duplas** `""` (aspas simples `''` são para `char`, que é UMA letra só)

```java
String nome = "Ferick";       // ✅ String com S maiúsculo, aspas duplas
String vazia = "";            // ✅ String vazia (existe, não é null)
// string nome = "Ferick";    // ❌ ERRO! s minúsculo não existe
// String nome = 'Ferick';    // ❌ ERRO! Aspas simples é pra char
```

---

## 🔗 2. Concatenação — Colando Textos

O operador `+` com Strings não soma — ele **cola** (concatena):

```java
String nome = "Ferick";
String sobrenome = "Silva";

// Concatenação: colando textos
String completo = nome + " " + sobrenome;
System.out.println(completo);  // "Ferick Silva"

// Misturando texto com número
int idade = 22;
System.out.println("Idade: " + idade + " anos");  // "Idade: 22 anos"
```

### Jeito Moderno (Java 15+): Text Blocks e `String.format()`

```java
// String.format() — Formatação profissional
String mensagem = String.format("Olá, %s! Você tem %d anos.", nome, idade);
System.out.println(mensagem);  // "Olá, Ferick! Você tem 22 anos."

// Marcadores:
// %s → String (texto)
// %d → int (número inteiro)
// %f → double (número decimal)
// %.2f → double com 2 casas decimais
```

```java
double preco = 49.90;
String formatado = String.format("Preço: R$ %.2f", preco);
System.out.println(formatado);  // "Preço: R$ 49.90"
```

---

## 🛠️ 3. Os Superpoderes da String (Métodos Mais Usados)

Como a String é um objeto, ela vem com métodos prontos. Esses são os que você vai usar TODOS os dias:

```java
String nome = "Ferick Silva";
```

| Método | O que faz | Exemplo | Resultado |
|---|---|---|---|
| `.length()` | Conta os caracteres (incluindo espaços) | `nome.length()` | `12` |
| `.toUpperCase()` | Converte tudo para MAIÚSCULAS | `nome.toUpperCase()` | `"FERICK SILVA"` |
| `.toLowerCase()` | Converte tudo para minúsculas | `nome.toLowerCase()` | `"ferick silva"` |
| `.trim()` | Remove espaços do início e do fim | `"  oi  ".trim()` | `"oi"` |
| `.contains("X")` | Verifica se contém "X" | `nome.contains("Silva")` | `true` |
| `.startsWith("X")` | Começa com "X"? | `nome.startsWith("Fe")` | `true` |
| `.endsWith("X")` | Termina com "X"? | `nome.endsWith("va")` | `true` |
| `.replace("A","B")` | Troca "A" por "B" | `nome.replace("F","X")` | `"Xerick Silva"` |
| `.charAt(n)` | Pega o caractere na posição n | `nome.charAt(0)` | `'F'` |
| `.substring(i,f)` | Recorta do índice i até f | `nome.substring(0,6)` | `"Ferick"` |
| `.isEmpty()` | Está vazia? (`""`) | `"".isEmpty()` | `true` |
| `.equals("X")` | É igual a "X"? | `nome.equals("Ferick Silva")` | `true` |

> ⚠️ **Atenção:** Os índices começam em **0**, não em 1! O primeiro caractere está na posição 0.

```java
String texto = "JAVA";
//              J A V A
// Posição:     0 1 2 3

System.out.println(texto.charAt(0));  // 'J'
System.out.println(texto.charAt(3));  // 'A'
```

---

## ⚠️ 4. NUNCA Compare Strings Com `==`!

Esta é a regra mais importante das Strings no Java:

```java
String a = "Java";
String b = "Java";

// ❌ ERRADO (pode funcionar por sorte, mas é perigoso):
if (a == b) { ... }

// ✅ CORRETO (sempre funciona):
if (a.equals(b)) { ... }
```

### Por que `==` não funciona direito?
O `==` compara se as duas variáveis apontam para o **mesmo local na memória**, não se o texto é igual. Em certas situações, duas Strings com o mesmo texto podem estar em locais diferentes da memória, e o `==` retorna `false` mesmo o texto sendo idêntico!

O `.equals()` compara o **conteúdo** — que é o que você realmente quer.

```java
// Caso onde == falha:
String x = new String("Java");
String y = new String("Java");
System.out.println(x == y);       // false (locais diferentes na memória!)
System.out.println(x.equals(y));  // true (conteúdo é igual!)
```

### Dica Extra: `.equalsIgnoreCase()`:
Compara ignorando maiúsculas/minúsculas:

```java
String entrada = "java";
if (entrada.equalsIgnoreCase("JAVA")) {
    System.out.println("São iguais!"); // ✅ Funciona!
}
```

---

## 🔄 5. Convertendo Tipos para String e Vice-Versa

### De Número para String:
```java
int idade = 22;
String idadeTexto = String.valueOf(idade);  // "22"
// ou
String idadeTexto2 = Integer.toString(idade);  // "22"
// ou simplesmente
String idadeTexto3 = "" + idade;  // "22" (concatena com string vazia)
```

### De String para Número:
```java
String textoIdade = "22";
int idade = Integer.parseInt(textoIdade);     // 22 (int)

String textoPreco = "49.90";
double preco = Double.parseDouble(textoPreco); // 49.90 (double)
```

> ⚠️ **Cuidado:** Se a String não for um número válido, o Java lança um erro! `Integer.parseInt("abc")` → ERRO!

---

## 🏁 Resumo Rápido

| O que quer fazer? | Código |
|---|---|
| Criar uma String | `String nome = "Ferick";` |
| Colar textos | `nome + " " + sobrenome` |
| Comparar Strings | `nome.equals("Ferick")` |
| Maiúsculas/Minúsculas | `.toUpperCase()` / `.toLowerCase()` |
| Tamanho do texto | `.length()` |
| Contém algo? | `.contains("xyz")` |
| Formatar | `String.format("Olá, %s!", nome)` |
| Número → String | `String.valueOf(42)` |
| String → Número | `Integer.parseInt("42")` |

---

<!-- EXERCISES
{
  "quiz": [
    {
      "question": "Como se compara o CONTEÚDO de duas Strings corretamente no Java?",
      "options": ["if (texto1 == texto2)", "if (texto1.equals(texto2))", "if (texto1 === texto2)", "if (texto1.compare(texto2))"],
      "answer": 1,
      "explanation": "O == compara o local na memória. Para comparar o TEXTO real, SEMPRE use .equals()."
    },
    {
      "question": "Qual método você usaria para saber quantas letras tem em uma String?",
      "options": [".size()", ".count()", ".length()", ".total()"],
      "answer": 2,
      "explanation": "O método length() retorna o número de caracteres da String."
    },
    {
      "question": "O que o método toUpperCase() faz?",
      "options": ["Apaga o texto", "Transforma tudo em letras maiúsculas", "Recorta o texto", "Transforma tudo em números"],
      "answer": 1,
      "explanation": "Ele cria uma nova String com todas as letras em caixa alta (GRITANDO!)."
    }
  ],
  "challenge": "Crie um programa que peça o seu nome completo pelo teclado e imprima apenas as iniciais de cada nome.",
  "project": {
    "title": "Verificador de Senha Robusta",
    "description": "Crie um programa que peça para o usuário criar uma senha. A senha só deve ser aceita se: 1. Tiver pelo menos 8 caracteres. 2. A senha digitada não for igual a '12345678' ou 'admin'. Imprima uma mensagem informando se a senha é forte ou fraca.",
    "hints": ["Use .length() para verificar o tamanho", "Use !senha.equals('admin') para garantir que NÃO é admin", "Use o operador && para combinar as condições"]
  }
}
-->

## Minhas Anotações
- 
