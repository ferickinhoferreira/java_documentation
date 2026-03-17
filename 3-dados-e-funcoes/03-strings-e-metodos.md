# Capítulo 3: Strings e Métodos Úteis

## Strings NÃO são tipos primitivos
Você reparou que nos Capítulos 8 da Parte 1, o tipo `int`, `double`, `boolean` e `char` são todos escritos com a letra minúscula e todos ficam **Laranjas ou Azuis (reservados)** na IDE do Intellij?

E a `String`, que usamos para guardar textos soltos ou frases, é com S Maiúsculo e não ganha essa cor de "Tipo Primitivo da Natureza"?

O motivo é que uma `String` por debaixo dos panos construída pela linguagem Java **é só um Array Gigante de `Chars` escondidos!**.
A palavra "JAVA" é, pro computador: `['J', 'A', 'V', 'A']`.
Sendo ela uma Classe (um Objeto Complexo disfarçado), o criador da linguagem nos deu **dezenas de super-poderes** já pré construídos dentro dela para usarmos no dia-a-dia.

## Os "Poderes" (Métodos de String) Mais Importantes do Mercado

Abaixo estão os 6 maiores feitiços prontos de manipulação de String que caem em todas as entrevistas técnicas para testar candidatos!

```java
public class TextosDivertidos {

    public static void main(String[] args) {
        
        String nomeCompleto = "     Lucas de Almeida Silva     ";
        String linguagem = "Java";
        
        // 1. .length() --> Mede o tamanho exato da String (Útil para saber se o cara digitou o CPF do tamanho certo!)
        int qtdLetras = linguagem.length(); 
        System.out.println("Tamanho de Java: " + qtdLetras); // 4
        
        // 2. .toUpperCase() e .toLowerCase() --> Força a barra para tudo virar MAIÚSCULO ou tudo minúsculo!
        System.out.println(linguagem.toUpperCase()); // "JAVA"
        
        // 3. .trim() --> Tira TODOS os espaços vazios do começo e do fim!!! (Essencial pra limpar cagadas e barra de espaços dadas pelo usuário no forms)
        String nomeLimpo = nomeCompleto.trim();
        System.out.println("Nome sem a sujeira de espaços vazios: " + nomeLimpo); // "Lucas de Almeida Silva"
        
        // 4. .contains() e .equals() --> Perguntas Vitais
        // Equals = Só responde Verdade se for 100% IDÊNTICO na virgula e upper case. (A == A)
        // Contains = Responde verdade se ele ACHAR a palavra no meio da bagunça do fraseado.
        boolean temSilvaNoNome = nomeLimpo.contains("Silva");
        System.out.println("O cara é da família Silva? " + temSilvaNoNome); // True
        
        // 5. .replace(alvo, substituto) --> Substitui letras ou blocos específicos inteiros (CTRL+H do Bloco de Notas).
        String relatorioOculto = nomeLimpo.replace("Lucas", "*****");
        System.out.println(relatorioOculto); // "***** de Almeida Silva"
        
        // 6. .split(Regra) --> A JOIA DA COROA! Ele PICA a sua string em pedacinhos usando a tesoura que você quiser e joga num Array []!
        String frutas = "maca,banana,morango,uva";
        
        // Estou avisando ao split: "Corte pra mim e crie uma gaveta no array toda vez que você ver uma vírgula"
        String[] gavetasDeFrutas = frutas.split(",");
        
        // Como testar? Com nosso velho amigo "laço For" ou acessando direto as gavetas do split
        System.out.println("A fruta de número 1: " + gavetasDeFrutas[1]); // "banana"
    }
}
```

Existem dezenas de outros (como o `.substring` para cortar partes de textos do meio pra trás) que você aprenderá aos trancos na internet.
O foco desse capítulo é te ensinar a NUNCA reinventar a roda! Tudo que é massante, de trocar letra, caixa alta, picotar por traços CPF; A String do Java **já tem tudo de fábrica nas mãos dela!**. É só tacar o `ponto.` depois do nome da variável na IDE e escolher o método milagroso!

## Minhas Anotações
- 
