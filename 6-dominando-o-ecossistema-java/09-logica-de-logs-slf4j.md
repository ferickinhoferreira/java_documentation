# Logs com SLF4J e Logback

Nunca use `System.out.println()` para avisar erros em um sistema profissional.
- O `println` é lento.
- Ele não tem data/hora automática.
- Ele não separa o que é apenas aviso do que é um erro fatal.
- Se o sistema desligar, o que foi pro console sumiu.

A solução é o **Logging**.

## 1. A Dupla Dinâmica: SLF4J e Logback
- **SLF4J:** É uma interface. Ela diz *como* você deve escrever o log no código.
- **Logback:** É a implementação. É quem realmente escreve o texto no arquivo ou console.

## 2. Níveis de Log (Prioridade)
1. **ERROR:** Algo quebrou o sistema (Ex: Banco caiu).
2. **WARN:** Algo estranho aconteceu, mas o sistema seguiu (Ex: Campo opcional veio vazio).
3. **INFO:** Informações normais (Ex: "Usuário X logou", "Sistema iniciado").
4. **DEBUG:** Detalhes para o programador achar erros (Ex: "Valor da variável X na linha 50 é 10").
5. **TRACE:** Detalhes extremos (passo a passo de cada query).

## 3. Exemplo de Uso

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CompraService {
    // Definindo o logger para esta classe
    private static final Logger log = LoggerFactory.getLogger(CompraService.class);

    public void processar(double valor) {
        log.info("Iniciando processamento de compra no valor de {}", valor);

        if (valor < 0) {
            log.warn("Tentativa de compra com valor negativo detectada!");
            return;
        }

        try {
            // lógica...
        } catch (Exception e) {
            log.error("Erro fatal ao salvar no banco de dados", e);
        }
    }
}
```

## 4. Por que as chaves `{}`?
O SLF4J usa *placeholders*. Em vez de somar Strings (`"Valor: " + x`), o que é lento, ele só substitui o `{}` se o log for realmente ser impresso. Isso economiza muita memória em sistemas que processam milhões de dados.

## 5. Arquivo de Configuração (`logback.xml`)
Nele você define:
- Onde o log vai (Arquivos, Console, Banco de Dados).
- Quanto tempo os arquivos ficam guardados (ex: apagar logs com mais de 30 dias).
- Qual o nível mínimo para aparecer (ex: em Produção mostre só de INFO pra cima).

Logs são a **caixa preta** do seu avião (sistema). Sem eles, quando algo der errado no servidor do cliente, você estará cego. Aprenda a logar bem e você economizará noites de sono.
