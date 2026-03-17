# Capítulo 10: Exercícios Práticos - Parte 1

## Hora de Sujar as Mãos (O Teste dos Deuses de ADS) 💻 🔥

Todo o conteúdo teórico de base do mercado sobre operadores, caixas variáveis, fluxos de decisão bipolares, cascatas if/else if e laços interativos agora está em seu cérebro. Mas o Java não é aprendido por simbiose apenas lendo. É falhando e recriando no Intellij que você alcançará sua proficiência Jedi.

Aqui estão 3 desafios baseados em testes reais de empresas para Júniores. 

Regra 1: Abra o **IntelliJ**, crie uma classe de teste simples com método main e TENTE FAZÊ-LOS SOZINHO.
Regra 2: Você precisará instanciar aquele "garçom" maravilhoso (`Scanner`) para nós lermos a digitação no terminal.

### Desafio 1: A Balada da Faculdade (Decisão Lógica If/Else)
Escreva um programa (A `Classe` se chamará Balada) onde você questiona ao usuário com a `Scanner` duas perguntas numéricas sequenciais simples no terminal `System.out`:
*"1. Digite a sua Idade atual:"*.
*"2. Digite quantos R$ Reais você tem pra gastar de VIP hoje:"*.
Após o usuário preencher e você salvar nas variáveis, monte o bloco de decisão: 

Se ele tiver **MAIS QUE 18 OU EXATAMENTE 18 Anos** `( >= )`, **E TAMBÉM (&&)** tiver de VIP **50 reais ou mais**, libere a entrada batendo um belo aprovado azul.
Senão? Imprima o erro com humilhação por ser menor ou pobre na porta.

---

### Desafio 2: A Bomba Relógio (Laço `FOR`)
Lembra quando o professor quebra a cabeça pra ensinar `for`? Faça um for mais destrutivo possível:
Ele será um contador que começa com a origem na marca temporal de `10`.
O limite onde deve falsear? Zero absoluto `( > 0)`.
Passo do contador: em vez de subir `i++`, desceremos destruindo o contador a cada giro negativo `(i--)`.

No miolo da máquina exiba o Print (`"Bomba explodirá em: " + i`). 
**Dificuldade Mestre:** Ao a máquina rodar pra fora das chaves do falso zerar, dispare a string na tela vazia vermelha `"KABOOOM - O tempo finalizou!"`.
*Dica para tentar impressionar: Pesquise no Google como funciona um código de Thread sleep simples de Java `Thread.sleep(1000)` englobado pra botar o For girando de 1 em 1s assustando as pessoas.*

---

### Desafio 3: O Jogo do Adivinho Impossível (Laço `While` Infinito)
Uma `Scanner` puxará o que o usuário escolher no chute.
Nós declaramos nossa variável constante `final int SEGREDO = 42`.
Monte numa máquina de verificação **While**, com uma cascata de "Avisos Dicas". 
*   **Enquanto** The User input `!=` for falso / The numero secreto, a maquina:
1. Pede o imput pelo escaneio e atribul nas var `String` pra ler. If(input)  > SEGREDO (O pc grita *"ERROU LONGE! Dica: Você chutou algo maior que isso ai, amigo."*). If(input) < SEGREDO (Ele avisa *"Ta Frio e muito Baixo"*) . Else (Se achar) ele usa o the `break;` do Cap9 pra estourar o escopo, quebra tudo pulando pro lado de fora do caput das chaves parabenizando o Player e encerrando a scanner com a frase *"Você Achou! FIM DE JOGO"*.

---

Terminou essas trincas da loucura sem erros graves de chave e compilações, subindo seu nivel na mão livre e provando pra máquina o seu valor? 
Avise o Assistente botando pra quebrar na Phase de Vetores Avançados, Arrays Matrizes Bidimensionais, Strings Regex e Funções da **PARTE 3!** 🏆.

## Minhas Anotações
- 
