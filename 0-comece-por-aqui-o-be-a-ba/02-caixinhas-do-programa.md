# 📦 Capítulo 2: Variáveis — As Caixinhas do Seu Programa

> **O conceito mais importante da programação.** Se você entender variáveis de verdade, o resto do Java vem naturalmente. Leia este capítulo com calma.

---

## 🧠 O Que É Uma Variável?

Imagine que o seu computador tem um **armário gigante e vazio** com milhões de gavetas. Cada gaveta pode guardar UM tipo de coisa. Mas o computador é tão organizado (e tão sem iniciativa) que ele NÃO vai abrir uma gaveta sozinho. Você precisa dizer **tudo** para ele.

### O Diálogo Com o Computador:

**Você:** "Ei, computador! Preciso guardar uma informação."
**Computador:** "Ok. Me diz 3 coisas:"
1. **Que tipo de coisa é?** (Número? Texto? Verdadeiro/Falso?)
2. **Qual nome você quer dar pra essa gaveta?** (Pra achar ela depois)
3. **O que tem dentro?** (O valor)

**Você:** "É um número inteiro, o nome é `idade`, e o valor é `25`."
**Computador:** "Entendido. Gaveta criada!"

### Em código Java, esse diálogo vira UMA linha:
```java
int idade = 25;
```

### Dissecando Cada Pedaço:

```
int      idade     =     25     ;
 ↓        ↓        ↓      ↓     ↓
TIPO    NOME   "RECEBE"  VALOR  FIM DA ORDEM
```

| Pedaço  | O que é               | Analogia                                |
|---------|----------------------|-----------------------------------------|
| `int`   | O **TIPO** da gaveta  | "Quero uma gaveta para números inteiros" |
| `idade` | O **NOME** da gaveta  | "A etiqueta colada na frente"           |
| `=`     | O comando "coloca"    | "Abre a gaveta e bota isso lá dentro"   |
| `25`    | O **VALOR** guardado  | "O conteúdo dentro da gaveta"           |
| `;`     | O **PONTO FINAL**     | "Fim da ordem. Obrigatório no Java."    |

---

## 🎯 Por Que Variáveis Existem?

Sem variáveis, o programa não teria **memória**. Seria como uma pessoa com amnésia total.

Pensa no app do seu banco. Quando você abre e vê "Saldo: R$ 1.500,00":
- O número `1500.00` está guardado numa variável chamada algo como `saldoDaConta`
- O seu nome "Ferick" está guardado numa variável chamada algo como `nomeDoCliente`
- Se você está logado ou não, está guardado numa variável `boolean` chamada `estaLogado`

**Sem variáveis, o app não lembraria de nada.**

---

## 🧩 As 4 Caixas Mais Importantes (Kit de Sobrevivência)

Existem vários tipos de gavetas, mas você vai usar estas 4 em 90% das situações:

### 🔢 `int` — Números inteiros (sem vírgula)
```java
int idade = 25;          // Idade de uma pessoa
int vidas = 3;           // Vidas num jogo
int anoAtual = 2026;     // O ano
```
**Use para:** contar coisas, anos, quantidades, IDs.

### 💰 `double` — Números com vírgula (decimais)
```java
double preco = 49.90;       // Preço de um produto
double nota = 8.5;           // Nota de um aluno
double temperatura = 36.5;   // Temperatura corporal
```
**Use para:** preços, notas, pesos, medidas, qualquer número "quebrado".
> ⚠️ Em Java, usamos **ponto** e não vírgula: `49.90` e NÃO `49,90`!

### 📝 `String` — Texto (palavras, frases)
```java
String nome = "Ferick";              // Nome de uma pessoa
String mensagem = "Bom dia!";        // Uma mensagem
String cpf = "123.456.789-00";       // CPF (texto, não número!)
```
**Use para:** nomes, endereços, mensagens, qualquer texto.
> ⚠️ String usa aspas **duplas** `""` e começa com S **MAIÚSCULO**!

### ✅ `boolean` — Verdadeiro ou Falso (sim ou não)
```java
boolean estaLogado = true;       // O usuário está logado? SIM
boolean contaBloqueada = false;  // A conta está bloqueada? NÃO
```
**Use para:** qualquer pergunta de sim/não, ligado/desligado, ativo/inativo.

---

## 🔄 O Poder de Mudar o Valor (Variável = Varia!)

O nome "variável" vem de **variar**. O valor pode mudar!

```java
int vidas = 3;                    // Começa com 3 vidas
System.out.println(vidas);       // Mostra: 3

vidas = 2;                        // Levou um golpe! Agora é 2
System.out.println(vidas);       // Mostra: 2

vidas = 1;                        // Outro golpe!
System.out.println(vidas);       // Mostra: 1
```

