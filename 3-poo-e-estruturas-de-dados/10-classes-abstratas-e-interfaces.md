# Classes Abstratas e Interfaces

## Introdução

À medida em que seus sistemas crescem, certas classes ou conceitos começam a ficar puramente representativos ("abstratos"). O Java nos oferece maneiras nativas não só para representar isso, como para **forçar** que nossas filhas obrigatoriamente implementem regras. 
Entram na jogada as **Classes Abstratas (abstract)** e as **Interfaces**.

---

## 1. Classes Abstratas

Imagina a classe `Animal` do nosso capítulo anterior. No mundo real não existe um "Animal" genérico que você pode avistar na mata ("Olhe lá, vai passando um Animal"). O que você vê é um "Leão", um "Cachorro", um "Pássaro" e todos esses herdam de Animal. A classe `Animal` é, portanto, uma Ideia Abstrata. O Java permite que a gente bloqueie a criação ("new") em classes base usando a palavra reservada `abstract`.

```java
// abstract class: É um molde que não pode ser instanciado sozinho.
public abstract class Animal {
    private String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    // Métodos normais com corpo e lógica ainda são bem-vindos!
    public String getNome() {
        return nome;
    }

    // Método Abstrato: Não tem corpo! Ele só define o SEGURO/CONTRATO para as filhas.
    public abstract void fazerSom();
}
```

Se você tentar executar `Animal a = new Animal("Bolota");` receberá um **Erro**, pois classes abstratas não são finalizadas o suficiente para se tornarem objetos na memória (Afinal, de que forma o Bolota iria fazer o método vazio `fazerSom()`?).

### Herdando e Cumprindo o Contrato

O poder da obrigatoriedade do método não ter corpo é que **qualquer classe que estenda (`extends`) uma classe abstrata é forçada pelo compilador a sobrescrever (`@Override`) todos os métodos abstratos!** O Dev **não esquece** mais.

```java
public class Gato extends Animal { // Compilador te obriga a escrever a linha 8

    public Gato(String nome) {
        super(nome);
    }

    @Override
    public void fazerSom() {
        System.out.println("Miau miau!");
    }
}
```

## 2. Interfaces (O "Contrato" Puro)

Ao contrário de uma classe abstrata (que pode ter construtores, métodos com código pronto e estado/atributos), uma **Interface** é muito mais extrema. Uma interface só declara **o quê** deve ser feito, sem definir **nenhum pingo do como**. Ela é uma casca vazia, puramente comportamental. Em vez de `extends`, usa-se `implements`.

> Nota de Versões: Hoje em dia (Java 8+) Interfaces até podem ter códigos (`default methods` ou `static methods`), mas isso é uma adição moderna para fins utilitários, no âmago da arquitetura você criará declarações vazias na interface.

Outro ponto poderoso: Uma classe pode dar `extends` em apenas UMA pai/mãe, mas **pode implementar QUANTAS `interfaces` você sonhar!**

### Exemplo de Interface

```java
// Sintaxe sem a palavra "class"
public interface Autenticavel {

    // Todos os métodos de uma Interface por padrão e compilação já são "public abstract".
    // Ou seja, nem precisaria escrever, basta: boolean autenticar(String senha);
    public abstract boolean autenticar(String senha);
    
}
```

Qualquer classe em toda a esquina o sistema, não importando a hierarquia familiar, pode jurar pacto de sangue implementando essa interface e ser considerada "Autenticável".

```java
// Funcionário tem pai, e de quebra possui um "cargo" de login
public class Gerente extends Funcionario implements Autenticavel {
    
    private String senhaSecreta = "1234";
    
    // O Gerente tem o SEU código próprio para validar isso
    @Override
    public boolean autenticar(String senhaDaTentativa) {
        return this.senhaSecreta.equals(senhaDaTentativa);
    }
}
```

```java
// O Fornecedor de café não tem parentesco NENHUM e pode logar na intranet.
// Graças á Interface, todo o código que trabalha com acesso à internet trata ele igualzinho ao Gerente.
public class FornecedorCafe implements Autenticavel {
    @Override
    public boolean autenticar(String senhaDaTentativa) {
        return senhaDaTentativa.equals("cafe123");
    }
}
```

## Quando usar qual?
- **Classe Abstrata**: Quando todas as opções são muito familiares entre si (tendo atributos em comum como Idade, Peso) e há reuso central que todas precisarão se apoiar. (*Is-a*: "Gato é um Animal").
- **Interface**: Quando elas não têm atributos em comum e a única coisa conectando os pontos no mundo entre eles é algo situacional ("Possuir Habilidade", "Ser Exibível na Tela"). (*Can-do*: "Gerente sabe logar", "Fornecedor sabe logar").
