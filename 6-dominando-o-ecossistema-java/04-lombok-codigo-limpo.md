# Lombok: Adeus ao Código Repetitivo

## O Problema do "Boilerplate"
Java é famoso (ou infame) por exigir muito código repetitivo. Para uma classe simples de `Usuario`, você precisaria escrever:
1. Atributos.
2. Construtor vazio.
3. Construtor com todos os campos.
4. Getters para todos os campos.
5. Setters para todos os campos.
6. Método `equals()` e `hashCode()`.
7. Método `toString()`.

Isso resulta em 100 linhas de código para algo que deveria ter 5.

## A Solução: Project Lombok
O **Lombok** é uma biblioteca que usa **Anotações** para gerar todo esse código para você em tempo de compilação. Seu arquivo `.java` fica limpo, mas o `.class` gerado tem tudo o que é preciso.

## Exemplos de Anotações

### 1. O Jeito Lombok
```java
import lombok.*;

@Getter // Gera todos os getters
@Setter // Gera todos os setters
@NoArgsConstructor // Construtor sem argumentos
@AllArgsConstructor // Construtor com todos os campos
@ToString // Gera um toString bonito
@EqualsAndHashCode // Gera equals e hashCode
public class Produto {
    private Long id;
    private String nome;
    private Double preco;
}
```

### 2. O Jeito "Super Prático": `@Data`
A anotação `@Data` é um combo que inclui `@Getter`, `@Setter`, `@ToString`, `@EqualsAndHashCode` e `@RequiredArgsConstructor` de uma vez só!

```java
@Data
public class Cliente {
    private String cpf;
    private String nome;
}
```

### 3. Objetos Imutáveis com `@Value` e `@Builder`
No desenvolvimento moderno, amamos objetos que não mudam. O `@Builder` permite criar objetos de forma muito legível:

```java
@Value // Torna tudo private final e gera apenas Getters
@Builder
public class Pedido {
    String codigo;
    Double valor;
}

// Uso do Builder:
Pedido p = Pedido.builder()
            .codigo("ABC-123")
            .valor(150.0)
            .build();
```

## Como Instalar?
Como o Lombok mexe no compilador, você precisa:
1. Adicionar a dependência no `pom.xml` ou `build.gradle`.
2. **Instalar o Plugin do Lombok** na sua IDE (IntelliJ ou VS Code). Sem o plugin, a IDE vai marcar erro dizendo que os getters não existem.

O Lombok é usado em quase **100% dos projetos Spring Boot profissionais**. Ele economiza tempo, evita erros de digitação e deixa o foco no que importa: a lógica de negócio.
