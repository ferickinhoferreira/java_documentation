# Encapsulamento, Getters e Setters

## O Pilar de Proteção dos Dados
O **Encapsulamento** é um dos pilares mais fundamentais da Programação Orientada a Objetos. O princípio resume-se em uma frase clássica:
> "Oculte os dados e exponha apenas os métodos que manipulam esses dados de forma segura."

A ideia é proteger os atributos ("estado interno") da classe contra modificações feitas externamente sem controle e sem verificação. Para aplicar o encapsulamento, utilizamos os **Modificadores de Acesso**, o mais usado sendo o `private` (privado).

## O Problema do Acesso "Aberto"

Lembra de alterarmos atributos com o ponto diretamente?
```java
ContaBancaria minhaConta = new ContaBancaria();
minhaConta.saldo = -5000.0; // Isso não faz sentido na vida real!
```
Qualquer programador, que estiver montando outra parte do software, poderia corromper os dados da conta.

## A Solução com `private`

Para resolvermos isso, marcamos os atributos como `private`. Isso os "tranca" dentro da Caixa-Forte da classe. Se alguém tentar acessá-los de fora (de outra classe `Principal` por exemplo), o código sequer vai compilar.

```java
public class ContaBancaria {
    private String titular;
    private double saldo;

    public ContaBancaria(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
}
```

Agora se tentarmos:
```java
ContaBancaria c1 = new ContaBancaria("João", 100);
c1.saldo = 500; // ERRO: O campo ContaBancaria.saldo não é visível.
```

## Getters e Setters

Ok, agora a propriedade está imblindável. Mas e se o usuário precisar consultar o nome do titular? Ou mudar de nome? É aqui que entram os métodos **Getters** e **Setters**.
Eles são os portões vigiados e seguros de acesso à Caixa-Forte.

- **`get`** (pegar/obter): Método que devolve o valor de um atributo privado. Geralmente com o nome do atributo (ex: `getTitular()`).
- **`set`** (definir/configurar): Método que recebe como parâmetro um novo valor e atualiza o atributo privado (ex: `setTitular(String nome)`). É no Set que colocamos **regras de validação**.

### A Classe Totalmente Encapsulada

```java
public class Produto {
    // 1. Atributos Privados
    private String nome;
    private double preco;

    // 2. Construtor Público
    public Produto(String nome, double preco) {
        this.nome = nome;
        setPreco(preco); // Chama o setter direto no construtor para aproveitar a validação!
    }

    // 3. Getter do Nome
    public String getNome() {
        return this.nome;
    }

    // 4. Setter do Nome
    public void setNome(String nome) {
        if(nome != null && !nome.trim().isEmpty()) {
            this.nome = nome;
        } else {
            System.out.println("Nome inválido!");
        }
    }

    // 5. Getter do Preco
    public double getPreco() {
        return this.preco;
    }

    // 6. Setter do Preco com Regra de Negócio
    public void setPreco(double preco) {
        // A Regra: Nunca um produto pode ser negativo
        if (preco >= 0) {
            this.preco = preco;
        } else {
            System.out.println("Erro: Preço negativo não pode ser atribuído.");
        }
    }
}
```

### O Uso Perfeito e Seguro

```java
public class Loja {
    public static void main(String[] args) {
        Produto videogame = new Produto("PS5", 4000.0);

        // Lendo valores através dos Getters (Seguro)
        System.out.println("Produto: " + videogame.getNome());
        System.out.println("Preço R$: " + videogame.getPreco());

        // Modificando valor usando regras de validação Seguras com Setters
        videogame.setPreco(-50.0); // O código intercepta, dispara a print de "Erro" e barra a alteração!
        
        System.out.println("Preço ainda é: " + videogame.getPreco()); // Vai ser 4000.0
    }
}
```

## Resumo
A imensa maioria de todas as classes em seus softwares profissionais baseados em Java vão adotar este padrão sem hesitar:
1. **Atributos `private`**.
2. Cria os **Construtores**.
3. Fornece os métodos **Gets / Sets** que forem necessários para as demais classes da aplicação se comunicarem.

Vale notar que nem todo atributo precisa ter Getter E Setter. Em contas bancárias você normalmente cria um método `getSaldo()` mas **nunca** de forma alguma cria um `setSaldo(double novoSaldo)`, mas sim através de métodos de transação (`depositar()` e `sacar()`).
