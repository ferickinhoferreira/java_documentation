# Capítulo 2: Design Patterns (Padrões de Projeto)

> **Neste capítulo:** Aprenda os padrões mais usados no mercado para escrever código elegante, reutilizável e profissional.

---

## 🧩 O Que São Design Patterns?

Design Patterns (Padrões de Projeto) são **soluções comprovadas** para problemas que aparecem repetidamente no desenvolvimento de software. São como receitas testadas por milhares de programadores ao longo de décadas.

Você não precisa reinventar a roda toda vez que precisa resolver um problema comum — basta aplicar o padrão correto.

---

## 🏭 1. Singleton — "Só Pode Haver Um"

O Singleton garante que uma classe tenha **apenas UMA instância** em todo o programa.

**Quando usar:** Conexão com banco de dados, configurações do sistema, logger.

```java
public class Configuracao {
    private static Configuracao instancia;

    private Configuracao() {} // Construtor privado! Ninguém cria de fora.

    public static Configuracao getInstancia() {
        if (instancia == null) {
            instancia = new Configuracao();
        }
        return instancia;
    }
}
```

---

## 🏗️ 2. Factory — "A Fábrica de Objetos"

O Factory cria objetos **sem expor a lógica de criação** ao cliente.

```java
public class AnimalFactory {
    public static Animal criar(String tipo) {
        if (tipo.equals("cachorro")) return new Cachorro();
        if (tipo.equals("gato")) return new Gato();
        throw new IllegalArgumentException("Animal desconhecido");
    }
}
```

---

## 👀 3. Observer — "Me Avisa Quando Mudar"

Usado em sistemas de notificação: quando algo muda, todos os "assinantes" são avisados.

**Exemplo real:** YouTube — quando um canal posta um vídeo, todos os inscritos recebem notificação.

---

> **Este capítulo será expandido conforme você avançar.** Por enquanto, foque em entender Singleton e Factory — os mais cobrados em entrevistas.

## Minhas Anotações
- 
