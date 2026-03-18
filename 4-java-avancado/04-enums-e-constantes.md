# Capítulo 6: Enums e Constantes (Constantes tipadas)

## O Problema dos Códigos Mágicos
Vou te mostrar um dos piores códigos do mundo corporativo. Chamamos de *Números Mágicos* ou *Hard-coded strings*.

```java
public class Pedido {
    int id = 1250;
    // O que raio significa o status número 2?? 
    int statusDoPedido = 2; 

    // Alguém tenta olhar a lógica:
    if (statusDoPedido == 2) {
        System.out.println("Despachando mercadoria...");
    } else if (statusDoPedido == 3) {
        System.out.println("Erro na mercadoria cancelada");
    }
}
```

Se o código for gigante, daqui a 6 meses o programador que ler `if (status == 2)` vai perder os cabelos. Ah, tentou usar Textos `String` puros em vez de números (`"EM_ROTA"`)? Piorou.
Alguém da sua equipe vai chamar o botão e vai mandar salvar no BD assim: `"EM ROTA"`. Ou: `"emRota"`. Ou: `"em_rota_sp"`. Os bugs de consistências explodirão tudo.

Como resolvemos isso? Limitando as respostas a um pequeno grupo de coisas imutáveis e fixas!

## A Salvação `enum` (Enumeradores)

O **Enum** não é uma variável e nem uma classe comum. Ele é uma lista blindada de opções limitadíssimas que você dita como absolutas no começo do programa. O Java não aceitará nenhuma digitação diferentona fora dessa lista na hora de compilar no Windows.

### Criando nosso Dicionário Fixo (Geralmente criamos um aquivo Novo de Java pra ele só):
```java
// Em vez de "class", nós usamos a palavra reservada Enum.
// Por padrão as constantes vivem sempre TODAS EM MAIÚSCULAS fixas e juntas.
public enum StatusDoSistema {
    PAGAMENTO_APROVADO,
    ENVIADO_TRANSPORTADORA,
    EM_ROTA_DE_ENTREGA,
    MERCADORIA_CANCELADA;
}
```

### Aplicando a magia blindada no Código

```java
public class CarrinhoCompras {

    public static void main(String[] args) {

        // Várias variáveis sendo criadas referenciando as Listas (Elas só aceitam essas escolhas!)
        StatusDoSistema statusDeHoje = StatusDoSistema.PAGAMENTO_APROVADO;
        
        // Simulação do robo mudando o estado da encomenda:
        // A IDE NÃO VAI te deixar escrever erro de texto aqui, senão ela arrota defeito antes de apertar play.
        statusDeHoje = StatusDoSistema.EM_ROTA_DE_ENTREGA;
        
        System.out.println("Mudando o status atual na placa do galpão para: " + statusDeHoje);
        
        // Fazendo o Switch Case que vimos la tras com as chaves infinitas amadas (Sempre case puro):
        switch (statusDeHoje) {
            
            case PAGAMENTO_APROVADO:
                System.out.println("Começa a embalar pro ML!");
                break;
                
            case EM_ROTA_DE_ENTREGA:
                System.out.println("Manda zap pro cliente estar acordado no portão de casa amanhã as 9.");
                break;
                
            case MERCADORIA_CANCELADA:
                System.out.println("Devolve a etiqueta pro remetente");
                break;
        }

    }
}
```
Isso aumenta o que na programação Back-And chama de **Type-Safety** (Segurança Tipográfica Inflexível), removendo o uso do lixo da "stringly typed" - A mania horrível dos dev Javascripts ou Phps tentarem basear todas as escolhas de switchs usando digitações de banco de array.

## Minhas Anotações
- 
