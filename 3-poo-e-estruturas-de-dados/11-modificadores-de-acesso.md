# Modificadores de Acesso e Escopo

No decorrer dos capítulos já vimos algumas palavras cruciais como `public`, `private` e `protected`. Neste tópico, faremos uma consolidação detalhista em relação ao controle de quem pode "ver" e "mexer" nestes elementos (Visibilidade de Escopo).

## Visão Geral dos quatro Modificadores do Java

O Java contém Exatamente 4 modificadores de acesso diferentes controlando variáveis, métodos ou classes e as restrições sempre envolvem **O mesmo pacote (namespace ou "pasta org")** versus **Pacotes Diferentes** e **Herança (pai-filho)**.

### 1. `private` (O mais Restritivo)

Quando um atributo ou método é marcado usando `private`, ele é um segredo valioso conhecido **unicamente e perfeitamente no escopo das chaves que abraçam a sua classe**.

- Nenhuma outra classe jamais o acessará, não em pacotes iguais, não em heranças, nunca.
- **Uso ideal**: Campos do estado interno do objeto (Atributos), Forçando Programadores a usarem `getters e setters` ou métodos-helper internos que servem pra limpeza do código mas não interessam pra quem utiliza o objeto.

### 2. Padrão/Default ou Package-Private (Ausência de Palavra-chave)

Quando você simplesmente escreve `String nome;` sem colocar public ou private.
O Java assume este comportamento limitador.

- Essa classe, método ou atributo tem acesso aberto, irrestrito e feliz, para todo mundo... Mas **APENAS PARA CLASSES QUE ESTEJAM LOCALIZADAS NO MESMO PACOTE (A mesma pasta física no Java)**.
- Se alguém de pacote diferente invocar a classe, ela simplesmente finge não o conhecer.
- **Uso ideal**: Código que trabalha unicamente entre classes irmãs (ex: Um helper de conexão com o banco e o Objeto Banco, todos numa pasta só, escondidos pro mundo externo, mas um vê o construtor do outro).

### 3. `protected` (O Segredo Familiar)

O `protected` é quase igual ao Default (Livre dentro da mesmíssima sub-pasta do projeto), porém ele possui um super-poder adicional: **Herança entre pacotes diferentes**.

- Qualquer classe que dê um `extends` se torna "filha de sangue". Filhos ganham o direito absoluto de ver e alterar uma variável com `protected`, até se eles "fugirem" para pacotes completamente remotos de projeto.
- **Uso ideal**: No topo da hierarquia de superclasses abstratas como na `Animal` no atributo `#idade` ou `#nome` caso eles achem sensato repassar aos filhos para economizar Gets excessivos, mas mantendo fechados contra o objeto `Main` ou classe `LeitorDeArquivos` externa.

### 4. `public` (Abertura Total)

Classes e Métodos que exibem `public` estão inteiramente acessíveis, sem bloqueio, em qualquer quadrante, pacote ou galáxia de todo o projeto Java.

- **Uso ideal**: Em classes em si, em Construtores onde tem de ser abertos (exceto o de Singleton) e em Métodos que compõem o serviço do aplicativo.

---

## Tabela Rápida de Resumo e Fixação:

| Modificador    | Visível na Mesma Classe? | Mesmo Pacote? | Filhos fora do Pacote? | Qualquer Outro Lugar? |
|----------------|--------------------------|---------------|------------------------|-----------------------|
| **`public`**     | Sim (Sempre)             | Sim           | Sim                    | Sim                   |
| **`protected`**  | Sim                      | Sim           | Sim                    | Não                   |
| **`default` (sem palavra)** | Sim                      | Sim           | Não                    | Não                   |
| **`private`**    | Sim                      | Não           | Não                    | Não                   |

É importantíssimo entender as camadas dessas "portas de confiança", pois Java Enterprise gira em torno da blindagem dos modelos de software.
