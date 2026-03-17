# Capítulo 7: Comentários e Boas Práticas (Código limpo e documentado)

## Falando com outros humanos (e com o seu eu do futuro)
Quando estamos programando, escrevemos instruções para a máquina (o computador). Mas e quando precisamos deixar um lembrete para outro programador que vai ler o código depois, ou para nós mesmos lembrarmos o que fizemos daqui a 6 meses?

É para isso que existem os **Comentários**.
Comentários são trechos de texto no seu código que o **compilador do Java ignora completamente**. Eles não afetam o desempenho nem o funcionamento do programa.

## Tipos de Comentários no Java

### 1. Comentário de Linha Única
Usado para anotações curtas e rápidas. Basta colocar duas barras `//`. Tudo o que vier depois das duas barras até o fim da linha será ignorado pela máquina.

```java
// Este é o método principal que inicia o programa
public static void main(String[] args) {
    int idade = 25; // Esta variável guarda a idade do cliente
}
```

### 2. Comentário de Múltiplas Linhas (Bloco)
Útil quando você precisa escrever um texto longo, um parágrafo inteiro de explicação. Ele começa com `/*` e termina com `*/`. Tudo dentro desse bloco é ignorado.

```java
/* 
Este cálculo gigante e complexo a seguir 
foi feito para calcular os impostos da nota fiscal.
Não altere a fórmula sem avisar a contabilidade!
*/
double imposto = valor * 0.15;
```

### 3. Comentário de Documentação (JavaDoc)
Este é um comentário especial, muito usado no mercado. Ele começa com `/**` e tem um formato específico. Ele serve para gerar, automaticamente, páginas de ajuda e manuais em HTML sobre o seu código (como um livrinho de instruções).

```java
/**
 * Este método calcula a soma de dois números.
 * @param a O primeiro número a ser somado.
 * @param b O segundo número a ser somado.
 * @return O resultado da adição de a com b.
 */
public int somar(int a, int b) {
    return a + b;
}
```

## Boas Práticas (O Código Limpo)
Aprender a sintaxe do Java é só o primeiro passo. O grande diferencial de um bom programador de ADS é escrever **Código Limpo** (Clean Code).
A regra de ouro é: **Seu código deve ser lido como um livro.**

Se você precisar escrever comentários demais explicando o que uma variável faz, muito provavelmente o nome da variável está ruim.
**Exemplo Ruim:**
```java
// a = idade, b = anoAtual
int a = 18;
int b = 2024;
```
**Exemplo Bom:** (Note que o comentário nem é necessário aqui, pois o código se explica sozinho)
```java
int idadeDoCliente = 18;
int anoAtual = 2024;
```

## Minhas Anotações
- 
