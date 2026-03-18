# Capítulo 11: Operador Ternário e Condicionais Avançadas

## O “if” de uma linha só (muito amado em entrevistas)

```java
int idade = 18;
String mensagem = (idade >= 18) ? "Pode dirigir" : "Não pode";

// Equivalente a:
if (idade >= 18) {
    mensagem = "Pode dirigir";
} else {
    mensagem = "Não pode";
}
```

## Quando usar e quando NÃO usar
✅ **Usar:** Atribuições simples, mensagens rápidas, retornos de métodos.
❌ **Não usar:** Lógicas complexas com 3+ condições (fica ilegível).

### Condicional em cascata com ternário (Java 8+)
```java
String status = (nota >= 7) ? "Aprovado" : (nota >= 5) ? "Recuperação" : "Reprovado";
```

## Minhas Anotações
- 
