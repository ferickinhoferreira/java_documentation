# Capítulo 2: Coleções em Java (ArrayList, HashMap e HashSet)

## O Fim das Listas Engessadas
No Capítulo 1 da Seção 3 você estudou os `Arrays []` puros. Lembrarei você do maior defeito neles: **Eles têm o tamanho Fixo e Engessado**.
Se você cria um Arrays de notas para 10 alunos num sistema real, e entra o 11º aluno matriculado na sexta-feira... o seu sistema arrebenta porque o gaveteiro não estica!

Para resolver isso de forma mágica, a Oracle (dona do Java) criou uma super biblioteca chamada **Collections Framework**.
O principal representante para Listas dinâmicas que crescem e engolem infinitos dados no mercado corporativo se chama **`ArrayList`**.

## 1. Listas que esticam: O `ArrayList`
O `ArrayList` é como uma gaveta sanfonada mágica. Você não precisa dizer o tamanho dela ao criar. Conforme você vai jogando itens nela com a função `.add()`, ela cresce. Conforme você remove itens, ela encolhe!

*Atenção à Sintaxe:* Como Listas são objetos avançados, elas não aceitam tipos primitivos "secos" (`int`, `double`). Elas exigem a versão "chique" das variáveis chamadas de Wrapper Classes (`Integer`, `Double`, `Boolean`).

```java
import java.util.ArrayList; // Tem que importar!
import java.util.List;

public class ListaDeMercado {
    public static void main(String[] args) {
        
        // Criando a lista expansível de Textos
        List<String> carrinho = new ArrayList<>();
        
        // 1. ADICIONANDO NA LISTA (Ela cresce dinamicamente)
        carrinho.add("Maçã");
        carrinho.add("Amaciante");
        carrinho.add("Pão de Forma");
        
        System.out.println("Itens no carrinho: " + carrinho.size()); // 3
        
        // 2. PEGANDO DO GAVETEIRO (Em vez de array[0], usamos get(0))
        System.out.println("Primeiro item: " + carrinho.get(0)); // Maçã
        
        // 3. REMOVENDO ITENS (A lista inteira se auto-remonta e o Pão vira a posição 1!)
        carrinho.remove("Amaciante"); 
        
        // Tem a palavra "Maçã" aí na lista extensa?
        boolean esqueciAMaca = carrinho.contains("Maçã");
    }
}
```

## 2. A Tabela Dicionário: O `HashMap`
Enquanto as Listas organizam os dados enfileirados por números `(0, 1, 2, 3...)`, o HashMap guarda os dados por **Chave e Valor**, igual um dicionário da vida real.
Se quiser achar o endereço do "Lucas", você procura pela *CHAVE:* "Lucas", e ele te devolve o *VALOR:* "Rua das Flores".

```java
import java.util.HashMap;
import java.util.Map;

// Mapeando a String (Ex: "Lucas") para Integer (Ex: O Saldo do Lucas na Conta)
Map<String, Integer> saldosBanco = new HashMap<>();

// Adicionando valores pelo método .put()
saldosBanco.put("Lucas", 5000);
saldosBanco.put("Maria", 12500);

// A grande vantagem do HashMap é a busca ultrarrápida.
// Você não precisa girar um "FOR" de mil repetições para achar o saldo da Maria. 
// Você aponta um sniper na Chave e pega na mesma hora:
System.out.println("Saldo da Maria: " + saldosBanco.get("Maria")); // 12500
```

## 3. O Evitador de Clones: O `HashSet`
Você está adicionando uma base de e-mails vazada de leads. Porém, há 50.000 e-mails repetidos no meio da base de texto. Você quer filtrar isso antes de salvar no banco de dados.

O `HashSet` é uma coleção maluca: A regra fundamental dele é **NUNCA DEIXAR ENTRAR UM VALOR REPETIDO**.
Se ele ver dois iguais, ele só guarda o primeiro e ignora invisivelmente todos os clones a seguir!

```java
import java.util.HashSet;
import java.util.Set;

Set<String> emails = new HashSet<>();
emails.add("lucas@em.com");
emails.add("maria@em.com");

// Tentativa de invasão do clone!
emails.add("lucas@em.com"); 

// O HashSet vai rir da sua cara. O tamanho do total dele continuará sendo apenas DUAS pessoas!
```

Para currículo e entrevistas técnicas de Back-End as Collections são inegociáveis. Treine os métodos do `ArrayList` exaustivamente na sua IDE!

## Minhas Anotações
- 
