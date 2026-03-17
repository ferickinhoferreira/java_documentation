# Capítulo 9: break e continue (Controlando o fluxo)

## Botões Emergenciais nos Laços de Repetição
Você está dentro de um laço `for` focado procurando em um banco de dados de um milhão de CPFs o exato perfil do "Joãozinho da Silva".
Para nossa sorte, o "Joãozinho" foi achado na posição nº 35 dos 1.000.000 registrados!
Porém... O laço `for` está montado para girar 1 MILHÃO de vezes. Ele vai continuar rodando e gastando o processamento do servidor à toa por 999.965 repetições até o final?

Não! O programador inteligente usa as instruções de quebra de fluxo `break` ou o acelerador de laços `continue`.

## 1. O Botão Pânico: `break`
A palavra mágica **break** (quebra) possui poder absoluto de destruir um `for`, um `while` ou `do-while` imediatamente. Se a JVM lê a palavra `break;`, fumaça sobe no circuito lógico interno, as chaves do laço desarmam e o sistema pula violentamente o bloco todo indo para a próxima linha fora dele.

Vimos ele atuando no Switch Case do cap 5, e a lógica aqui é a mesma: matar a execução antecipada.

```java
// Contando de 1 a 10... mas algo "grave" acontece no 5:
for (int i = 1; i <= 10; i++) {
    
    System.out.println("Número: " + i);
    
    // Se batermos no número "5", disparamos o gatilho da bomba de fragmentação:
    if (i == 5) {
        System.out.println("Grave alerta - parando a contagem IMEDIATAMENTE!");
        break; // A execução vai arrebentar as chaves do `for` e escapar daqui.
    }
}
System.out.println("Fuga das chaves efetuada. Fim do algoritmo!");
/* 
Resultado impresso: 
Número: 1
Número: 2
Número: 3
Número: 4
Número: 5
Grave alerta - parando a contagem IMEDIATAMENTE!
Fuga das chaves efetuada. Fim do algoritmo!
*/
```

## 2. O Acelerador Mágico: `continue`
Ao contrário do break que quebra o ciclo inteiro acabando com a brincadeira, o **continue** é como pular um degrau de uma escadaria de costas propositalmente para acelerar o processo.
Quando a instrução `continue;` for executada, a laço não acaba - ele apenas **aborta tudo o que está abaixo dele para Aquela Específica Chamada Atual** e volta instântaneamente lá pro começo do laço, voltando a executar a próxima rodada! (Rodando o contador `i++` normalmente no for, por exemplo).

**Caso de Uso Real:**
Imprimir apenas os números **ÍMPARES** de 1 a 10 e pular silenciosamente os pares gastando zero milissegundos nas linhas abaixo.

```java
for (int i = 1; i <= 10; i++) {
    
    // Operador Módulo denovo! Se o resto de dividir por 2 for "Zero"... Ele é par.
    if (i % 2 == 0) {
        System.out.println("\n(Shh! Encontrei um par nº " + i + ", vou pular ele direto pra cima de volta e ele nunca lerá a linha 11!)");
        continue;
    }
    
    // Se o If acima NÃO foi lido... Quer dizer que o bloco só vai imprimir números Ímpares sem pular!
    System.out.println("-> Sou o número IMPAR: " + i);
}

/* 
Resultado:
-> Sou o número IMPAR: 1
(Shhii! Pulei o par 2)
-> Sou o número IMPAR: 3
(Shhii! Pulei o par 4... ) e etc
*/
```

Grave esses dois comandos em sua mente. Entrevistas de estágio e pleno adoram pedir que os programadores validem listas de milhares de CPFs no Java e usem comandos de aceleração `continue` e finalizadores `break` pra economizar RAM e segundos da nuvem da Amazon (e assim, agradar seu patrão poupando dinheiros da empresa! 🤑).

## Minhas Anotações
- 
