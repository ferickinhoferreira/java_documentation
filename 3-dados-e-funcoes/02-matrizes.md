# Capítulo 2: Matrizes (Trabalhando com matrizes)

## Vetores 2D e Tabelas
No capítulo passado, nós utilizamos os Vetores simples (Arrays) como um armário enfileirado horizontalmente. E se você precisar de Linhas E Colunas? 

Por exemplo: como armazenar um Tabuleiro de **Batalha Naval**, de **Jogo da Velha** ou um **Extrato do Excel** com 3 colunas (Data, Descrição, Valor) no Java?

Para isso nós usamos as **Matrizes**. Em Java, uma matriz nada mais é do que *um Array dentro de outro Array*.

## Criando a Matriz
Para avisar a JVM que queremos uma Matriz, nós usamos **dois pares de colchetes `[][]`**.
O primeiro colchete define a quantidade de **LINHAS**, enquanto o segundo define a quantidade de **COLUNAS**.

```java
// O tipo é int. Ela terá 3 Linhas e 3 Colunas (Ideal para Jogo da Velha ou Sudoku)
int[][] tabuleiro = new int[3][3];

// Acessando um quadrante específico do tabuleiro para marcar um "X" (Vamos supor que o X vale 1 e o O vale 2)
// O quadrante da ponta extrema superior esquerda é `linha 0, coluna 0`
tabuleiro[0][0] = 1;

// O quadrante do PIOR lugar do jogo da velha (O meio do tabuleiro)
tabuleiro[1][1] = 2; 

// E por aí vai...
```

### Array de Arrays (Preenchimento Prévio)
Talvez o jeito visual de se criar e preencher a matriz simultaneamente faça mais sentido pro seu cérebro:

```java
int[][] notasDosBimestres = {
    // Col  0    Col 1   Col 2   Col 3
    {       8,      7,      9,      6   },   // Linha 0 (Aluno 1)
    {       5,      5,      8,     10   },   // Linha 1 (Aluno 2)
    {       9,      9,      9,     10   }    // Linha 2 (Aluno 3)
};

System.out.println("Nota do Aluno 1 no 3º Bimestre: " + notasDosBimestres[0][2]); // Imprime 9
System.out.println("Nota do Aluno 2 no último Bimestre: " + notasDosBimestres[1][3]); // Imprime 10
```

## O Truque Jedi: Varrendo Matriz com o `FOR Aninhado`
Se para varrer (ler de ponta a ponta) um Array normal nós usamos 1 laço `for`...
Para varrer uma Matriz 2D inteirinha nós precisamos de **dois laços `for` (um dentro do outro)**!

O primeiro FOR viaja pelas linhas de "cima pra baixo". O segundo FOR viaja pelas colunas daquela linha específica "da esquerda pra direita".

```java
public class LeitorDeMatriz {

    public static void main(String[] args) {
        
        int[][] mapa = {
            { 1, 2, 3 },
            { 4, 5, 6 },
            { 7, 8, 9 }
        };
        
        // Loop Externo Cuidando das LATITUDES (Linhas).  
        // mapa.length -> retorna 3 (quantidade de linhas)
        for (int linha = 0; linha < mapa.length; linha++) {
            
            // Loop Interno Cuidando das LONGITUDES (Colunas).
            // Vai ler o tamanho interno das colunas DAQUELA LINHA específica
            for (int col = 0; col < mapa[linha].length; col++) {
                
                // Nós imprimimos os caras usando print() normal pra nao quebrar linha. E somamos um espaço " ".
                System.out.print(mapa[linha][col] + " ");
                
            }
            
            // Mas quando a linha acaba, ai nós damos um Enter pra começar a de baixo perfeitinha na tela!
            System.out.println(); 
        }
    }
}
```

O `for aninhado` (este truque doido de cima de meter uma engrenagem dentro da outra) vai bugar sua mente no início da faculdade de ADS.
É OBRIGATÓRIO que você abra sua IDE depois do capítulo com os Exercícios da Fase 3 e refaça isso pra entender como o Java viaja no mapa.

## Minhas Anotações
- 
