# Capítulo 4: if, else if e else (Testando múltiplas condições)

## Quando o mundo não é preto e branco
No capítulo passado, aprendemos que o `if / else` só lida com caminhos bipolares: Uma única opção, e "todas as outras coisas". Mas na vida real dos algoritmos, nós muitas vezes precisamos testar **várias condições diferentes em cascata**.

Por exemplo:
Como classificar os alunos do capítulo 3 se tivermos o caso de Recuperação? (Notas entre 5 e 6.9 vão para a recuperação e menos que 5 é reprovado direto).
Para isso, usamos a cascata contínua chamada de **`else if`** (Senão se).

## A Cascata Lógica

Assim que o Java encontra uma condição verdadeira de cima para baixo na "escadinha", ele executa aquele bloco específico e **ignora completamente** todo o resto do bloco que vem depois. Ele jamais vai entrar em dois `ifs` da mesma escada.

Exemplo na prática do sistema escolar com 3 caminhos e operadores avançados (Lógicos e Relacionais juntos):

```java
public class AvaliacaoMultipla {
    
    public static void main(String[] args) {
        
        double notaFinal = 5.5;
        
        // Primeiro degrau: É maior ou igual a 7?
        if (notaFinal >= 7.0) {
            
            System.out.println("Resultado: APROVADO! BOAS FÉRIAS!");
            
        // O Java só chega nesta linha se a nota for menor que 7! (Ou seja, o primeiro IF falhou).
        // Segundo degrau: A nota é maior ou igual a 5 E também é menor que 7?
        } else if (notaFinal >= 5.0 && notaFinal < 7.0) {
            
            System.out.println("Resultado: EM RECUPERAÇÃO. Procure a secretaria.");
            
        // O ELSE sempre deve ser o último de tudo. Ele captura o que sobrar de todas as tentativas falhas acima.
        } else {
            
            System.out.println("Resultado: REPROVADO DIRETAMENTE.");
            
        }
    }
}
```

## Dicas Importantes (Boas Práticas e Arquitetura)
*   **Ordem importa e muito!** Se você usar as lógicas de testar maior e menor fora de ordem na escada, você pode colocar dados importantes em "buracos negros". Avalie logicamente primeiro a exceção e depois vá descendo.
*   Você pode usar quantos blocos de `else if` você quiser na sua escada. Não há limite (Embora se você escrever 20 `else if` grudadinhos, talvez algo esteja bem desorganizado e devêssemos usar outro recurso na próxima aula!).
*   Você não é obrigado a usar um `else` absoluto no final se não quiser. Às vezes, se ninguém combinar com a condição você só quer que nada aconteça.

## Minhas Anotações
- 
