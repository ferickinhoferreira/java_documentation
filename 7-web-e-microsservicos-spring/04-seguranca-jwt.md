# Segurança com Spring Security e JWT

Abrir um sistema para a internet sem segurança é pedir para ser hackeado. O **Spring Security** é a biblioteca padrão para proteger sua aplicação.

## 1. Autenticação vs Autorização
- **Autenticação:** "Quem é você?" (Login e Senha).
- **Autorização:** "O que você pode fazer?" (O usuário comum pode ver posts, mas só o Admin pode deletar).

## 2. O que é JWT (JSON Web Token)?
Em APIs modernas, não usamos "sessões" (o servidor não guarda quem está logado). Usamos um **Token**.
1. O usuário manda login/senha.
2. O Java valida e devolve um texto criptografado (Token).
3. Em todas as próximas chamadas, o usuário envia esse Token. O Java apenas o descriptografa para saber quem ele é.

## 3. Protegendo Rotas
Você pode dizer quais endereços são públicos e quais precisam de login:

```java
@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        return http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/publico/**").permitAll() // Livre
                .requestMatchers("/admin/**").hasRole("ADMIN") // Só pra chefes
                .anyRequest().authenticated() // O resto precisa de login
            )
            .build();
    }
}
```

## 4. Criptografia de Senhas
**NUNCA** salve senhas como texto puro no banco. Use o `BCrypt`:
```java
String senhaCripto = new BCryptPasswordEncoder().encode("123456");
```

Segurança é um tema complexo, mas o Spring Security torna o processo padronizado e robusto. Sem isso, você não cria sistemas para bancos, lojas ou redes sociais. 🔐🛡️
