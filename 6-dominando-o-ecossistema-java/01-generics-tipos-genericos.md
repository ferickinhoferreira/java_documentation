# Generics (Tipos Genéricos)

## O que são Generics?
Introduzidos no Java 5, os **Generics** permitem que classes, interfaces e métodos operem sobre tipos de dados específicos, mantendo a segurança em tempo de compilação.

Sabe quando você cria um `ArrayList<String>`? Aquele `<String>` é um Generic. Ele diz ao Java: "Esta lista só aceita Strings". Sem isso, as listas aceitariam qualquer `Object`, e você teria que fazer cast o tempo todo (o que causa erros perigosos).

## Por que usar Generics?
1. **Segurança de Tipo (Type Safety):** O erro aparece enquanto você escreve o código, não quando o usuário está usando o app.
2. **Eliminação de Casts:** Você não precisa converter manualmente de `Object` para o tipo que você quer.
3. **Reuso de Código:** Você escreve uma lógica uma vez e ela funciona para qualquer tipo.

## Criando sua Próprias Classes Genéricas

Imagine uma "Caixa" que pode guardar qualquer coisa, mas uma vez que você define o que ela guarda, ela só aceita aquilo.

```java
// O 'T' é um "Type Parameter" (espaço reservado para o tipo)
public class Box<T> {
    private T conteudo;

    public void setConteudo(T conteudo) {
        this.conteudo = conteudo;
    }

    public T getConteudo() {
        return conteudo;
    }
}
```

**Uso:**
```java
public class Principal {
    public static void main(String[] args) {
        // Criando uma caixa de Inteiros
        Box<Integer> caixaDeNumero = new Box<>();
        caixaDeNumero.setConteudo(10);
        // int n = caixaDeNumero.getConteudo(); // Sem cast!

        // Criando uma caixa de Texto
        Box<String> caixaDeTexto = new Box<>();
        caixaDeTexto.setConteudo("Olá Generics");
        
        // caixaDeTexto.setConteudo(10); // ERRO DE COMPILAÇÃO! Segurança total.
    }
}
```

## Convenções de Nomes
Embora você possa usar qualquer letra, por convenção usamos:
- `T` (Type)
- `E` (Element - usado em Coleções)
- `K` (Key - usado em Maps)
- `V` (Value - usado em Maps)
- `N` (Number)

## Métodos Genéricos
Você também pode tornar apenas um método genérico, sem que a classe inteira seja.

```java
public class Utilitario {
    public static <T> void imprimirArray(T[] array) {
        for (T elemento : array) {
            System.out.print(elemento + " ");
        }
        System.out.println();
    }
}
```

## Wildcards (?)
Às vezes você quer aceitar uma lista de "qualquer coisa que seja um Animal". Usamos o curinga `?`.
- `List<? extends Animal>`: Aceita Animal ou qualquer filho de Animal.
- `List<? super Dog>`: Aceita Dog ou qualquer pai de Dog.

Generics são a espinha dorsal de frameworks modernos como Spring e Hibernate. Dominá-los diferencia um programador júnior de um pleno.
