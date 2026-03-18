# Capítulo 1: Arrays - Vetores (Armazenando múltiplos valores)

## O Problema das Variáveis Simples
Imagine que você foi contratado para criar um sistema de notas para uma escola. Uma sala de aula tem 30 alunos.
Com o que aprendemos até agora, a sua única saída seria criar 30 variáveis diferentes:
```java
double notaAluno1 = 8.5;
double notaAluno2 = 7.0;
double notaAluno3 = 9.2;
// ... e assim por diante até o 30.
```
Isso é insustentável! E se a sala tiver 1.000 alunos? O código ficaria gigante e não daria para fazer um `for` para percorrer eles.

## A Solução: Arrays (Vetores)
Um Array é como um **Gaveteiro Gigante** ou uma caixa de ovos. Em vez de criarmos 30 caixinhas separadas na memória do computador, nós pedimos para o Java criar **1 Arquivo de Gavetas** com 30 divisórias.
Todas as divisórias guardam o MESMO tipo de dado (Nesse caso, `double`).

### Sintaxe Básica (Criando o Gaveteiro)

Para avisar o Java que você não quer uma variável comum, e sim um Gaveteiro, você coloca colchetes `[]` logo após o tipo de dado.

```java
// O número dentro do "new double[5]" diz EXATAMENTE quantas gavetas nós queremos criar na memória.
// Este Array nasce vazio (com zeros).
double[] notasDaSala = new double[5];

// Como eu guardo um valor dentro lá dentro? 
// ATENÇÃO: Na programação, nós sempre começamos a contar as coisas a partir do ZERO!
notasDaSala[0] = 8.5; // Gaveta número 0 (O 1º Aluno)
notasDaSala[1] = 7.0; // Gaveta número 1 (O 2º Aluno)
notasDaSala[2] = 9.2; // Gaveta número 2 (O 3º Aluno)
notasDaSala[3] = 4.5;
notasDaSala[4] = 10.0;

System.out.println("A nota do primeiro aluno foi: " + notasDaSala[0]);
```

### O Atalho (Gaveteiro que já nasce com itens)
Se você já sabe de antemão quais são as notas, você não precisa criar um Array vazio e preencher um por um. Você pode criá-lo já preenchido passando os dados com chaves `{ }`:

```java
// O Java já cria o Array com o tamanho exato de 5 posições e insere os dados.
double[] notasDaSala = { 8.5, 7.0, 9.2, 4.5, 10.0 };
```

## Percorrendo um Array com o `for`
Lembra que eu disse que o `for` é para quando sabemos o limite? Ele é o parceiro IDEAL para o Array!
Todo Array tem uma propriedade oculta muito poderosa chamada `.length` (comprimento / tamanho). Ela diz exatamente o tamanho daquele gaveteiro pra gente poder girar o for em cima dele:

```java
public class LeitorDeNotas {
    public static void main(String[] args) {
        
        double[] notas = { 8.5, 7.0, 9.2, 4.5, 10.0 };
        double somaGeral = 0;
        
        // i começa do "ZERO" porque as gavetas do Array começam do zero!
        // i vai até "notas.length - 1" (que é o tamanho do Array. Se o tamanho é 5, ele vai até o 4).
        for(int i = 0; i < notas.length; i++) {
        
            System.out.println("Lendo a nota da posição " + i + ": " + notas[i]);
            somaGeral += notas[i]; // Vai somando todas pra no fim saber a média
            
        }
        
        double media = somaGeral / notas.length;
        System.out.println("A média da turma foi: " + media);
    }
}
```

> ⚠️ **Atenção:** Em Java, um Array tem tamanho FIXO. Se você criou ele com `new int[5]`, ele vai ter tamanho 5 para sempre. Você não pode jogar um sexto aluno lá dentro. Se precisar de uma lista que cresce até o infinito, precisaremos ver *Collections (Listas)* na Parte 4!

## Minhas Anotações
- 
