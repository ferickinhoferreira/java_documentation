# Capítulo 4: Primeiro Programa: Olá, Mundo! (Criando Olá, Mundo! em Java)

## O famoso "Hello World"
Na programação, existe uma tradição sagrada: o primeiro programa que você faz em qualquer linguagem nova deve ser um comando para escrever "Olá, Mundo!" na tela. Diz a lenda que quem não faz isso, não aprende a linguagem! 😆

## A Estrutura Básica do Java
Diferente de linguagens como Python ou JavaScript, onde você pode simplesmente escrever `print("Olá")` na primeira linha e rodar, o **Java exige organização**. 

Para o Java, **tudo tem que estar dentro de uma Classe (Class)**. E a ação do programa tem que acontecer dentro de um **Método (Method)**.

Vamos olhar a estrutura mínima necessária para rodar um programa em Java:

```java
public class PrimeiroPrograma {

    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }
    
}
```

### Dissecando o código (O que cada palavra significa?):
Não se assuste com os termos estranhos agora, com o tempo isso vai ficar natural.

1. `public class PrimeiroPrograma`: 
   - `public`: Significa que essa classe é pública (visível para o sistema).
   - `class`: Define que estamos criando uma Classe (o molde do nosso programa).
   - `PrimeiroPrograma`: É o nome que escolhemos para o programa. **Regra de ouro do Java:** O nome do arquivo salvo no computador **TEM** que ser exatamente igual ao nome da classe pública (neste caso, `PrimeiroPrograma.java`). A primeira letra de cada palavra deve ser maiúscula (padrão PascalCase).

2. `public static void main(String[] args)`:
   - Este é o **Ponto de Entrada** (Entry Point) do Java. Toda vez que você mandar o Java rodar, ele vai procurar desesperadamente por esse método chamado `main`. Se ele não encontrar, o programa não roda. Decore essa linha, você vai escrevê-la milhares de vezes!
   - `void`: Significa que o método faz o trabalho dele e não devolve nenhuma resposta matemática no final.
   - `String[] args`: Usado para receber informações de fora quando rodamos o programa pelo terminal (vamos ignorar isso por enquanto, mas tem que estar aí).

3. `System.out.println("Olá, Mundo!");`:
   - Este é o comando que de fato faz a magia acontecer na tela!
   - `System.out`: Refere-se à saída padrão do sistema (normalmente a tela preta do terminal do seu computador).
   - `println`: Significa "Print Line" (Imprima uma linha). Ele escreve o texto e pula para a linha de baixo.
   - Os textos em Java sempre devem estar entre **aspas duplas** `" "`.
   - **Regra de ouro 2:** Quase toda instrução (ação) em Java **TEM que terminar com ponto e vírgula `;`**. Se esquecer, o programa não compila!

## Minhas Anotações
- 
