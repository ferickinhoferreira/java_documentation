# Capítulo 4: Primeiro Programa: Olá, Mundo!

> **O momento que todo programador lembra para sempre.** Este é o seu primeiro código Java. Vamos dissecar cada palavra para que nada fique sem explicação.

---

## 🌍 O Famoso "Hello World"

Na programação, existe uma **tradição sagrada**: o primeiro programa que você faz em qualquer linguagem deve escrever "Olá, Mundo!" na tela. Essa tradição existe desde 1978 e todo programador do mundo passa por ela. Diz a lenda que quem não faz, não aprende a linguagem! 😆

---

## 📋 A Estrutura Completa (O Código)

```java
public class PrimeiroPrograma {

    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }

}
```

**Resultado na tela:**
```
Olá, Mundo!
```

Parece simples, certo? Mas cada palavra tem um significado específico. Vamos dissecar tudo.

---

## 🔬 Dissecando o Código (Cada Palavra Explicada)

### Linha 1: `public class PrimeiroPrograma {`

```
public    class    PrimeiroPrograma    {
  ↓        ↓            ↓              ↓
PÚBLICO   CLASSE   NOME DA CLASSE   ABRE O BLOCO
```

| Palavra | O que significa | Por que está aí |
|---|---|---|
| `public` | "Público" — visível para todo o sistema | O Java precisa encontrar essa classe para rodar |
| `class` | "Classe" — estamos criando uma classe | No Java, TODO código fica dentro de uma classe |
| `PrimeiroPrograma` | O nome que escolhemos | Deve ser IGUAL ao nome do arquivo `.java` |
| `{` | Abre o bloco da classe | Tudo que pertence à classe fica entre `{ }` |

### ⚠️ Regra de Ouro #1:
O **nome do arquivo salvo no computador** precisa ser **EXATAMENTE** igual ao nome da classe pública:
- Classe: `PrimeiroPrograma`
- Arquivo: `PrimeiroPrograma.java` ✅
- Arquivo: `primeiroprograma.java` ❌ (letra minúscula = ERRO!)

### ⚠️ Regra de Nome:
O nome da classe segue o padrão **PascalCase** — cada palavra começa com maiúscula, sem espaços:
- ✅ `PrimeiroPrograma`, `CalculadoraNotas`, `SistemaBancario`
- ❌ `primeiro_programa`, `calculadora notas`, `SISTEMA_BANCARIO`

---

### Linha 3: `public static void main(String[] args) {`

Esta é a linha mais famosa (e mais decorada) do Java:

```
public  static  void   main   (String[] args)    {
  ↓       ↓      ↓      ↓         ↓              ↓
PÚBLICO ESTÁTICO VAZIO  PRINCIPAL PARÂMETROS    ABRE BLOCO
```

| Palavra | O que significa | Para que serve |
|---|---|---|
| `public` | Público — qualquer um pode acessar | O Java precisa achar esse método |
| `static` | Estático — não precisa criar um objeto | Permite rodar direto sem criar objetos (por enquanto, aceite isso) |
| `void` | "Vazio" — não retorna nenhum resultado | O `main` faz o trabalho e não devolve nada |
| `main` | "Principal" — é o ponto de entrada! | O Java **SEMPRE** procura o `main` para começar |
| `String[] args` | Argumentos de texto | Recebe informações extras do terminal (ignore por agora) |

### 🎯 O Ponto de Entrada (Entry Point)

Quando você clica em "Rodar" no IntelliJ, o Java procura desesperadamente pelo método chamado `main`. **Se não encontrar, o programa não roda.** É como um carro sem chave de ignição — tá tudo montado, mas não liga.

```java
// ❌ SEM main → O Java não sabe por onde começar
public class Teste {
    // Cadê o main? Erro!
}

// ✅ COM main → O Java sabe onde começar
public class Teste {
    public static void main(String[] args) {
        // O Java começa AQUI!
    }
}
```

> 💡 **Dica:** Essa linha é tão decorada que no IntelliJ você pode digitar `psvm` e apertar **Tab** — ele completa automaticamente!

---

### Linha 4: `System.out.println("Olá, Mundo!");`

```
System  .  out  .  println  (  "Olá, Mundo!"  )  ;
  ↓        ↓       ↓           ↓                 ↓
SISTEMA  SAÍDA   IMPRIMA     O TEXTO           FIM DA
                 UMA LINHA                     ORDEM
```

| Parte | Significado |
|---|---|
| `System` | Refere-se ao sistema operacional |
| `.out` | A saída padrão (a tela/console) |
| `.println` | "Print Line" — imprima e pule para a próxima linha |
| `"Olá, Mundo!"` | O texto que será impresso (sempre entre aspas duplas!) |
| `;` | O ponto final da instrução (OBRIGATÓRIO!) |

### ⚠️ Regra de Ouro #2:
Quase toda instrução em Java **termina com `;`** (ponto e vírgula). Se esquecer, o programa não compila!

```java
System.out.println("Oi")   // ❌ ERRO! Cadê o ;?
System.out.println("Oi");  // ✅ Correto!
```

---

## 🗺️ A Visão Geral (Mapa Mental)

```
PrimeiroPrograma.java
│
├── public class PrimeiroPrograma {     ← A CLASSE (o molde/recipiente)
│   │
│   ├── public static void main(...) {  ← O MÉTODO MAIN (a porta de entrada)
│   │   │
│   │   └── System.out.println("...");  ← A INSTRUÇÃO (a ação)
│   │
│   └── }                              ← Fecha o método
│
└── }                                   ← Fecha a classe
```

Tudo fica **aninhado**: a instrução fica **dentro** do método, que fica **dentro** da classe. É como uma boneca russa. 🪆

---

## 🧪 Experimentos Para Você Tentar

Antes de ir pro próximo capítulo, abra o IntelliJ e teste estas variações:

```java
// Teste 1: Seu nome na tela
System.out.println("Eu sou o Ferick e estou aprendendo Java!");

// Teste 2: Múltiplas linhas
System.out.println("Linha 1");
System.out.println("Linha 2");
System.out.println("Linha 3");

// Teste 3: Números (sem aspas!)
System.out.println(42);
System.out.println(10 + 5);  // Imprime 15 (ele faz a conta!)

// Teste 4: O que acontece se tirar o ; ?
// System.out.println("Teste")   // Tire o // e veja o erro!
```

---

## ⚠️ Checklist de Erros Comuns

| Erro | Mensagem do Java | Solução |
|---|---|---|
| Esqueceu `;` | `';' expected` | Adicione `;` no final |
| Nome do arquivo ≠ nome da classe | `class X is public, should be declared in X.java` | Arquivo e classe devem ter o mesmo nome |
| Usou aspas simples `'Oi'` | `unclosed character literal` | Use aspas duplas `"Oi"` |
| `Main` com M maiúsculo | `Main method not found` | É `main` (m minúsculo) |
| Esqueceu as chaves `{ }` | Vários erros confusos | Cada `{` aberta TEM que ter uma `}` fechada |

---

> **Não se assuste com tantos detalhes.** Com o tempo, escrever esse código vai ser tão automático quanto escrever seu nome. No começo, é normal se sentir perdido — todo mundo ficou. A prática transforma confusão em naturalidade. ☕🚀

## Minhas Anotações
- 
