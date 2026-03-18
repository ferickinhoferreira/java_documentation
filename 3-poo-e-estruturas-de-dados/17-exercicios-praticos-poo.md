# Exercícios Práticos - POO

Chegou a hora de fixar os conceitos de **Classes, Objetos, Encapsulamento, Herança e Polimorfismo**!
Tente resolver estes exercícios criando os arquivos `.java` na sua IDE (Eclipse, IntelliJ ou VS Code) sem olhar as respostas!

---

## 💡 Exercício 1: Modelando um Banco (Classes, Objetos e Encapsulamento)

**Objetivo:** Criar um sistema bancário simples garantindo a segurança dos dados.

1. Crie uma classe `ContaBancaria` com os atributos **privados**:
   - `String numeroConta`
   - `String titular`
   - `double saldo`
2. Crie um **construtor** que exija o `numeroConta` e o `titular`. O `saldo` deve iniciar em zero.
3. Crie os métodos **Getters** para ler os três atributos. **Não crie um Setter para o saldo!**
4. Crie um método `depositar(double valor)` que aumente o saldo, desde que o valor seja maior que zero.
5. Crie um método `sacar(double valor)` que diminua o saldo, desde que haja dinheiro suficiente. Retorne `true` se deu certo e `false` se falhou.
6. Na classe `Main`, crie uma conta, faça depósitos, saques e imprima o saldo final.

<details>
<summary><b>Mostrar Solução (Tente primeiro!)</b></summary>
<br>

```java
public class ContaBancaria {
    private String numeroConta;
    private String titular;
    private double saldo;

    public ContaBancaria(String numeroConta, String titular) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = 0.0;
    }

    public String getNumeroConta() { return numeroConta; }
    public String getTitular() { return titular; }
    public double getSaldo() { return saldo; }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado.");
        } else {
            System.out.println("Valor inválido.");
        }
    }

    public boolean sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado.");
            return true;
        }
        System.out.println("Saque negado.");
        return false;
    }
}
```
</details>

---

## 💡 Exercício 2: Hierarquia de Funcionários (Herança e `super`)

**Objetivo:** Praticar a reutilização de código e a passagem de parâmetros para a superclasse.

1. Crie uma classe `Funcionario` com os atributos `nome` e `salario` (ambos `protected`).
2. Adicione um construtor que receba ambos os dados.
3. Crie um método `public double calcularBonus()` que retorna **10%** do salário (`salario * 0.10`).
4. Crie uma classe filha chamada `Gerente` que `extends Funcionario`.
5. O `Gerente` deve ter um atributo privado `String departamento`.
6. Crie o construtor do `Gerente` usando o `super(nome, salario)` e inicializando o departamento.
7. O `Gerente` recebe um bônus maior! Sobrescreva (`@Override`) o método `calcularBonus()` para que ele retorne **20%** do salário (`salario * 0.20`).
8. Na classe `Main`, instancie um Funcionário normal e um Gerente, e mande imprimir o bônus de cada um.

<details>
<summary><b>Mostrar Solução</b></summary>
<br>

```java
// Mãe
public class Funcionario {
    protected String nome;
    protected double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public double calcularBonus() {
        return salario * 0.10; // 10%
    }
}

// Filha
public class Gerente extends Funcionario {
    private String departamento;

    public Gerente(String nome, double salario, String departamento) {
        super(nome, salario); // Passa pra cima
        this.departamento = departamento;
    }

    @Override
    public double calcularBonus() {
        return salario * 0.20; // 20%
    }
}
```
</details>

---

## 💡 Exercício 3: Zoológico Polimórfico (Classes Abstratas e Polimorfismo)

**Objetivo:** Usar arrays e tratar objetos diferentes de forma genérica.

1. Crie uma classe **abstrata** `Animal` com um atributo protegido `String nome`. Crie também um construtor para inicializá-lo.
2. Declare um método **abstrato** `public abstract void emitirSom();`.
3. Crie duas classes filhas: `Cachorro` e `Gato`. Ambas devem implementar o construtor usando `super(nome)` e sobrescrever `emitirSom()`. (O cachorro faz "Au Au" e o gato "Miau").
4. Na classe `Main` (ou Zoológico), crie um **Array ou um ArrayList de Animais**: 
   `Animal[] bichos = new Animal[3];`
5. Adicione 2 cachorros e 1 gato a esse array.
6. Use um **for-each** para percorrer a lista de animais e chamar `emitirSom()` para cada um deles. O Java escolherá magicamente o som certo!

<details>
<summary><b>Mostrar Solução</b></summary>
<br>

```java
abstract class Animal {
    protected String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    // Contrato obrigatório!
    public abstract void emitirSom();
}

class Cachorro extends Animal {
    public Cachorro(String nome) {
        super(nome);
    }

    @Override
    public void emitirSom() {
        System.out.println(nome + " faz: Au Au!");
    }
}

class Gato extends Animal {
    public Gato(String nome) {
        super(nome);
    }

    @Override
    public void emitirSom() {
        System.out.println(nome + " faz: Miau!");
    }
}

public class Zoologico {
    public static void main(String[] args) {
        // Criando uma lista polimórfica (Lente Genérica)
        Animal[] animais = new Animal[3];
        
        animais[0] = new Cachorro("Rex");
        animais[1] = new Gato("Mingau");
        animais[2] = new Cachorro("Bolinha");

        // O Polimorfismo brilha aqui!
        for (Animal animal : animais) {
            animal.emitirSom(); 
            // Cada um chamará ALONGAMENTO do seu próprio código em tempo de execução
        }
    }
}
```
</details>

---

## ⚡ Parabéns!
Se você conseguiu entender o fluxo de como um `Animal` pode assumir a forma de um `Gato`, e como proteger o Saldo usando `private`, você acabou de adquirir os superpoderes da **Orientação a Objetos**. Este é o marco zero para um longo reinado de código em Java! Evite pular essa etapa e pratique desenhar modelos do mundo real no papel antes de virar código.
