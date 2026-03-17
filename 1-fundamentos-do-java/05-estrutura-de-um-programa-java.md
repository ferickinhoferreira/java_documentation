# Capítulo 5: Estrutura de um Programa Java (Classes, métodos e pacotes)

## A Organização das Gavetas (Pacotes / Packages)
Imagine que você está construindo um sistema gigantesco para um banco. Você terá centenas de arquivos de código (Centenas de Classes!). Deixar todos eles soltos na mesma pasta viraria uma bagunça, certo?

No Java, nós usamos **Packages (Pacotes)**.
Um pacote é literalmente uma pasta no seu computador onde você agrupa coisas parecidas.
- Exemplo: Você pode ter uma pasta (pacote) chamada `clientes`, outra chamada `contas` e outra chamada `relatorios`.

Quando criamos uma classe dentro de um pacote, a **primeira linha do nosso código Java** deve avisar em qual pacote ela está.

```java
package br.com.meubanco.clientes;

public class Cliente {
    // Código do cliente aqui
}
```
*Curiosidade: O padrão de mercado para criar nomes de pacotes é usar o domínio da internet da empresa, só que ao contrário. (Ex: o site meubanco.com.br vira o pacote `br.com.meubanco`). Todas as letras devem ser sempre minúsculas.*

## Classes: Os Moldes (Plantas Baixas)
Aprendemos que tudo no Java é orientado a objetos. Isso significa que programar em Java é observar o mundo real e transformá-lo em código.
A **Classe** é o "molde" ou a "planta baixa" de alguma coisa.

Pense numa planta baixa de uma casa: A planta te diz onde ficam as portas, qual a cor da parede, etc. Mas a planta em si *não é a casa*, você não mora nela. Você precisa *construir* a casa baseada na planta.

Em Java, a Classe define as características (Variáveis) e os comportamentos (Métodos).

## Métodos: As Ações (Verbos)
Se as variáveis guardam informações (nome do cliente, saldo da conta), os **Métodos** dizem o que aquilo pode *fazer*.
Métodos são as ações, as funções do seu programa. Eles devem sempre ter nomes que indiquem uma ação (geralmente verbos no infinitivo).

Exemplo estrutural completo:

```java
// 1. O Pacote onde o arquivo está guardado
package br.com.minhaempresa;

// 2. A Classe (O Molde) - Padrão PascalCase (Iniciais Maiúsculas)
public class Carro {

    // 3. Método (Ação) - Padrão camelCase (Primeira minúscula, próximas Maiúsculas)
    public void ligarMotor() {
        System.out.println("Vrummm! O carro ligou.");
    }
    
    public void acelerar() {
        System.out.println("Aumentando a velocidade...");
    }
}
```

## Minhas Anotações
- 
