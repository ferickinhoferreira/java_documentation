# Boas Práticas e SOLID

Escrever código que o computador entende é fácil. Escrever código que **outro ser humano** entende e consegue manter por anos é o que define um profissional.

Para isso, seguimos o acrônimo **SOLID**, criado por Robert C. Martin (Uncle Bob).

---

## S: Single Responsibility (Responsabilidade Única)
> "Uma classe deve ter apenas um motivo para mudar."

**Erro comum:** Uma classe `Usuario` que salva no banco, envia e-mail e valida CPF.
**Certo:** Tenha uma classe `Usuario`, uma `UsuarioRepository` (banco) e uma `EmailService`.

## O: Open/Closed (Aberto/Fechado)
> "Classes devem estar abertas para extensão, mas fechadas para modificação."

Se você precisa adicionar um novo tipo de desconto, não mude a classe `CalculadoraDeDesconto` adicionando mais um `if`. Use **Interfaces** ou **Herança** para criar novos descontos sem mexer no código que já funciona.

## L: Liskov Substitution (Substituição de Liskov)
> "Classes filhas devem poder substituir suas classes mães sem quebrar o sistema."

Se o seu código espera um `Funcionario`, ele deve funcionar perfeitamente se você passar um `Gerente` ou um `Estagiario`. Se o `Estagiario` lança um erro em um método que o `Funcionario` não lançava, você quebrou o Liskov.

## I: Interface Segregation (Segregação de Interface)
> "Muitas interfaces específicas são melhores do que uma interface genéricazona."

Não obrigue uma classe a implementar métodos que ela não vai usar. Em vez de uma interface `Atleta` (com correr, nadar, voar), crie `Corredor`, `Nadador` e `Voador`.

## D: Dependency Inversion (Inversão de Dependência)
> "Dependa de abstrações (Interfaces), não de implementações concretas."

Sua classe de `Pagamento` não deve depender da classe `CartaoVisa`. Ela deve depender da interface `MetodoPagamento`. Assim, se amanhã entrar o `Pix`, você não precisa mudar a classe de `Pagamento`.

---

## Outras Regras de Ouro (Clean Code)

1. **Nomes Significativos:** Evite `List l;`. Use `List<Usuario> listaUsuarios;`.
2. **Métodos Pequenos:** Se o seu método tem mais de 20 linhas, ele provavelmente faz coisas demais.
3. **Evite Comentários Óbvios:** O código deve ser tão limpo que se explica sozinho. Use comentários apenas para explicar o "porquê" de algo estranho, não "o que" o código faz.
4. **DRY (Don't Repeat Yourself):** Se você copiou e colou código em dois lugares, crie um método ou uma classe para reaproveitar.

Seguir o SOLID e o Clean Code separa o "pedreiro de software" do "arquiteto de software". É o que garante que você não vai querer pedir demissão de um projeto em 6 meses porque o código virou um canavial de erros.
