# Capítulo 11: Precedência de Operadores e Casting

> **Neste capítulo:** Dois conceitos que parecem pequenos mas causam MUITOS bugs. Entenda como o Java decide a ordem dos cálculos e como converter tipos à força.

---

## 🧮 PARTE 1 — Precedência de Operadores (A Ordem Importa!)

### O Problema:
Olhe para esta linha e tente adivinhar o resultado:

```java
int resultado = 10 + 5 * 2;
```

Se você pensou **30** (`10 + 5 = 15`, depois `15 * 2 = 30`), **ERRADO!**

O Java NÃO calcula da esquerda para a direita como lemos texto. Ele segue uma **tabela de prioridade** — igual na matemática: multiplicação e divisão vêm ANTES de soma e subtração.

**Resposta correta:** `5 * 2 = 10`, depois `10 + 10 = 20`. **Resultado: 20!**

---

### A Tabela de Precedência (Decore a Ordem!)

| Prioridade | Operador(es) | Nome | Exemplo |
|:---:|---|---|---|
| 1️⃣ (Primeiro) | `( )` | Parênteses | `(10 + 5) * 2` → forçam a ordem |
| 2️⃣ | `++ --` | Incremento/Decremento | `i++`, `--x` |
| 3️⃣ | `* / %` | Multiplicação, Divisão, Módulo | `5 * 2`, `10 / 3`, `7 % 2` |
| 4️⃣ | `+ -` | Soma e Subtração | `10 + 5`, `8 - 3` |
| 5️⃣ | `== != >= <=` `> <` | Relacionais (comparação) | `x > 5`, `a == b` |
| 6️⃣ | `&&` | E lógico (AND) | `x > 0 && x < 100` |
| 7️⃣ | `\|\|` | OU lógico (OR) | `a \|\| b` |
| 8️⃣ (Último) | `= += -= *= /=` | Atribuição | `x = 10`, `x += 5` |

> 💡 **Regra de ouro:** Se tá em dúvida, **USE PARÊNTESES!** Eles SEMPRE têm prioridade máxima e tornam o código mais legível.

---

### Exemplos Que Caem em Prova:

```java
// EXEMPLO 1: Multiplicação antes de soma
int a = 10 + 5 * 2;
System.out.println(a);  // 20 (não 30!)
// Ordem: 5*2=10, depois 10+10=20

// EXEMPLO 2: Parênteses forçam a ordem
int b = (10 + 5) * 2;
System.out.println(b);  // 30 (agora sim!)
// Ordem: (10+5)=15, depois 15*2=30

// EXEMPLO 3: Divisão antes de soma
int c = 20 - 10 / 2;
System.out.println(c);  // 15 (não 5!)
// Ordem: 10/2=5, depois 20-5=15

// EXEMPLO 4: Módulo tem mesma prioridade que * e /
int d = 10 + 7 % 3;
System.out.println(d);  // 11
// Ordem: 7%3=1, depois 10+1=11

// EXEMPLO 5: Combinação completa
int e = 2 + 3 * 4 - 6 / 2;
System.out.println(e);  // 11
// Ordem: 3*4=12, 6/2=3, depois 2+12-3=11
```

---

### 📝 Dica Para Nunca Errar:

Quando o cálculo é complexo, abuse dos parênteses para deixar EXPLÍCITO:

```java
// DIFÍCIL de ler (funciona, mas dá medo):
double resultado = salarioBruto - salarioBruto * imposto / 100 + bonus;

// FÁCIL de ler (mesmo resultado, muito mais claro):
double resultado = salarioBruto - (salarioBruto * imposto / 100) + bonus;
```

**No mercado de trabalho, clareza vale mais que esperteza.** Ninguém te demite por usar parênteses a mais, mas errar um cálculo de imposto pode custar caro!

---

## 🔄 PARTE 2 — Casting (Converter Tipos na Força)

### O Problema:

```java
int numero = 10;
double resultado = numero / 4;
System.out.println(resultado);  // 2.0 (e não 2.5!!!)
```

**Por quê?** Porque `numero` é `int` e `4` é `int`. Quando dois `int` se dividem, o resultado é `int`: `10 / 4 = 2` (corta o decimal). Depois, o `2` é convertido para `double` → `2.0`. Mas o `.5` já morreu!

### A Solução: Casting Explícito

Casting é "forçar" a conversão de um tipo para outro usando `(tipo)`:

```java
int numero = 10;
double resultado = (double) numero / 4;
System.out.println(resultado);  // 2.5 (agora sim!)
```

**O que aconteceu:** O `(double)` transformou temporariamente o `numero` de `int` para `double`. Agora a divisão é `10.0 / 4` → `double / int` → o resultado é `double` → `2.5`!

---

### Tipos de Conversão:

#### 1. Conversão Implícita (Automática — Java faz sozinho)
O Java converte automaticamente de tipos **menores** para **maiores** (porque não perde informação):

```java
int numero = 42;
double decimal = numero;   // int → double automaticamente
System.out.println(decimal);  // 42.0 (OK, não perdeu nada!)
```

Caminho seguro: `byte → short → int → long → float → double`

#### 2. Conversão Explícita (Manual — Você força com casting)
O Java NÃO converte automaticamente de tipos **maiores** para **menores** (porque pode perder informação):

```java
double preco = 49.99;
int precoInteiro = (int) preco;  // Precisa do (int) para forçar!
System.out.println(precoInteiro);  // 49 (perdeu o .99!)
```

> ⚠️ **Cuidado:** Casting de `double` para `int` **CORTA** o decimal, não arredonda!

---

### Exemplo Prático Completo: Sistema de Notas

```java
public class SistemaNotas {
    public static void main(String[] args) {

        int nota1 = 8;
        int nota2 = 7;
        int nota3 = 9;

        // ❌ ERRADO: divisão inteira! (8+7+9=24, 24/3=8, perdeu precisão)
        double mediaErrada = (nota1 + nota2 + nota3) / 3;
        System.out.println("Média errada: " + mediaErrada);  // 8.0

        // ✅ CORRETO: casting! (24 vira 24.0, 24.0/3=8.0)
        double mediaCerta = (double) (nota1 + nota2 + nota3) / 3;
        System.out.println("Média certa: " + mediaCerta);     // 8.0

        // Outro jeito: usar 3.0 em vez de 3
        double mediaOutroJeito = (nota1 + nota2 + nota3) / 3.0;
        System.out.println("Média (3.0): " + mediaOutroJeito); // 8.0
    }
}
```

---

### Tabela de Casting Rápida:

| De | Para | Precisa de casting? | Perde informação? |
|---|---|:---:|:---:|
| `int` → `double` | Maior | ❌ Automático | Não |
| `int` → `long` | Maior | ❌ Automático | Não |
| `double` → `int` | Menor | ✅ `(int)` obrigatório | SIM! Corta decimal |
| `long` → `int` | Menor | ✅ `(int)` obrigatório | Possível |
| `int` → `String` | Classe | Use `String.valueOf(x)` | Não |

---

## 🎯 Dica de Mercado

**Sempre que dividir inteiros e precisar de decimal, faça casting no primeiro número!**

```java
// Regra: coloque (double) antes do PRIMEIRO número da divisão
double resultado = (double) dividendo / divisor;
```

Ou use `.0` em pelo menos um dos números:
```java
double resultado = dividendo / 3.0;  // O 3.0 torna a divisão decimal
```

## Minhas Anotações
- 
