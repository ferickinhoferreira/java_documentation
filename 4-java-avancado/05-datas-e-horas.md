# Capítulo 5: Datas e Horas (LocalDate e LocalDateTime)

## A Dor de Cabeça do Tempo
Programadores detestam lidar com Relógios. O mundo tem fuso-horários em que países inventam "horário de verão" no meio da madrugada e bagunçam as contas matemáticas das tabelas de transação pix e relatórios do banco.

Até a versão Java 7, trabalhar com Data envolvia os infames Objetos `Date` e `Calendar`, que recebiam meses malucos começando do 0 (Onde o mês 0 era Janeiro!). Um caos para a legibilidade de lógica dos Seniors de ADS.

A salvação ocorreu no pacote poderoso do **Java 8 `(java.time.*)`**, copiando os moldes modernos mundiais de controle de Milissegundos (As classes *LocalDate* e *LocalDateTime*).

## As Classes Básicas e Imutáveis (O que importa no mercado)

1.  **`LocalDate`**: Usado para datas "secas", vazias de tempo. Apenas Anos, Meses e Dias. Exemplo de uso: *A sua data de aniversário.* 
2.  **`LocalTime`**: Usado para hora bruta. Horas, minutos, segundos e nanossegundos. *Alarme de celular as 06:15.*
3.  **`LocalDateTime`**: A fusão das duas acima! Data e hora acoplada na classe principal pra carimbar uma conta ou auditoria.

### Capturando o momento atual (A Máquina do Tempo do `now`)

```java
import java.time.LocalDate;
import java.time.LocalDateTime;

public class SistemaDoDetran {

    public static void main(String[] args) {
        
        // Capturar o dia Exato de HOJE ("now") baseando-se no relógio do Windows Server
        LocalDate diaDeHoje = LocalDate.now();
        System.out.println("Hoje de forma feia pros americanos: " + diaDeHoje); // Exibe: 2026-03-24 (Padrão internacional ISO!)
        
        // Puxando detalhes exatos: O Mês (3) e o Ano.
        System.out.println("Nós estamos no ano: " + diaDeHoje.getYear());
        
        // Capturar a Data e HORA que o código passou na linha abaixo
        LocalDateTime momentoExato = LocalDateTime.now();
        System.out.println("Auditoria de transação: " + momentoExato); // 2026-03-24T05:22:45.034
    }
}
```

### Criando Datas Antigas (O `.of()`)
As classes temporais de Java atual são estáticas e imutáveis. Não se coloca a palavra 'new LocalDate()' e sim os métodos próprios atreladores dela.

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Formatar {
    public static void main(String[] args) {

        // Cadastrando Data na Mão: .of(Ano inteiro, Mês número, Dia da semana). Janeiro = Mês 1.
        LocalDate descobrimentoDoBrasil = LocalDate.of(1500, 4, 22);

        // Somando Mães / Dias. (Vencimento de Fatura!)
        LocalDate diaDaCompra = LocalDate.now();
        
        // A MÁGICA: Adicionar 30 dias na data de hoje e ver quando cai a fatura:
        LocalDate diaVencimento = diaDaCompra.plusDays(30);
        
        // E pra formatar igual no Brasil (DD/MM/YYYY)?
        // 1. Criamos a máscara:
        DateTimeFormatter mascaraBR = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        
        // 2. Colocamos as datas passarem por dentro da máscara e virarem String de texto!
        String vencimentoBonito = diaVencimento.format(mascaraBR);
        System.out.println("Sua fatura vai vencer em: " + vencimentoBonito);
    }
}
```
Lidar com `DateTimeFormatter` e a API Temporal `.ofPattern("...")` vai salvar suas formatações nas APIS de front-end com os dados de calendário que ficam estranhos quando recebidos da base. E sempre que for pular ou reverter tempos no relógio da tela: Invoque os metodos `.plusMeses()`, `.plusDays()` e as inversas `.minus()`

## Minhas Anotações
- 
