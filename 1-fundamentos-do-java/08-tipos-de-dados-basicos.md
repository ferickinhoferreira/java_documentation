# Capítulo 8: Tipos de Dados Básicos (int, double, boolean e char)

## Guardando Informações na Memória
Um programa de computador, no fundo, serve para receber informações (Dados), processá-las e devolvê-las.
Porém, como o Java é uma linguagem **Fortemente Tipada**, ele não aceita que você apenas crie uma "caixa vazia" para colocar qualquer coisa lá dentro. Ele exige saber **antecipadamente** o formato e o tamanho dessa caixa. Uma caixa feita para guardar números não aceita guardar textos!

A isso chamamos de Tipos de Dados Primitivos (os pilares da linguagem).

## Os 4 Tipos Mais Usados:

### 1. `int` (Números Inteiros)
Abreviação de *Integer*. Usado para qualquer número sem vírgula/casas decimais, tanto positivo quanto negativo.
A caixa do tipo inteiro não é infinita, ela consegue guardar números de até mais ou menos dois bilhões (o que é suficiente para 99% das aplicações).
- **Quando usar:** Contar idade, quantidade de itens no carrinho, ano de nascimento.
```java
int minhaIdade = 25;
int anoAtual = 2024;
```

### 2. `double` (Números Quebrados/Decimais)
Sempre que você precisar de precisão (dinheiro, medidas, notas escolares), você usa o `double`.
**Atenção:** Como o Java foi feito com base no inglês americano, sempre usamos **PONTO (`.`)** em vez de VÍRGULA para separar as casas decimais. Se colocar vírgula, vai dar erro no código!
- **Quando usar:** Saldo bancário, preços, nota da prova.
```java
double precoDaCalca = 89.90; // Correto
// double peso = 75,5; ERRO! Tem que ser 75.5 !
```

### 3. `boolean` (Verdadeiro ou Falso)
Este é o tipo mais simples de todos. Ele responde a perguntas lógicas de "Sim ou Não".
Uma caixa do tipo booleano só tem duas opções na vida: ou ela guarda `true` (Verdadeiro) ou `false` (Falso).
- **Quando usar:** Saber se uma lâmpada está acesa, se um cliente está bloqueado, se alguém passou de ano.
```java
boolean usuarioEstaLogado = true;
boolean maiorDeIdade = false;
```

### 4. `char` (Um Único Caractere Gráfico)
Serve para guardar apenas UMA letra, número ou símbolo por vez (como uma tecla digitada no teclado).
**Atenção:** O tipo `char` obrigatoriamente usa **aspas simples** `' '`. (Diferente da palavra inteira, "String", que usa aspas duplas `" "`).
- **Quando usar:** Letra do gênero da pessoa ('M' ou 'F'), primeira letra do nome.
```java
char inicialDoMeuNome = 'L';
char genero = 'M';
```

*(E a "palavra" inteira? Chamamos de `String`. Ela não é um tipo primitivo, é uma Classe especial do Java, por isso começa com "S" maiúsculo. Veremos ela a fundo no Capítulo 3 da Seção 3! Mas a lógica é essa: `String meuNome = "Lucas";` com aspas duplas).*

## Minhas Anotações
- 
