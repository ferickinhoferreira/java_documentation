# Capítulo 3: Estruturas de Decisão: if e else

## Ensinando o Programa a Trilhar Caminhos
Bem-vindo a um dos recursos mais essenciais não só do Java, mas de **qualquer** linguagem de programação do universo.
Sem as estruturas de decisão, os programas seriam sempre um "trem sem freio", rodando da linha 1 até o final e fazendo a exata mesma coisa todas as vezes. 

Com a estrutura de decisão **`if` e `else`** (Se / Senão), o nosso programa cria ramificações lógicas dependendo das condições (os operadores lógicos que aprendemos no capítulo passado!).

## A Sintaxe Básica (Como escrever)

Tudo gira em torno da palavra em inglês `if` (que significa "Se").

```java
// O que estiver dentro do parênteses () do IF deve OBRIGATORIAMENTE resultar em um 'boolean' (true ou false)
if (condicaoVerdadeira) {
    // Se for verdadeiro, o Java vai ENTRAR aqui dentro das chaves {} e rodar esse bloco de código.
} else {
    // Se a primeira condição for FALSA, o Java PULA o bloco do if e entra no bloco ELSE.
}
```

## Exemplo Real: Banco de Dados de Alunos
Imagine que você foi contratado para fazer um script que avalia automaticamente as notas dos alunos e avisa a diretoria se eles passaram ou reprovaram. A regra é: Nota maior ou igual a 7,0 está aprovado.

```java
import java.util.Scanner;

public class AvaliacaoEscolar {
    
    public static void main(String[] args) {
        
        Scanner leitor = new Scanner(System.in);
        System.out.println("Por favor, professor, digite a nota final do aluno:");
        
        // Recebe o dado do usuário
        double notaFinal = leitor.nextDouble();
        
        // O CÉREBRO DO SISTEMA
        if (notaFinal >= 7.0) {
            // Caminho 1: Condição verdadeira
            System.out.println("Resultado: APROVADO! O aluno teve um ótimo desempenho.");
        } else {
            // Caminho 2: Condição Falsa
            System.out.println("Resultado: REPROVADO. É necessário estudar mais o conteúdo.");
        }
        
        // A linha abaixo roda independente de qual caminho o Java tomou ali em cima!
        System.out.println("Sistema de notas encerrado.");
        leitor.close();
    }
}
```

> **Atenção:** Se o código dentro do bloco `{ }` tiver apenas **uma única linha**, o Java permite que você não use as chaves. Mas como uma **Boa Prática Clean Code**, recomenda-se SEMPRE colocar as chaves `{ }`, mesmo que seja só uma linha, pois no futuro você ou outra pessoa podem acabar digitando coisas fora da ordem e gerar bugs perigosos e invisíveis nas decisões.

## Resumo Rápido
- **`if (A > B)`**: Se A for maior que B, execute esse bloco.
- **`else`**: Caso contrário (Seja lá qual motivo foi pro if ser falso), execute esse outro aqui irrevogavelmente.

## Minhas Anotações
- 
