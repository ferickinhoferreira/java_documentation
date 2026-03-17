# Capítulo 9: Variáveis e Constantes (Armazenando e manipulando dados)

## O que são Variáveis e Constantes?
Nos Capítulos anteriores aprendemos sobre os **Tipos Primitivos** (caixas). Neste capítulo, vamos aprender as regras de como criar e usar essas caixas na memória.

*   **Variáveis** = Uma caixa cujo valor pode mudar (variar) a qualquer momento durante a execução do programa.
*   **Constantes** = Uma caixa selada com cadeado. Depois que você coloca um valor na constante pela primeira vez, ela **nunca** mais pode ser alterada.

## Variáveis
Como declaramos (criamos) uma variável em Java?
Sempre seguimos esta fórmula:
**[Tipo de Dado]** **[Nome da Variável]** **=** **[Valor Inicial]**;

```java
public class CaixaEletronico {
    public static void main(String[] args) {
        // Criando a variável (Abaixo, eu abro a caixa e já coloco R$ 100 nela)
        double saldoNaConta = 100.50;
        
        System.out.println("Saldo inicial: " + saldoNaConta);
        
        // Alterando (Abaixo, o programa está pegando a MESMA caixa, jogando os 100 fora, e colocando 500 nela)
        // Atenção: A partir do momento em que a caixa já foi criada acima, você nunca mais precisa dizer o "tipo" dela (não preciso escrever double de novo).
        saldoNaConta = 500.00;
        
        System.out.println("Saldo após depósito gigante: " + saldoNaConta);
    }
}
```
### Regras para Nomes de Variáveis:
1. Java é *Case Sensitive*: Diferencia letras maiúsculas de minúsculas. A variável `idade` é completamente diferente da variável `Idade` ou `IDADE` para a máquina.
2. Não pode começar com números (`1nome`), mas pode ter números no meio (`nome1`).
3. Não pode ter acentos ou cedilha (`endereço` -> `endereco`).
4. **Padrão de Mercado:** Use sempre o **camelCase** (como a corcova do camelo). A primeira letra é sempre minúscula e as novas palavras iniciam com letra Maiúscula grudada (Exemplo: `valorDoDescontoCliente`).

## Constantes
E se quisermos proteger uma informação crítica? Como o valor de Pi (3.14) ou uma taxa de juros fixa do governo?

No Java, nós criamos uma constante usando a palavra-chave **`final`** no começo da linha.
Se outro programador tentar alterar esse valor nas próximas linhas, a IDE do Intellij vai gritar um erro gigantesco e tela vermelha.

**Padrão de Mercado para Constantes:** Por convenção global dos programadores, o nome de uma constante é sempre digitado todo em LETRAS MAIÚSCULAS separadas por underline.

```java
// O tipo é double, o nome é VALOR_DE_PI, e ela nunca vai mudar.
final double VALOR_DE_PI = 3.14159;

// O tipo é double, o nome é TAXA_DE_JUROS, e a partir da linha de baixo, quem tentar somar nela vai quebrar o código.
final double TAXA_DE_JUROS = 0.05;
```

## Minhas Anotações
- 
