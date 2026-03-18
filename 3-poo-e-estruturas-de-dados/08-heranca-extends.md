# Herança (extends e super)

## O que é Herança?
A **Herança** é um mecanismo da POO que permite que uma classe (chamada de subclasse, classe filha ou classe derivada) herde os atributos e métodos de outra classe (chamada de superclasse, classe mãe ou classe base).

Isso nos permite reaproveitar código e criar relacionamentos "É UM" (Is-A) entre as classes. Por exemplo: "Um Cachorro **é um** Animal", "Um Gerente **é um** Funcionário".

## A Palavra-chave `extends`

No Java, usamos a palavra reservada `extends` para indicar que uma classe está herdando de outra.
**Atenção:** Em Java, uma classe só pode herdar de *uma única* classe por vez (Não existe Herança Múltipla de classes em Java).

### Exemplo de Herança

Imagine um sistema para uma empresa. Todos os funcionários têm um Nome e um Salário.

```java
// Classe Mãe (Superclasse)
public class Funcionario {
    protected String nome; // O 'protected' permite acesso para os filhos, veremos mais à frente!
    protected double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public void trabalhar() {
        System.out.println(this.nome + " está trabalhando.");
    }
}
```

Agora, vamos criar uma classe `Gerente` e reaproveitar os campos NOME e SALÁRIO.

```java
// Classe Filha (Subclasse)
public class Gerente extends Funcionario {
    private String departamento; // Atributo exclusivo do Gerente
    
    // Construtor
    public Gerente(String nome, double salario, String departamento) {
        // A palavra 'super' chama o construtor da classe MÃE.
        // Isso passa "nome" e "salario" pra cima para a Funcionario inicializar.
        super(nome, salario);
        this.departamento = departamento;
    }

    // Método exclusivo do Gerente
    public void gerenciarEquipe() {
        System.out.println(this.nome + " está gerenciando o departamento de " + this.departamento);
    }
}
```

O `Gerente` "ganhou" os atributos `nome` e `salario` e o método `trabalhar()` sem precisarmos escrever esses códigos novamente na classe dele!

## A Palavra-chave `super`

Vimos no exemplo do `Gerente` a palavra `super`. Ela funciona exatamente como o `this`, só que em vez de se referir à própria classe, ela **se refere à classe Mãe (Superclasse)**.

### Dois usos principais do `super`:

1. **`super()`**: Para invocar o construtor da classe mãe e repassar dados à mesma. 
   - *Regra: A chamada ao construtor `super()` DEVE sempre ser a PRIMEIRA linha do construtor da subclasse.*
2. **`super.metodo()`** ou **`super.atributo`**: Permite chamar um método ou atributo da superclasse (útil caso a subclasse decida sobrescrevê-lo, que é o que chamamos de Polimorfismo, mas você ainda precise acessar o original).

```java
// Como o Gerente usa o Salário original, porém dá um bônus especial?

public double calcularSalarioGeral() {
    double fixo = super.salario; // "super.salario" acessa o salário fixo declarado pela matriz Mãe.
    return fixo + 3000.0;
}
```

## Benefícios da Herança
- **Reuso de código**: É inegável o poder de declarar atributos cruciais apenas uma vez. Se no futuro um "Funcionário" ganhar um "CPF", todas as subclasses (`Gerente`, `Supervisor`, `Atendente`) herdarão esse CPF instantaneamente.
- **Base para Polimorfismo**: A herança prepara o terreno para criarmos algoritmos que consigam lidar com objetos diferentes (Gerentes, Supervisores) através da mesma lente genérica (Funcionário).

**Dica de Arquitetura de Software**:
Herança é fantástica, mas **só aplique herança se houver um relacionamento claro do tipo "É UM"**.
- "Gerente" É UM "Funcionario": Correto! `extends`.
- "Motor" É UM "Carro": Errado! Um carro TEM UM motor (Isso é Composição, resolve-se declarando a classe Motor como um atributo dentro da classe Carro).
