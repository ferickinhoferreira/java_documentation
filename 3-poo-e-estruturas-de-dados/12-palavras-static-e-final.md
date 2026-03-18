# Palavras static e final

Até aqui cobrimos como criar moldes dinâmicos (Classes) que geram múltiplas cópias vivas e independentes (Objetos) com seus próprios valores na memória (`this`).
Mas e se precisarmos de algo que pertença **à própria planta da casa**, e não a cada casa construída? E se precisarmos de algo que **nunca mais possa ser alterado**?
Neste capítulo vamos conhecer o poder das palavras-chave `static` e `final`.

---

## 1. O Modificador `static` (Membro da Classe)

Quando você declara um atributo ou método como `static`, ele deixa de pertencer aos objetos (instâncias) e passa a **pertencer estritamente à Classe**.
Isso significa que **existe apenas uma única cópia desse atributo ou método na memória compartilhada por todos os objetos, não importando quantos objetos (new) você venha a criar (mesmo zero)**.

### Exemplo de Atributo Static

Pense num contador global de quantos Carros a fábrica já produziu.

```java
public class Carro {
    public String modelo; // Atributo de INSTÂNCIA (cada carro tem o seu)
    
    // Atributo ESTÁTICO (pertence à Classe Carro, é compartilhado e único)
    public static int totalCarrosProduzidos = 0; 
    
    public Carro(String modelo) {
        this.modelo = modelo;
        
        // Toda vez que dou "new Carro", a variável da CLASSE sobe 1.
        Carro.totalCarrosProduzidos++; 
    }
}
```

```java
public class Fabrica {
    public static void main(String[] args) {
        System.out.println(Carro.totalCarrosProduzidos); // 0 (Posso acessar a classe sem dar new nela)
        
        Carro c1 = new Carro("Fusca");
        Carro c2 = new Carro("Opala");
        
        System.out.println(Carro.totalCarrosProduzidos); // 2 (Ambos incrementaram o mesmo total global)
        
        // Os modelos são independentes:
        System.out.println(c1.modelo); // "Fusca"
    }
}
```

### Exemplo de Método Static

Lembra do `public static void main`? Ele é `static` justamente porque a JVM do seu sistema de compilação precisa chamá-lo para dar partida no "Main" **antes mesmo de construir o objeto de Main na memória**.

Métodos utilitários que só fazem cálculos baseados em parâmetros quase sempre são estáticos. Exemplo: A classe `Math` inteira. Você não faz `new Math().pow(2,2)`, e sim escreve literalmente `Math.pow(2,2)` usando a capitalização da Classe.

---

## 2. O Modificador `final` (A Imutável)

A palavra `final` no Java expressa **"Este é o seu fim. Você não pode mais ser alterado"**. Ela tem comportamentos diferentes se aplicada em Variáveis, Métodos ou Classes.

### a) `final` em Variáveis (Constantes)
Quando colocada numa variável, ela deve ser preenchida obrigatoriamente (na declaração ou pelo único Construtor no ato do NEW) e a partir daquele milionésimo de segundo **nunca mais aceita atribuição**. Se torna uma _Constante_.

> **Boas Práticas:** Constantes sempre são escritas em letras maiúsculas separadas por _ (SNAKE_CASE).

```java
public class SistemaLog {
    
    // Apenas final mas não global (cada objeto seu pode ter a sua constante imutavel de nascença):
    private final String CHAVE_DE_SESSAO;

    // Constante Global e Estática, ou seja, A VERDADE ABSOLUTA (como PI = 3.1415):
    public static final double VERSAO_DO_SISTEMA = 1.0;

    public SistemaLog(String chave) {
        this.CHAVE_DE_SESSAO = chave; // OK. Inicializado no nascimento.
    }
    
    public void alterarChave() {
        // this.CHAVE_DE_SESSAO = "999"; -> ERRO FATAL DE COMPILAÇÃO!
    }
}
```

### b) `final` em Métodos e Classes (Blindando a Herança)

Se você criar uma Classe perfeita, ou um método em que tem certeza absoluta das regras de negócio, e você não pode tolerar que algum programador use `extends` ou `@Override` para criar subclasses burlando o sistema bancário, você fecha a casinha usando `final`.

**Na Classe (Impede Ser Pai/Mãe):**
```java
// A String original nativa do Java é Final pra ninguém poder corromper ou ler textos restritivos.
public final class BancoTerminalSeguro {
    // ... Ninguém poderá herdar de BancoTerminalSeguro com 'extends'.
}
```

**No Método (Impede Polimorfismo / Overriding):**
```java
public class Conta {
    
    // As filhas poderão ser criadas e terão outros métodos.
    // MAS ESSE AQUI, elas não vão poder botar um @Override e alterar a lógica original dele!
    public final boolean validadorDeCpfDaReceita() {
        return //Lógiga ultra sensível...
    }
}
```

## Resumo em Um Parágrafo

O **`static`** cria itens únicos na dimensão da Classe para todo mundo compartilhar as globais sem `new` prévio. O **`final`** imobiliza variáveis de receberem novas cópias e paralisa heranças e polimorfismos que modificariam comportamentos que você proíbe ativamente. Um união de "public static final" origina as famosas _Constantes Globais_.
