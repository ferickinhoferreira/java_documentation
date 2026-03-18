# Atributos e Métodos

## O estado e comportamento das Classes

No capítulo anterior, mencionamos Atributos e Métodos superficialmente. Vamos nos aprofundar um pouco mais nestes dois conceitos vitais na criação de Classes.

## 1. Atributos (Estado)

Os **Atributos** (também chamados de variáveis de instância, campos, propriedades) representam o **Estado** do objeto. São eles que guardam a informação.
Eles são variáveis declaradas diretamente dentro do escopo da classe, fora de qualquer método.

### Valores Padrão (Default Values)
Se você não atribuir um valor inicial a um atributo logo de cara, o Java coloca um valor padrão dependendo do tipo da variável:
- `int`, `byte`, `short`, `long`: `0`
- `float`, `double`: `0.0`
- `boolean`: `false`
- `char`: `\u0000` (espaço em branco)
- Tipos de Referência (`String`, classes, arrays): `null`

### Exemplo
```java
public class ContaBancaria {
    // Atributos
    String titular;      // valor padrão será null
    int numeroConta;     // valor padrão será 0
    double saldo;        // valor padrão será 0.0
    boolean ativa;       // valor padrão será false
}
```

## 2. Métodos (Comportamento)

Os **Métodos** representam as **Ações**, os **Comportamentos** de um objeto. Um método pode alterar o estado (modificar atributos) do objeto ou apenas realizar um cálculo ou operação específica.

Já vimos um pouco sobre a anatomia de uma função (método) nos primeiros capítulos (tipo de retorno, parâmetros). Quando um método pertence a uma classe, ele tem acesso direto aos atributos daquela mesma classe.

### Exemplo de Métodos em Ação

```java
public class ContaBancaria {
    String titular;
    double saldo;

    // Método que não retorna nada (void) e recebe um parâmetro
    public void depositar(double valor) {
        if (valor > 0) {
            saldo = saldo + valor; // Altera o atributo saldo
            System.out.println("Depósito de R$ " + valor + " realizado com sucesso.");
        } else {
            System.out.println("O valor de depósito deve ser positivo.");
        }
    }

    // Método que retorna um valor (boolean) e tenta modificar o estado
    public boolean sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            saldo = saldo - valor;
            System.out.println("Saque de R$ " + valor + " realizado.");
            return true; // Saque deu certo
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
            return false; // Saque falhou
        }
    }

    // Método que apenas retorna uma informação e não altera nada
    public void exibirExtrato() {
        System.out.println("Titular: " + titular);
        System.out.println("Saldo atual: R$ " + saldo);
    }
}
```

## Usando Atributos e Métodos Praticamente

```java
public class Banco {
    public static void main(String[] args) {
        // Objeto 1
        ContaBancaria contaDoFeric = new ContaBancaria();
        contaDoFeric.titular = "Feric"; // Modificando atributo

        // O saldo inicial é 0.0 (valor padrão)
        contaDoFeric.exibirExtrato();

        contaDoFeric.depositar(150.0);
        contaDoFeric.sacar(50.0);

        // O saldo agora é 100.0
        contaDoFeric.exibirExtrato();

        // Fazendo um saque inválido
        contaDoFeric.sacar(500.0); // Vai imprimir "Saldo insuficiente"
    }
}
```

## Por que os Métodos são úteis?
Repare no método `depositar`. Nós poderíamos simplesmente fazer `contaDoFeric.saldo += 150.0` lá no método main. Mas criar o método `depositar` tem uma grande vantagem:
**Regras de negócio e Proteção.**
Dentro do método, validamos se o `valor` não é negativo (`valor > 0`). Se eu permito acesso direto à variável, qualquer um no código poderia fazer o saldo ficar negativo sem querer (ex: `conta.saldo = -100`).

Isso nos leva ao próximo grande tema da POO que aprenderemos mais à frente: **Encapsulamento**. Antes disso, contudo, precisaremos aprender a construir objetos perfeitamente a partir do marco zero com **Construtores**.
