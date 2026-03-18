# JUnit: A Segurança dos Testes Unitários

Um programador Java sênior não diz "eu acho que meu código funciona". Ele roda os testes e **prova** que funciona. O framework padrão para isso é o **JUnit 5 (Jupiter)**.

## 1. O que é um Teste Unitário?
É um pequeno pedaço de código que testa a menor unidade possível do seu sistema (geralmente um método de uma classe), de forma isolada.

O objetivo é garantir que, se você mudar algo no futuro, você não quebre o que já estava funcionando (**Teste de Regressão**).

## 2. Estrutura de um Teste JUnit

Imagine que temos uma classe `Calculadora`:
```java
public class Calculadora {
    public int somar(int a, int b) {
        return a + b;
    }
}
```

### Criando o Teste
```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*; // Importante!

class CalculadoraTest {

    @Test // Diz ao JUnit que este método é um teste
    void deveriaSomarDoisNumerosPositivos() {
        // 1. Cenário (Given)
        Calculadora calc = new Calculadora();

        // 2. Ação (When)
        int resultado = calc.somar(10, 5);

        // 3. Verificação (Then) - O "Asserto"
        assertEquals(15, resultado, "A soma de 10 + 5 deveria ser 15");
    }
}
```

## 3. As principais "Assertions" (Afirmações)
São os métodos que verificam se o resultado é o esperado:
- `assertEquals(esperado, atual)`: Verifica se são iguais.
- `assertTrue(condicao)`: Verifica se é verdadeiro.
- `assertNotNull(objeto)`: Verifica se o objeto foi criado.
- `assertThrows(Excecao.class, () -> lógica)`: Verifica se o código lança o erro correto.

## 4. Ciclo de Vida dos Testes
- `@BeforeEach`: Roda antes de CADA teste (ótimo para limpar dados ou iniciar objetos).
- `@AfterEach`: Roda depois de cada teste.
- `@BeforeAll` / `@AfterAll`: Roda uma única vez para a classe inteira (precisa ser static).

## 5. Por que testar é vital?
1. **Confiança:** Você pode refatorar o código sem medo.
2. **Documentação:** O teste explica o que o método deveria fazer.
3. **Economia:** É muito mais barato achar um erro no teste do que com o sistema já rodando em produção.

Dica: No mundo real, buscamos uma **Cobertura de Testes** de pelo menos 80% do código. Se você quer trabalhar em grandes empresas, JUnit é um requisito obrigatório.
