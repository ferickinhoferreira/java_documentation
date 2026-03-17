# Capítulo 4: Funções e Métodos (Criando funções em Java)

## Por que criar Funções (Métodos)?
Até agora, nós escrevemos todo o nosso código Java espremido dentro de um único bloco chamado `public static void main`.
Isso funciona para programas de 20 linhas. Mas e se o seu sistema tiver 5.000 linhas? O código vai virar um "código espaguete": impossível de ler e de dar manutenção.

Além disso, imagine que você precise calcular o Imposto em 10 lugares diferentes do seu programa. Você vai copiar e colar a mesma conta 10 vezes? Não! 
Se a lei do imposto mudar amanhã, você terá que caçar as 10 contas espalhadas pelo código para atualizar.

A solução profissional para isso é **criar suas próprias Funções (que no Java chamamos de Métodos)**.
Um método é um bloco de código que tem um "Nome", recebe alguns ingredientes, faz um trabalho específico e (às vezes) te devolve um resultado.

## Anatomia de um Método

Todo método no Java tem 4 partes principais na sua assinatura:
1.  **Modificador de Acesso**: Quem pode ver esse método? (`public` = todos, `private` = só a própria classe).
2.  **O que ele devolve? (Retorno)**: Se ele não devolve nada, usamos a palavra `void` (vazio). Se ele faz uma conta e devolve um número, usamos `int` ou `double`.
3.  **Nome do Método**: O nome da ação (padrão camelCase, quase sempre um verbo no infinitivo).
4.  **Parâmetros (Ingredientes)**: Uma lista dentro dos parênteses `()` do que ele precisa receber de fora para funcionar.

### Exemplo: O Método que não retorna nada (`void`)

```java
public class Saudador {

    // Nosso novo Método! (Fica FORA do main, mas DENTRO da classe)
    public static void darBoasVindas() {
        System.out.println("-------------------------");
        System.out.println("Bem-vindo ao Sistema XPTO");
        System.out.println("-------------------------");
    }

    // O Main é de onde o Java começa a rodar o programa
    public static void main(String[] args) {
        
        System.out.println("Iniciando programa...");
        
        // Chamando (executando) o método! Nós "invocamos" ele pelo nome + parênteses.
        darBoasVindas(); 
        
        System.out.println("Acesso liberado. Processando...");
        
        // Posso chamar quantas vezes eu quiser sem precisar reescrever os prints!
        darBoasVindas();
    }
}
```

> **Por que o `static`?**
> Neste momento do curso, faremos nossos métodos acompanhados da palavra `static`. 
> Explicaremos a fundo o porquê na Orientação a Objetos, mas o resumo é: como o nosso `main` é estático, ele só consegue enxergar e chamar "irmãos" que também sejam estáticos na mesma classe!

No próximo capítulo, veremos a verdadeira força dos métodos: quando eles recebem dados e devolvem resultados matemáticos!

## Minhas Anotações
- 
