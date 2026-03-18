# Threads e Programação Paralela

## O que são Threads?
Imagine que seu programa Java é um cozinheiro. Em um programa normal (Single-Thread), o cozinheiro pica a cebola, depois frita a carne, depois lava a louça. Ele só faz uma coisa por vez.

Uma **Thread** permite que você tenha "vários cozinheiros" na mesma cozinha (o seu programa). Enquanto um pica a cebola, o outro já vai fritando a carne. Isso é essencial para:
1. Jogos (renderizar gráficos enquanto processa a lógica).
2. Servidores Web (atender 1000 usuários ao mesmo tempo).
3. Processamento de dados pesados.

## 1. Criando uma Thread (O jeito raiz)
Existem duas formas básicas: estendendo a classe `Thread` ou implementando a interface `Runnable`.

```java
public class MeuProcesso extends Thread {
    @Override
    public void run() {
        System.out.println("Olá da Thread paralela!");
    }
}

// Para rodar:
MeuProcesso t1 = new MeuProcesso();
t1.start(); // O método start() cria a thread e chama o run()
```

## 2. O Problema da Concorrência (Race Condition)
Se dois cozinheiros tentarem mexer na mesma panela ao mesmo tempo, vai dar errado. No Java, se duas threads tentarem somar `+1` na mesma variável, o valor pode ficar corrompido.

A solução é a palavra `synchronized`. Ela coloca um "trinco" na porta. Só um entra por vez.

```java
public synchronized void incrementar() {
    contador++;
}
```

## 3. Concorrência Moderna: Executores
Hoje em dia, não criamos threads "na mão" com `new Thread()`. Usamos um **Pool de Threads**. É como contratar uma equipe pronta e só mandar as tarefas para eles.

```java
ExecutorService executor = Executors.newFixedThreadPool(4); // 4 cozinheiros fixos

executor.execute(() -> {
    System.out.println("Tarefa 1 sendo feita no fundo...");
});

executor.shutdown(); // Fecha a cozinha quando acabar as tarefas
```

## Resumo
- **Thread:** Um fluxo de execução independente.
- **Concorrência:** Várias threads tentando acessar o mesmo recurso.
- **Sincronização:** Garante que o acesso seja ordenado e seguro.

Threads são um assunto profundo, mas entender que o seu código pode rodar em paralelo é o que separa um software lento de um sistema de alta performance. 🚀🧵
