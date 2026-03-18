# Classes e Objetos

## O que é Orientação a Objetos?
A Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza "objetos" (instâncias de "classes") para representar dados e os métodos (ações) que operam sobre esses dados. Java é uma linguagem fortemente orientada a objetos; praticamente tudo gira em torno desse conceito.

## 1. O que é uma Classe?
Uma **Classe** é um "molde" ou um "projeto" a partir do qual os objetos são criados. Ela define as características (atributos) e o comportamento (métodos) que os objetos daquele tipo terão.

Pense em um "Carro". O conceito "Carro" é a classe. Todos os carros têm uma cor, uma marca e podem ligar e acelerar.

## 2. O que é um Objeto?
Um **Objeto** é uma instância (uma aplicação prática) de uma classe. 
Se a Classe é a planta de uma casa, o Objeto é a casa construída. Você pode construir várias casas (objetos) a partir da mesma planta (classe).

## Exemplo Prático

Vamos criar nossa primeira classe `Carro` e instanciar dois objetos desta classe.

```java
// 1. Definindo a Classe
public class Carro {
    // Atributos (Características)
    String marca;
    String modelo;
    int ano;
    String cor;

    // Métodos (Comportamentos)
    public void ligar() {
        System.out.println("O carro " + modelo + " está ligado: Vrum Vrum!");
    }

    public void acelerar() {
        System.out.println("O carro está acelerando...");
    }
}

public class Principal {
    public static void main(String[] args) {
        // 2. Criando o primeiro Objeto da classe Carro
        Carro meuCarro = new Carro();
        
        // 3. Preenchendo os atributos
        meuCarro.marca = "Toyota";
        meuCarro.modelo = "Corolla";
        meuCarro.ano = 2022;
        meuCarro.cor = "Prata";

        // 4. Criando um segundo Objeto da mesma classe
        Carro carroDoAmigo = new Carro();
        carroDoAmigo.marca = "Honda";
        carroDoAmigo.modelo = "Civic";
        carroDoAmigo.ano = 2023;
        carroDoAmigo.cor = "Preto";

        // 5. Utilizando os métodos
        meuCarro.ligar();        // Saída: O carro Corolla está ligado: Vrum Vrum!
        carroDoAmigo.ligar();    // Saída: O carro Civic está ligado: Vrum Vrum!
        meuCarro.acelerar();     // Saída: O carro está acelerando...
    }
}
```

## Entenda o que aconteceu:

- **`class Carro`**: Criamos o molde. Declaramos que todo carro terá marca, modelo, ano e cor.
- **`new Carro()`**: O comando `new` é o responsável por criar um novo objeto na memória do computador. Quando fazemos `new Carro()`, o Java constrói um "carro em branco" para nós.
- **`meuCarro.marca = "Toyota"`**: Usamos o operador ponto (`.`) para acessar os dados dentro daquele objeto específico e alterá-los.
- **`meuCarro.ligar()`**: Novamente usamos o ponto para acessar a ação (método) que o objeto sabe fazer.

## Resumo
- A **Classe** define o "o quê" e o "como" o modelo será. Ela não existe fisicamente na execução, é apenas um molde.
- O **Objeto** existe na memória, possui dados concretos (como atributos prenchidos) e executa ações (métodos). 

Entender a diferença entre a "Planta" e a "Estrutura real" é o primeiro e mais importante passo para dominar o Java.
