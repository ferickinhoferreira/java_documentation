# JSON com Jackson: Comunicação entre Sistemas

No desenvolvimento moderno, os sistemas raramente trabalham sozinhos. Eles conversam via internet enviando textos formatados. O formato mais usado no mundo hoje é o **JSON** (JavaScript Object Notation).

Em Java, a biblioteca "padrão de mercado" para transformar Objetos Java em JSON (e vice-versa) é o **Jackson**.

## 1. O que é Serialização e Desserialização?
- **Serialização:** Objeto Java → Texto JSON (para enviar para o frontend ou salvar no BD).
- **Desserialização:** Texto JSON → Objeto Java (para ler dados que vieram da internet).

## 2. Exemplo Prático

Imagine que temos a classe `Pessoa`:
```java
@Data
public class Pessoa {
    private String nome;
    private int idade;
}
```

### Usando o `ObjectMapper` do Jackson

```java
import com.fasterxml.jackson.databind.ObjectMapper;

public class TesteJson {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        
        // 1. Objeto para JSON (SERIALIZAÇÃO)
        Pessoa p = new Pessoa();
        p.setNome("Feric");
        p.setIdade(25);
        
        String json = mapper.writeValueAsString(p);
        System.out.println(json); 
        // Resultado: {"nome":"Feric","idade":25}

        // 2. JSON para Objeto (DESSERIALIZAÇÃO)
        String jsonInput = "{\"nome\":\"Ana\",\"idade\":30}";
        Pessoa p2 = mapper.readValue(jsonInput, Pessoa.class);
        
        System.out.println(p2.getNome()); // Ana
    }
}
```

## 3. Anotações Úteis do Jackson
Às vezes o nome no JSON é diferente do nome na sua classe Java.

- `@JsonProperty("user_name")`: Diz que no JSON o campo se chama "user_name", mas no Java é "nome".
- `@JsonIgnore`: Ignora o campo (ex: não envie a senha do usuário no JSON).
- `@JsonFormat(pattern = "dd/MM/yyyy")`: Formata datas automaticamente.

```java
public class Usuario {
    @JsonProperty("login")
    private String nomeUsuario;

    @JsonIgnore
    private String senha;
}
```

## Por que aprender Jackson?
Se você for criar uma **API REST com Spring Boot**, o Spring já vem com o Jackson configurado "debaixo do capô". Ele transforma seus objetos em JSON automaticamente antes de mandar para o navegador do usuário. Entender como ele funciona ajuda muito na hora de debugar erros de integração.
