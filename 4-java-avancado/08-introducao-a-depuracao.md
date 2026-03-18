# Capítulo 8: Introdução à Depuração (Encontrando e corrigindo bugs)

## O que é um Bug?
A palavra Bug (inseto, em português) tornou-se sinônimo de "erro de programa" em 1947. A lenda diz que um inseto físico entrou nas chaves do primeiro supercomputador americano, causando um curto e um mau funcionamento na conta que a máquina fazia.
Hoje, os bugs são falhas de **lógica humana**. Você mandou o Java multiplicar por 10, mas deveria ter mandado dividir. O programa não errou, ele apenas obedeceu sua lógica cega falha.

Em vez de olharmos para um código de 1.000 linhas por 3 horas seguidas até o olho arder tentando adivinhar onde a gente errou, as profissões modernas de ADS utilizam a técnica sagrada: A **Depuração** (ou *Debugging*).

## O "Detective Mode" (Debug)
O Debugging permite que você seja um viajante do tempo: Você pode fazer a sua IDE (o IntelliJ) PAUSAR a execução do seu programa no meio da matemática, em qualquer linha que você escolher. E, a partir dali, você manda a IDE rodar **uma única linha de código por vez** para ver a variável mudar ao vivo!

Quando pausamos o jogo para olhar as variáveis do Java, nos chamamos esse ponto de pausa de **Breakpoint (Ponto de Quebra)**.

### Como usar na Prática no IntelliJ IDEA:

1.  ### Colhendo a lupa: O Breakpoint
    No Eclipse ou Intellij, repare que as linhas de código possuem números na calha do lado esquerdo (1, 2, 3...). 
    Vá na linha `int soma = x + y;` do seu código suspeito e clique do lado do número da linha.
    Um ponto (bolinha) **VERMELHA** surgirá na tela! Aquele é o seu ponto de quebra.
    
2.  ### Inicializando o programa não mais pelo Play!
    Normalmente nós executamos o código clicando na Seta de Play (Run). Se fizermos isso agora, o Java ignorará nossa bola vermelha e rodará tudo sem parar.
    Para testar, você deve clicar no botão bem do lado do play: **O botão do Inseto Verde (Debug)!** Quando clicar nele, o Intellij iniciará seu sistema em modo observação lenta.

3.  ### Explorando a Matrix (A aba Variables)
    Ao clicar em Debug, seu programa vai rodar até a linha vermelha. Quando chegar lá (antes de executá-la), **o terminal congelará inteiramente**. O painel de debug nascerá debaixo focando nas suas variáveis. Você verá exatamente quanto era X, quanto era Y naquele milissegundo trágico do tempo.

4.  ### Avançando quadro-a-quadro (Step Over)
    No painel de botões que saltam perto da área do debugger, você verá a principal ferramenta do viajante do espaço-tempo: o **Step Over (Avançar Linha - atalho `F8`)**.
    Sempre que você aperta esse botão, a linha vermelha da IDE desce pra próxima. Ou seja, você forçou o Java a andar de ladeira abaixo num passo de tartaruga!
    Enquanto você aperta `F8` pra descer pelas lógicas do `If / For` etc, você pode observar tudo mudando. Se você ver sua variável com 10 virar magicamente 2 no final ali nas variáveis do rodapé, adivinha? **BINGO!** A linha assassina que desgraçou a conta foi a de cima!

## Conclusão de Fase 3
A ferramenta Debugging salva empregos, acalma corações e é literalmente a janela da matrix da RAM. Você não é um programador sênior se nunca pausar para olhar uma variável em tempo real.

Agora você sabe instanciar coleções gigantes com `Arrays[]`, ler bidirecionais em `Matrizes[][]`, usar as tesouras automáticas das `.Strings()`, envelopar lógicas massacrantes na base de `Métodos` com envio e retorno assíncronos e viajar com Depurador Visual de código com `Breakpoints`. Parabéns!

Hora das ferramentas de produção que o separam do nível infantil de lógica e o trazem ao mercado mundial de Back-end: **Java Collections Avance e Boas Práticas (Fase 4 Avançada)!**

## Minhas Anotações
- 
