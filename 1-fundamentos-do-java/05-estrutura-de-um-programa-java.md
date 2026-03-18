# Capítulo 5: Estrutura de um Programa Java (Classes, Métodos e Pacotes)

> **Neste capítulo:** Você vai entender a ORGANIZAÇÃO do Java. Por que o código fica dentro de classes? O que são métodos? O que são pacotes? Sem entender a estrutura, o código vira uma bagunça incompreensível.

---

## 📁 1. Pacotes (Packages) — As Pastas Organizadoras

Imagine que você está construindo um sistema gigantesco para um banco. Você terá centenas de arquivos de código. Deixar todos soltos na mesma pasta seria como jogar todas as suas roupas num quarto sem armário — caos total.

No Java, usamos **Packages (Pacotes)** para organizar. Um pacote é literalmente uma **pasta no seu computador** onde você agrupa coisas parecidas.

### Exemplo de Organização:
```
meubanco/
├── clientes/          ← Pacote para tudo relacionado a clientes
│   ├── Cliente.java
│   └── CadastroCliente.java
├── contas/            ← Pacote para tudo sobre contas
│   ├── ContaCorrente.java
│   └── ContaPoupanca.java
└── relatorios/        ← Pacote para relatórios
    └── RelatorioMensal.java
```

### No código, declaramos o pacote na PRIMEIRA linha:

```java
package br.com.meubanco.clientes;  // "Este arquivo mora na pasta clientes"

public class Cliente {
    // Código do cliente
}
```

### A Convenção de Mercado para Nomes de Pacotes:
O padrão mundial é usar o **domínio da internet da empresa ao contrário**, tudo em **minúsculas**:

| Empresa | Site | Pacote |
|---|---|---|
| Meu Banco | meubanco.com.br | `br.com.meubanco` |
| Google | google.com | `com.google` |
| Netflix | netflix.com | `com.netflix` |

> 💡 **Por que ao contrário?** Porque o domínio da internet é único no mundo. Usando-o como nome de pacote, NENHUMA outra empresa vai ter o mesmo nome. Evita conflitos.

---

## 🏗️ 2. Classes — Os Moldes (Plantas Baixas)

O Java é uma linguagem **Orientada a Objetos**. Isso significa que programar em Java é olhar para o mundo real e transformá-lo em código.

A **Classe** é o **"molde"** ou a **"planta baixa"** de alguma coisa.

### Analogia:
Pense numa planta baixa de uma casa:
- A planta diz onde ficam as portas, qual a cor da parede, quantos quartos tem
- Mas a planta **NÃO é a casa** — você não mora nela!
- Você precisa **construir** a casa baseada na planta

No Java:
- A **Classe** define as **características** e os **comportamentos** de algo
- O **Objeto** é a "casa construída" a partir dessa planta (veremos objetos na seção de OOP)

```java
// A CLASSE é o molde (planta baixa)
public class Carro {
    // Características (variáveis)
    String cor;
    String modelo;
    int velocidade;

    // Comportamentos (métodos/ações)
    public void acelerar() {
        velocidade += 10;
        System.out.println("Acelerando! Velocidade: " + velocidade);
    }

    public void frear() {
        velocidade -= 10;
        System.out.println("Freando! Velocidade: " + velocidade);
    }
}
```

### Regra de Nome: **PascalCase**
Nomes de classes começam com letra **MAIÚSCULA** e cada palavra nova também:
- ✅ `ContaCorrente`, `SistemaBancario`, `PrimeiroPrograma`
- ❌ `contaCorrente`, `sistema_bancario`, `PRIMEIRO_PROGRAMA`

---

## ⚡ 3. Métodos — As Ações (Verbos)

Se as variáveis guardam **informações** (nome, saldo, idade), os **Métodos** são as **ações** — o que aquele objeto pode **FAZER**.

### Analogia:
- **Variáveis** = Substantivos (nome, cor, idade)
- **Métodos** = Verbos (acelerar, frear, sacar, depositar)

```java
public class ContaBancaria {

    // VARIÁVEIS (o que a conta TEM)
    String titular = "Ferick";
    double saldo = 1000.00;

    // MÉTODOS (o que a conta PODE FAZER)
    public void depositar(double valor) {
        saldo += valor;
        System.out.println("Depósito de R$ " + valor + " realizado!");
        System.out.println("Saldo atual: R$ " + saldo);
    }

    public void sacar(double valor) {
        if (saldo >= valor) {
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + " realizado!");
        } else {
            System.out.println("Saldo insuficiente!");
        }
    }
}
```

### Regra de Nome: **camelCase**
Nomes de métodos começam com letra **minúscula** e cada palavra nova começa com maiúscula:
- ✅ `ligarMotor()`, `calcularSalario()`, `buscarClientePorId()`
- ❌ `LigarMotor()`, `CALCULAR_SALARIO()`, `buscar_cliente()`

> 💡 **Dica de mercado:** Use nomes que sejam **verbos no infinitivo**: `calcular`, `buscar`, `validar`, `criar`, `deletar`. Quando alguém ler `calcularImposto()`, imediatamente sabe o que o método faz.

---

## 🗺️ 4. Visão Geral — Como Tudo se Encaixa

```java
// 1. PACOTE → Onde o arquivo mora (a pasta)
package br.com.minhaempresa;

// 2. CLASSE → O molde (Padrão: PascalCase)
public class Carro {

    // 3. VARIÁVEIS → O que o objeto TEM (dados)
    String modelo = "Civic";
    int velocidade = 0;

    // 4. MÉTODO → O que o objeto FAZ (ações) (Padrão: camelCase)
    public void ligarMotor() {
        System.out.println("Vrummm! O " + modelo + " ligou!");
    }

    public void acelerar() {
        velocidade += 20;
        System.out.println("Velocidade: " + velocidade + " km/h");
    }

    // 5. MÉTODO MAIN → O ponto de entrada (onde o programa começa)
    public static void main(String[] args) {
        System.out.println("Programa iniciado!");
    }
}
```

### Tabela de Convenções de Nome:

| Elemento | Padrão | Exemplo |
|---|---|---|
| **Pacote** | tudo.minusculo.separado.por.pontos | `br.com.minhaempresa.modelos` |
| **Classe** | PascalCase | `ContaBancaria`, `SistemaPagamento` |
| **Método** | camelCase (verbo) | `calcularTotal()`, `buscarCliente()` |
| **Variável** | camelCase (substantivo) | `saldoConta`, `nomeCliente` |
| **Constante** | TUDO_MAIÚSCULO | `TAXA_IMPOSTO`, `VALOR_MAXIMO` |

---

## ⚠️ Pergunta Frequente: "Preciso Decorar Isso Tudo?"

**Não!** Neste momento, você só precisa entender **por que as coisas estão onde estão**:

1. O código fica **dentro da classe** porque o Java é orientado a objetos
2. A ação fica **dentro do método** porque métodos são as ações
3. O programa começa **no método `main`** porque é a porta de entrada
4. Os pacotes organizam os arquivos **em pastas** para não virar bagunça

Com a prática diária, isso vai se tornar tão natural quanto respirar. 💪

## Minhas Anotações
- 
