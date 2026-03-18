# Construtores e Palavra this

## O que é um Construtor?
Toda vez que usamos a palavra reservada `new` em Java (ex: `new Pessoa()`), estamos chamando um **Construtor**. 
O Construtor é um bloco de código especial, muito parecido com um método, que tem a função de **inicializar** o objeto que acabou de ser criado na memória. É nele que configuramos os "valores iniciais obrigatórios" de uma classe.

**Regras Fundamentais de um Construtor:**
1. O nome do construtor **deve ser exatamente igual ao nome da classe**.
2. O construtor **não tem tipo de retorno**, nem mesmo `void`.

### Construtor Padrão
Se você não escrever nenhum construtor na sua classe, o compilador Java insere um **construtor padrão vazio e sem parâmetros** automaticamente. É por isso que você consegue fazer `new Carro()` mesmo sem ter declarado a palavra "Carro()" dentro da classe.

### Criando um Construtor Personalizado

Imagine que você não queira permitir que uma `Pessoa` seja criada sem ter um nome e uma idade definida desde o primeiro instante.

```java
public class Pessoa {
    String nome;
    int idade;

    // Construtor personalizado
    public Pessoa(String nomeInicial, int idadeInicial) {
        nome = nomeInicial;
        idade = idadeInicial;
        System.out.println("Uma nova pessoa chamada " + nome + " foi criada!");
    }

    public void exibirInfo() {
        System.out.println("Nome: " + nome + ", Idade: " + idade);
    }
}
```

Uso:
```java
public class Principal {
    public static void main(String[] args) {
        // Usar o new agora requer passar os parâmetros obrigatórios
        Pessoa p1 = new Pessoa("Ana", 25);
        p1.exibirInfo();
        
        // Pessoa p2 = new Pessoa(); // ERRO! Não existe mais construtor vazio.
    }
}
```

## A Palavra-Chave `this`

No exemplo acima, os parâmetros receberam nomes como `nomeInicial` para não confundir com o atributo `nome` da classe. Mas na prática, os programadores acham isso ruim de ler. É mais limpo usar o mesmo nome.
Porém, se você fizer isso:
```java
nome = nome;
```
O Java vai se confundir: "De qual nome você tá falando? O parâmetro ou atributo?". Por padrão, ele sempre olha para o escopo mais próximo (que é o parâmetro), então ele estaria atribuindo o valor do parâmetro para o próprio parâmetro e o atributo da classe continuaria vazio.

A solução elegante para isso é a **palavra-chave `this`**.

O `this` é uma referência para o **próprio objeto** que está executando aquele código naquele exato momento da memória real (a instância). É como se o objeto falasse: "O **MEU** nome".

```java
public class Pessoa {
    String nome;
    int idade;

    public Pessoa(String nome, int idade) {
        // this.nome significa o ATRIBUTO da classe.
        // nome sozinho significa a VARIÁVEL do PADRÃO do método/construtor.
        this.nome = nome; 
        this.idade = idade;
    }
}
```
A partir de agora, é assim que você verá 99% dos construtores pelo mundo afora, usando `this`.

### `this` em Métodos

O `this` não é exclusivo de construtores. Você pode usar em qualquer método da classe para ser explícito de que você está modificando um atributo interno, embora muitas vezes não seja obrigatório se não houver um parâmetro conflitando de nome igual.

```java
public void atualizarIdade(int novaIdade) {
    this.idade = novaIdade; // Claro e auto-explicativo: a MINHA idade se torna a nova idade.
}
```

## Sobrecarga de Construtores (Overloading)

Assim como com métodos (que veremos no tópico de polimorfismo), você pode ter **mais de um construtor** na mesma classe. Como o Java vai saber qual usar? Ele olha para a quantidade e o tipo dos parâmetros que você quer passar no `new`.

```java
public class Produto {
    String nome;
    double preco;
    int quantidadeEstoque;

    // Construtor 1 (Completo)
    public Produto(String nome, double preco, int quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    // Construtor 2 (Caso a pessoa cadastre sem dar quantidade, assume zero)
    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = 0; // valor explícito
    }
}
```

**Uso:**
```java
Produto tv = new Produto("TV 50", 2500.0, 10);      // Chama Construtor 1
Produto celular = new Produto("iPhone", 5000.0);   // Chama Construtor 2
```

O `this` e os construtores andam de mãos dadas para nos garantir que os objetos que vamos modelar nasçam de forma estruturada, sem deixarmos escapar nenhum dado obrigatório ou importante em "branco".
