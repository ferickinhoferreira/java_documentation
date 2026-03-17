# Capítulo 6: JVM, JRE e JDK (Como o Java é executado)

## Acabando com a sopa de letrinhas (A Santíssima Trindade do Java)

No Capítulo 3, eu mandei você instalar o **JDK**. Mas o que é exatamente essa sopa de letrinhas e por que é importante um aluno de ADS saber disso?

Para trabalhar com Java, existem três siglas essenciais que representam camadas, como as bonecas russas (uma dentro da outra):

### 1. JVM (Java Virtual Machine) - O Coração (A mais interna)
A JVM (Máquina Virtual Java) é o segredo do porquê o Java roda em qualquer lugar.
* É ela que "lê" o seu código traduzido (Bytecode) e repassa os comandos para o seu sistema operacional (Windows, Mac ou Linux).
* Pense na JVM como um tradutor simultâneo. Você fala em Bytecode, ela ouve, traduz para as engrenagens do Windows e faz o computador funcionar. 
* Ela também é responsável pela limpeza de memória (o Garbage Collector que já comentamos age aqui!).

### 2. JRE (Java Runtime Environment) - O Ambiente de Execução (A do meio)
O JRE é o pacote feito para os **usuários finais**. 
* Imagine que você criou um sistema incrível no seu computador de programador e agora quer vender para uma farmácia. O computador do caixa da farmácia precisa do JRE instalado para rodar o seu programa.
* O que vem no JRE? Vem a JVM (óbvio, precisa dela para rodar) + Ferramentas básicas e bibliotecas prontas do Java para que as engrenagens girem na máquina do cliente.
* *Nota:* O JRE **NÃO** serve para criar programas. Se uma pessoa tiver só o JRE no computador, ela não consegue programar em Java, só consegue "rodar" jogos e programas Java prontos.

### 3. JDK (Java Development Kit) - O Kit Completo (A externa)
O JDK é o pacote supremo, feito exclusivamente para nós, os **Programadores**.
* O que vem no JDK? Vem o JRE (para conseguirmos rodar e testar nosso próprio código) + O Compilador Java (`javac`) + Ferramentas avançadas de diagnóstico e desenvolvimento.
* É por isso que você instalou o JDK no Capítulo 3! Com ele, você tem todas as ferramentas necessárias para *criar* (compilar o arquivo `.java` para `.class`) e para *rodar*.

## Resumo Visual

`JDK`  = (Compilador / Ferramentas de Dev) + `JRE`
`JRE`  = (Bibliotecas / Arquivos de Suporte) + `JVM`
`JVM`  = A Máquina Virtual que executa o Bytecode no PC.

## O Fluxo de Execução
1. Você escreve: `MeuPrograma.java`
2. O Compilador (do JDK) transforma isso em um arquivo traduzido: `MeuPrograma.class` (Bytecode)
3. A JVM pega esse `MeuPrograma.class` e roda ele de verdade na tela do Windows ou Linux!

## Minhas Anotações
- 
