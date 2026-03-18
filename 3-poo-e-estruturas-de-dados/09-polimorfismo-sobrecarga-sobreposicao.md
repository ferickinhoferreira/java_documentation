# Polimorfismo: Sobrecarga e Sobreposição

## A Arte de Múltiplas Formas

O Polimorfismo ("poli" = muitas, "morphos" = formas) é a habilidade de um método ou objeto de assumir comportamentos diferentes dependendo do contexto. É o terceiro e grande Pilar da Programação Orientada a Objetos.

Existem duas maneiras principais e essenciais pelas quais o Polimorfismo se manifesta no Java:
1. **Sobrecarga (Overloading)** (Estático / Em tempo de compilação)
2. **Sobreposição (Overriding)** (Dinâmico / Em tempo de execução)

---

## 1. Sobrecarga (Overloading)

A Sobrecarga acontece quando você tem **múltiplos métodos com o MESMO NOME dentro da MESMA classe**, porém com **parâmetros diferentes** (quantidade, tipos ou a ordem deles). O Java sabe exatamente qual método invocar baseado nos argumentos que você passa na chamada.

### Exemplo Clássico: A classe `Calculadora`

```java
public class Calculadora {

    // 1. Somar 2 inteiros
    public int somar(int a, int b) {
        return a + b;
    }

    // 2. Somar 3 inteiros (mesmo nome 'somar', parâmetros mudaram a QUANTIDADE)
    public int somar(int a, int b, int c) {
        return a + b + c;
    }

    // 3. Somar 2 duplos (double) (mesmo nome, parâmetros mudaram o TIPO)
    public double somar(double a, double b) {
        return a + b;
    }
}
```
Uso:
```java
Calculadora calc = new Calculadora();
System.out.println(calc.somar(5, 5));           // Chama a versão de 2 ints -> 10
System.out.println(calc.somar(2, 2, 2));        // Chama a versão de 3 ints -> 6
System.out.println(calc.somar(1.5, 2.5));       // Chama a versão de double -> 4.0
```
Você está invocando operações distintas camufladas sob um único nome fácil de memorizar: `somar()`. Já utilizamos a Sobrecarga quando criamos Múltiplos Construtores num capítulo anterior! O sistema "System.out.println()" que você usa todo dia também é um Polimorfismo de Sobrecarga massivo – há dezenas de println() escritos pela equipe do Java, uma pra Strings, uma pra ints, pra doubles, etc.

---

## 2. Sobreposição (Overriding)

A Sobreposição ou Sobrescrita acontece em um contexto de **Herança**. Ela ocorre quando a **Subclasse (Filha) redefine um comportamento que já existia na Superclasse (Mãe)**, utilizando **exatamente a mesma assinatura** (mesmo nome, mesmo tipo de retorno e os mesmos parâmetros).

### Exemplo: Animais

A Mãe de todos os Animais dita que eles podem emitir um som:

```java
// Classe Mãe
public class Animal {
    public void fazerSom() {
        System.out.println("O animal imite um som qualquer.");
    }
}
```

O Cachorro é uma classe filha (`extends Animal`), mas seu som não é "qualquer". Ele tem uma forma específica:

```java
// Classe Filha 1
public class Cachorro extends Animal {
    // Usamos a anotação @Override para dizer "Estou alterando o método da Mãe"
    @Override
    public void fazerSom() {
        System.out.println("Au au au!");
    }
}

// Classe Filha 2
public class Gato extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("Miau miau!");
    }
}
```

### O Polimorfismo Dinâmico em Ação

Vamos pôr esse poder em uso da forma em que ele brilha fortemente. Num jogo como um Zoológico, não teremos arrays separados para cada animal, usamos uma lente genérica:

```java
public class Zoologico {
    public static void main(String[] args) {
        
        // Através do Polimorfismo de Referências, eu posso colocar numa 
        // variável do tipo "Animal (Mãe)" um objeto de qualquer Filho!
        Animal a1 = new Cachorro();
        Animal a2 = new Gato();
        Animal a3 = new Animal();

        a1.fazerSom(); // "Au au au!" (Pois na memória, ele é um Cachorro)
        a2.fazerSom(); // "Miau miau!"
        a3.fazerSom(); // "O animal imite um som qualquer."
    }
}
```

> **Por que isso é poderoso?**
Porque você não precisa perguntar com um `if (é cachorro)` e depois `if (é gato)`. Você invoca `fazerSom()` no `Animal`, e o próprio objeto polimórfico sabe como se comportar no instante fatal de execução. Se amanhã você programar a classe `Leao`, o motor central de "sons" do jogo continua o mesmo!
