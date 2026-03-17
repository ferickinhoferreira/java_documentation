# Capítulo 3: Laços Aprimorados - for-each

## Uma evolução de conforto
Nos capítulos anteriores nós usamos as engrenagens de contagem do `for` tradicional `(int i = 0; i < tamanho; i++)`. 
Esse laço clássico é ótimo, pois com ele nós temos controle **absoluto** do índice: podemos pular a casa número 3, podemos ler o vetor de trás pra frente (`i--`), etc.

No entanto, em 90% das vezes que você for trabalhar no mercado, o que você fará será apenas *"varrer a lista (ou array) do começo ao fim, pegando cada dado dentro dela e imprimindo ou alterando"*.

Para isso o Java nos deu uma sintaxe mastigada linda: O laço aprimorado chamado carinhosamente de **`for-each`** (Para cada).

### A Diferença na Sintaxe Visual:

Como pegar todos os alunos num Array ou num ArrayList:

```java
List<String> listaDeAlunos = new ArrayList<>();
listaDeAlunos.add("Arthur");
listaDeAlunos.add("Bruna");
listaDeAlunos.add("Carlos");

// O JEITO ANTIGO E COMPLICADO (Risco de errar o tamanho com .size() )
for (int i = 0; i < listaDeAlunos.size(); i++) {
    String nome = listaDeAlunos.get(i);
    System.out.println("Buscando pelo jeito antigo: " + nome);
}

System.out.println("----------");

// === O JEITO FOR-EACH ELEGANTE ===
// Lê-se: "PARA CADA String 'alunoAtual' CONTIDA DENTRO DA 'listaDeAlunos' -> FAÇA ISSO: "
for (String alunoAtual : listaDeAlunos) {
    
    System.out.println("Buscando pelo for-each: " + alunoAtual);
    
}
```

Esqueça `i++` e as pontuações e limites! 
A mágica da pontuação dos dois-pontos `:` no miolo é que o Java toma a frente do seu volante. Ele conta o tamanho sozinho, cria a variável que carrega o texto perfeitamente, aponta o carrinho no índice `0` e vai descendo automático até a o fim da trilha, e aí desliga o laço!

## Quando NÃO usar o For-Each
O perigo do for aprimorado é a falta de controle granular. Como o Java quem está segurando o volante por debaixo dos panos:
1.  **Não dá pra ir de trás pra frente**: O For-each só e unicamente vai lendo da posição Zero em diante sem voltar atrás.
2.  **Não dá saber em que "posição" ou index eu estou agora**: Se você quiser imprimir *"Este é o Produto da prateleira 03"*, no For-Each você não tem acesso à variável `i=3` para colocar no Print.
3.  **Não posso remover um item enquanto leio!**: Tentar remover um item de um `ArrayList` na exata hora que o for-each está lendo ele dispara um erro cabuloso chamado `ConcurrentModificationException` e quebra seu servidor. O for-each enlouquece porque você tirou o chão logo quando ele ia ver o tamanho.

Fora essas exceções muito exatas, use e abuse do `for( : )` nos seus códigos limpos!

## Minhas Anotações
- 
