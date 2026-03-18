# Design Patterns: Padrões de Projeto

Design Patterns são soluções generalizadas para problemas comuns que encontramos no dia a dia da programação. Eles são como "receitas de bolo" testadas por décadas.

Existem dezenas, mas vamos focar nos 4 que você **vai** encontrar toda semana em Java.

---

## 1. Singleton
Garante que uma classe tenha **apenas uma única instância** em todo o sistema.
**Onde usamos?** Configurações do sistema, Gerenciadores de conexão com banco de dados ou Logs.

```java
public class Configuracao {
    private static Configuracao instance;

    private Configuracao() {} // Construtor privado: ninguém dá 'new' de fora!

    public static Configuracao getInstance() {
        if (instance == null) {
            instance = new Configuracao();
        }
        return instance;
    }
}
```

---

## 2. Strategy
Permite trocar o algoritmo usado em tempo de execução.
**Onde usamos?** Cálculo de frete (Sedex, Loggi, Motoboy), Meios de pagamento.

```java
public interface Frete {
    double calcular(double peso);
}

public class FreteExpresso implements Frete { ... }
public class FreteComum implements Frete { ... }

// No código:
Frete freteEscolhido = (clienteVIP) ? new FreteExpresso() : new FreteComum();
calculadora.processar(freteEscolhido);
```

---

## 3. Builder
Ajuda a criar objetos complexos passo a passo, evitando construtores com 15 parâmetros.
**Onde usamos?** Quase em todos os lugares. O Lombok já faz isso pra você com o `@Builder`.

```java
Usuario u = Usuario.builder()
    .nome("Feric")
    .email("feric@email.com")
    .idade(25)
    .vip(true)
    .build();
```

---

## 4. Factory (Fábrica)
Centraliza a criação de objetos. Você pede "me dê um objeto do tipo X" e a fábrica decide qual classe concreta instanciar.

```java
public class NotificacaoFactory {
    public static Notificacao criar(String tipo) {
        if (tipo.equals("SMS")) return new SmsNotificacao();
        if (tipo.equals("EMAIL")) return new EmailNotificacao();
        throw new IllegalArgumentException();
    }
}
```

---

## 5. Observer
Um objeto avisa outros objetos quando seu estado muda.
**Onde usamos?** Interfaces gráficas (botões avisando que foram clicados), Mensageria (Kafka/RabbitMQ).

### Conclusão
Não tente decorar todos os padrões agora. O importante é entender que **se você está enfrentando um problema de design, alguém provavelmente já resolveu e deu um nome para isso**. Quando sentir que seu código está ficando difícil de organizar, pesquise: "Qual design pattern resolve X?".
