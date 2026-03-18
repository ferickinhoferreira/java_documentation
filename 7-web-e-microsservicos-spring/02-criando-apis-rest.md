# Criando APIs REST (GET, POST, PUT, DELETE)

Uma API REST é como um garçom: você faz um pedido formatado e ele te traz os dados. Em Java com Spring, usamos o protocolo HTTP para isso.

## 1. Os Verbos HTTP (Ações)
- **GET:** Buscar dados (Ex: Ver um produto).
- **POST:** Criar dados (Ex: Cadastrar um novo usuário).
- **PUT:** Atualizar dados (Ex: Mudar o preço de um item).
- **DELETE:** Apagar dados.

## 2. Exemplo de um Controller Profissional

```java
@RestController
@RequestMapping("/produtos") // Todos os endereços começam com /produtos
public class ProdutoController {

    private List<String> listagem = new ArrayList<>();

    @GetMapping
    public List<String> listarTudo() {
        return listagem;
    }

    @PostMapping
    public void cadastrar(@RequestBody String nome) {
        listagem.add(nome);
    }

    @DeleteMapping("/{nome}")
    public void remover(@PathVariable String nome) {
        listagem.remove(nome);
    }
}
```

## 3. Anotações de Parâmetros
- `@RequestBody`: Usado no POST/PUT. O Spring pega o JSON que veio da internet e transforma em Objeto Java automaticamente.
- `@PathVariable`: Pega um valor direto da URL (Ex: `/produtos/10` -> id = 10).
- `@RequestParam`: Pega valores após a interrogação (Ex: `/produtos?cor=azul`).

## 4. Boas Práticas (HttpStatus)
Sempre retorne o código correto para o frontend saber o que aconteceu:
- **200 OK:** Deu tudo certo.
- **201 Created:** Salvou com sucesso.
- **400 Bad Request:** O usuário mandou dados errados.
- **404 Not Found:** O item não existe.

Dominar as rotas de uma API é a base do desenvolvimento Web moderno. Através delas, seu backend Java se comunica com React, Angular, Mobile ou qualquer outro sistema. 📱🌐
