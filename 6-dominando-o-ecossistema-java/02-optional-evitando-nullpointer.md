# Optional: Evitando o NullPointerException

## O Pesadelo do "Null"
Sir Tony Hoare, o criador da referência nula, chamou o `null` de seu "erro de um bilhão de dólares". Em Java, tentar acessar um método de um objeto que é `null` causa o famoso e temido `NullPointerException` (NPE).

Para resolver isso de forma elegante, o Java 8 introduziu a classe **`Optional<T>`**.

## O que é um Optional?
O `Optional` é um "contêiner" que pode ou não conter um valor não nulo. Em vez de retornar `null` (o que obriga quem chama a fazer um `if (obj != null)`), você retorna um `Optional`.

## Como Usar o Optional

### 1. Criando um Optional
```java
Optional<String> vazio = Optional.empty();
Optional<String> comValor = Optional.of("Java");
Optional<String> podeSerNull = Optional.ofNullable(variavelQuePodeSerNull);
```

### 2. Verificando e Extraindo (O jeito antigo x O jeito Moderno)

**Jeito Errado (Continua feio):**
```java
if (meuOptional.isPresent()) {
    System.out.println(meuOptional.get());
}
```

**Jeito Moderno e Funcional (Recomendado):**
```java
// Se tiver valor, imprima. Se não, não faça nada.
meuOptional.ifPresent(System.out::println);

// Retorne o valor ou um padrão se estiver vazio
String nome = meuOptional.orElse("Convidado");

// Lance uma exceção personalizada se estiver vazio
String dados = meuOptional.orElseThrow(() -> new RuntimeException("Dados não encontrados"));
```

## Exemplo Real em busca de BD

Imagine que você busca um usuário pelo ID. Ele pode existir ou não.

```java
public Optional<Usuario> buscarUsuario(int id) {
    if (id == 1) return Optional.of(new Usuario("Feric"));
    return Optional.empty();
}

// No código de quem usa:
buscarUsuario(5)
    .map(Usuario::getNome)
    .ifPresent(nome -> System.out.println("Usuário encontrado: " + nome));
```

## Boas Práticas
- **Não use Optional em atributos de classe** ou parâmetros de métodos (use principalmente em **retornos** de funções).
- O objetivo é deixar claro para quem chama a função que o resultado pode ser vazio.
- Evite usar `.get()` sem verificar antes se há valor (isso lança exceção do mesmo jeito!). Use `orElse`.

O Optional torna seu código muito mais resiliente e "defensivo", evitando que o sistema quebre por bobeira. Dominar isso é essencial para trabalhar com **Streams API** e frameworks modernos.
