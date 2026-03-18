# Introdução ao Spring Boot

O **Spring Boot** é a ferramenta mais importante para qualquer desenvolvedor Java moderno. Ele é um framework que facilita absurdamente a criação de aplicações Java que "simplesmente funcionam".

## 1. Por que o Spring Boot é o Rei?
Antigamente, configurar um projeto Java para a Web era um pesadelo: você precisava configurar servidores (Tomcat), arquivos XML gigantescos e dezenas de bibliotecas manualmente.

O Spring Boot resolve isso com:
1. **Auto-configuração:** Ele olha para o seu projeto e configura o que falta sozinho.
2. **Servidor Embutido:** Você não instala nada. O servidor roda dentro do seu código.
3. **Opinionated:** Ele já vem com as melhores decisões de mercado tomadas por você.

## 2. A Magia das Anotações
No Spring, você "assina" suas classes com anotações (`@`) para dizer ao Java o que elas devem fazer.

- `@SpringBootApplication`: A porta de entrada do sistema.
- `@RestController`: Diz que esta classe vai responder a chamadas da internet (URLs).
- `@GetMapping`: Diz qual endereço (rota) dispara o método.

## 3. Seu Primeiro "Olá Mundo" Web

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class MinhaPrimeiraApi {

    public static void main(String[] args) {
        SpringApplication.run(MinhaPrimeiraApi.class, args);
    }

    @GetMapping("/ola")
    public String dizerOla() {
        return "Olá, Feric! Seu servidor Spring está rodando! 🚀";
    }
}
```

## 4. Injeção de Dependência (IoC)
Essa é a "Cérebro" do Spring. Você não dá `new` nas suas classes de serviço. Você pede para o Spring:
"Ei Spring, eu preciso de um `UsuarioService` aqui!"
E o Spring coloca o objeto pronto lá usando a anotação `@Autowired`.

## Como começar um projeto?
O jeito profissional é usar o site [start.spring.io](https://start.spring.io). Lá você escolhe:
- Project: **Maven**
- Version: **Java 17 ou 21**
- Dependencies: **Spring Web**, **Lombok** e **Spring Boot DevTools**.

O Spring Boot é o que separa quem "estuda Java" de quem "trabalha com Java". Quase todas as vagas de backend hoje pedem isso. ☕🔥