Perceba: **depois que a gaveta foi criada**, você nunca mais precisa escrever o tipo `int` de novo. Só usa o nome e troca o valor.

---

## 🏋️ Exercício Mental

Imagine que você vai cadastrar uma pessoa num sistema. Quais caixas você usaria?

| Informação        | Tipo      | Exemplo                              |
|-------------------|-----------|--------------------------------------|
| Nome da pessoa    | `String`  | `String nome = "Ana Clara";`         |
| Idade             | `int`     | `int idade = 30;`                    |
| Salário           | `double`  | `double salario = 3500.00;`          |
| É casado?         | `boolean` | `boolean casado = false;`            |
| CPF               | `String`  | `String cpf = "111.222.333-44";`     |

Viu como é lógico? Cada informação da vida real se encaixa perfeitamente num tipo de variável!

---

## ⚠️ Erros Que Todo Iniciante Comete

| Erro | Por que dá problema | Correção |
|------|---------------------|----------|
| `int idade = 25` (sem `;`) | Java exige ponto e vírgula | `int idade = 25;` |
| `int preço = 10;` (acento) | Java não aceita acentos em nomes | `int preco = 10;` |
| `int 1nome = "Ferick";` | Nomes não começam com número | `String nome1 = "Ferick";` |
| `string nome = "Ferick";` | String com S minúsculo | `String nome = "Ferick";` |

---

Viu como é simples? São apenas caixas com etiquetas! 📦🏷️✨

No próximo capítulo, vamos aprender a **"gritar"** o que tem dentro dessas caixas para o mundo ver — mostrando na tela do computador!

> **Dica:** Releia este capítulo sempre que sentir que esqueceu algo. Variáveis são a **fundação** de TUDO na programação. Se aqui estiver sólido, o resto é construção. 🧱

## Minhas Anotações
- 

<!-- EXERCISES
{
  "quiz": [
    {
      "question": "Quais são os 3 ingredientes obrigatórios de uma variável em Java?",
      "options": ["Nome, valor e comentário", "Tipo, nome e valor", "Classe, método e variável", "Import, tipo e nome"],
      "answer": 1,
      "explanation": "Toda variável precisa de: TIPO (int, double, etc.), NOME (etiqueta) e VALOR (conteúdo). Ex: int idade = 25;"
    },
    {
      "question": "Qual tipo você usaria para guardar o PREÇO de um produto?",
      "options": ["int", "String", "double", "boolean"],
      "answer": 2,
      "explanation": "Preços têm centavos (ex: R$ 49.90), então precisam de casas decimais → use double!"
    },
    {
      "question": "O que o sinal = faz no Java?",
      "options": ["Compara dois valores", "Coloca um valor dentro da variável", "Verifica se são iguais", "Soma dois números"],
      "answer": 1,
      "explanation": "Em Java, = significa ATRIBUIÇÃO: 'coloca esse valor dentro da variável'. Para COMPARAR, use == (dois iguais)."
    },
    {
      "question": "O que acontece se você tentar usar o nome '1nome' para uma variável?",
      "options": ["Funciona normalmente", "O Java aceita mas avisa", "Dá ERRO — nomes não podem começar com número", "O Java troca o nome automaticamente"],
      "answer": 2,
      "explanation": "Nomes de variáveis em Java NÃO podem começar com números. Use nome1 ou primeiroNome."
    },
    {
      "question": "Qual tipo usaria para guardar se o usuário está logado ou não?",
      "options": ["int (0 ou 1)", "String (sim ou não)", "boolean (true ou false)", "double"],
      "answer": 2,
      "explanation": "Situações de sim/não, ligado/desligado, ativo/inativo são sempre boolean (true ou false)."
    }
  ],
  "challenge": "Sem olhar o capítulo, escreva no papel (ou mentalmente) a DIFERENÇA entre int, double, String e boolean. Para cada um, invente 3 exemplos de coisas da vida real que você guardaria nesse tipo.",
  "project": {
    "title": "Ficha de Cadastro Pessoal",
    "description": "Abra o IntelliJ e crie um programa Java que declare variáveis para: seu nome (String), sua idade (int), sua altura (double) e se você é estudante (boolean). Depois, use System.out.println para mostrar todas as informações formatadas na tela.",
    "hints": ["Você só precisa de: public class, main, variáveis e println", "Lembre-se: String usa aspas duplas, boolean é true ou false", "Use o + para concatenar texto com variáveis no println"]
  }
}
-->
