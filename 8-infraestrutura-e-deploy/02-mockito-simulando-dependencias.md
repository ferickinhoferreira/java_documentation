# Mockito: Simulando Dependências

Nos **Testes Unitários**, nós queremos testar uma ÚNICA classe. Mas uma classe nunca está sozinha. Ela depende de um Banco de Dados, de um Serviço de E-mail ou de uma API externa.

Se o banco cair, seu teste não deve falhar (pois o erro não é no seu código, mas na infraestrutura). É aí que entra o **Mockito**.

## 1. O que é um "Mock"?
Um Mock é um "Duble de Filme". É um objeto de mentirinha que finge ser o banco de dados. Você diz pra ele:
"Ei Mockito, se alguém te perguntar pelo usuário ID 1, diga que ele se chama 'Feric' e está ativo".

## 2. Configurando o Mockito

```java
import static org.mockito.Mockito.*;

public class UsuarioServiceTest {

    @Test
    void deveriaAcharUsuarioNoBanco() {
        // 1. Criamos um "Banco de Mentirinha"
        UsuarioRepository repoMock = mock(UsuarioRepository.class);

        // 2. Ensinamos o dublê (DADO que chamaram buscarId(1), ENTÃO retorne Feric)
        when(repoMock.buscarId(1)).thenReturn(new Usuario("Feric"));

        // 3. Injetamos o dublê no nosso serviço real
        UsuarioService service = new UsuarioService(repoMock);
        
        // 4. Testamos nossa lógica
        Usuario u = service.acharUsuario(1);
        
        assertEquals("Feric", u.getNome());
    }
}
```

## 3. Verificando o Comportamento
O Mockito não serve só para dar valores. Ele serve para saber se o seu código chamou os métodos certos!

"Teste se o meu sistema REALMENTE mandou o e-mail de boas-vindas pro usuário."

```java
// Verifica se o método enviarEmail foi chamado EXATAMENTE 1 vez
verify(emailServiceMock, times(1)).enviarEmail(anyString());
```

## 4. TDD: Test-Driven Development
É a técnica de escrever o **Teste ANTES do Código**.
1. **Red:** Escreva um teste que falha (porque o código nem existe).
2. **Green:** Escreva o código mínimo necessário para o teste passar.
3. **Refactor:** Melhore o código agora que ele tem um "seguro" (o teste).

O TDD garante que você não escreva código inútil e que tudo o que você criou está 100% testado.

## Resumo
- **JUnit:** O motor que roda os testes.
- **Mockito:** O criador de objetos de mentirinha (Mocks).
- **Verify:** Garante que as ordens foram dadas corretamente dentro do código.

Combinar JUnit + Mockito é a forma definitiva de garantir que seu backend Java seja indestrutível. 🧪🛡️🚀
