# Capítulo 2: Operadores Lógicos e Relacionais

## A Base da Inteligência do Sistema
Um programa de computador só se torna inteligente quando ele consegue olhar para os dados e tomar conclusões a partir deles: *"O saldo é maior que a dívida?"*, *"O usuário é administrador e a senha está correta?"*

Para fazer o computador avaliar essas afirmações, usamos dois conjuntos de operadores: os **Relacionais** (para comparar coisas) e os **Lógicos** (para juntar mais de uma condição). O resultado de qualquer uma dessas operações é sempre um tipo primitivo **`boolean`** (`true` ou `false`).

## 1. Operadores Relacionais (As Comparações)
Esses operadores comparam dois valores ou duas variáveis.

*   `==` (Igual a) — **Atenção gigante!** Na matemática o símbolo `=` compara coisas. No Java, um `=` sozinho significa "recebe/salva" (Atribuição). Para COMPARAÇÃO usamos dois iguais: `==`.
*   `!=` (Diferente de) — A exclamação no Java quase sempre significa negação ou "não".
*   `>` (Maior que)
*   `<` (Menor que)
*   `>=` (Maior ou igual a)
*   `<=` (Menor ou igual a)

```java
int idade = 18;
int idadeParaDirigir = 18;

boolean podeDirigir = (idade >= idadeParaDirigir); // Isso vai retornar 'true'
boolean eMenorDeIdade = (idade < 18); // Isso vai retornar 'false'
```

## 2. Operadores Lógicos (AND, OR, NOT)
Na vida real, uma decisão geralmente depende de múltiplas coisas. Exemplo: *"Para entrar no show eu preciso ter 18 anos **E** também possuir o ingresso."*

### O Operador E (`&&` - AND)
Todas as condições das pontas precisam ser Verdadeiras para o todo ser Verdadeiro.
```java
boolean temIngresso = true;
boolean temIdadeMaiorQue18 = true;

// Verdadeiro E Verdadeiro = Verdade. Vai poder entrar.
boolean acessoLiberado = temIngresso && temIdadeMaiorQue18; 
```

### O Operador OU (`||` - OR)
Basta que apenas UMA das pontas seja Verdadeira para o todo virar Verdadeiro.
Se obtém com o botão Shift e a tecla ao lado do Z ou Shift e a contrabarra, gerando os *pipes* verticais `||`.
```java
boolean temCartaoDeCredito = false;
boolean pagouNoPix = true;

// Falso OU Verdadeiro = Verdade. Vai aprovar a venda.
boolean compraAprovada = temCartaoDeCredito || pagouNoPix;
```

### O Operador de NEGAÇÃO (`!` - NOT)
Ele inverte a lógica booleana do que vier na frente dele. O verdadeiro vira falso e vice-versa.
```java
boolean usuarioEstaBloqueado = false;

// Nós lemos isso como: "O usuário NÃO está bloqueado" = true
boolean permiteLogin = !usuarioEstaBloqueado; 
```

No próximo capítulo, nós pegaremos toda essa base lógica booleana maravilhosa e colocaremos o computador finalmente para tomar decisões automáticas usando a estrutura `if/else`!

## Minhas Anotações
- 
