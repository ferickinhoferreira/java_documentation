# Capítulo 10: Exercícios Práticos - Parte 2

## A Certificação da Força 🎓 🚀

Encerramos a trilha final do treinamento Full-Back-End para fundar as bases de um programador Júnior perante os pregos enferrujados das Coleções, Datas, Arquivos malucos, Logs e APIs Stream. Você precisará se testar em projetos contendo Arrays que Esticam.

Vamos juntar todos os cacos num liquidificador gigantesco? Crie a Classe `ProjetoFinalTerminal` e rache a mente pra forjar o sistema.

### Desafio Prático Máster 1: A Loteria Stream. (Arraylist + Randomização + Foreach)

Faça nosso servidor gerar um Sorteio usando ArrayList para os participantes e Streams de Limpeza:
1. Monte um Menu numérico `Do While` usando a `Scanner`. ("1- Adicionar na Cesta" ... "2- Sortear 1 Ganhador!").
2. Caso 1 Menu: Peça ao admin que digite Nomes de Pessoas usando a Cesta elástica **`List<String> cestaDeCartelas = new ArrayList<>();`**. Usando o seu `.add(input)`. 
3. Quando o Menu Sair da adição (Ele apertar 2 pro Desafio Final de Girar a Roleta da Morte).
4. O sistema vai Pegar sua CestaLista... vai Peneirar pelo "Stream e Filter", e você vai fazer os Lambdas excluirem todos os nomes cadastrados na cesta que possuam *MAIS OU MENOS DO QUE 5 LETRAS* de limite ou tenham a palavra "Batman" no meio stringados. Remonte a lista e salve as pessoas puras no novo `RioFiltradoList`.
5. Por ultimo, calcule usando o **`Math.random`** da aula de matemática. O alvo limitador maximo da roleta Random tem que ser dinamico `* ( vezes o RioFiltradoList.size() !!!)`.  Guarde na variavel Sorteado.
6. Vá na NovaLista limpa no modo array, busque pelo Indice usando as garras do **`.get(Sorteado)`** e printe o Vencedor! 


### Desafio Menor (Dever de Casa de Gravação a Disco 💿)

Acha que está moleza? Monte uma função / Classe Método a parte (`public static void gravarTicket(String nomeGanhador)`).
Assim que o seu programa Printar o vencedor campeão, repasse ele pro seu método em envio de Parâmetros.
As garras do `Files.write(Paths)` precisarão jogar este nome vencedor que desceu pelos tubos pra ser Salvo no seu Desktop Windows no formato `.txt`.
Não esqueça o Try Catch pois o Windows odeia invasores na BIOS! Você não vai ver a cor azul no console e nem passará se pular a lei da Exceção IO.

--- 

Este foi todo o curso **Estrutural e Arquitetural Alura Like Base-Java!** Refaça as pastas e as notas, abra em Dark Mode este App Front das Aulas HTMLs e mergulhe em seus códigos por hora antes de entrar para as Fases Mentais em Entidades e Programação Orientada a Objetos (Classes, Heranças, Polimorfismos, Static e Beans)!

## Minhas Anotações
- 
