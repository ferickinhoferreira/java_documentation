# Capítulo 3: Instalando o Ambiente (Configurando JDK para programar)

## O que precisamos para programar em Java?
Para o nosso computador entender Java e conseguirmos criar nossos sistemas, precisamos de duas ferramentas fundamentais:

1. **JDK (Java Development Kit)**: O "Kit de Desenvolvimento". Ele traz o **compilador** (que traduz o código que você escreve para aquele Bytecode que vimos no Capítulo 1) e a **JVM** (que roda o programa de fato).
2. **IDE (Integrated Development Environment)**: É o nosso "bloco de notas anabolizado". Um programa feito especificamente para escrever código de forma confortável (ele avisa erros de digitação, autocompleta palavras e ajuda na organização). As mais famosas e recomendadas para Java são o **IntelliJ IDEA**, o **Eclipse** ou o **VS Code**. No começo, recomendamos muito o IntelliJ Community!

## Passo a Passo para Instalar o JDK no Windows
1. Acesse o site oficial do **Eclipse Adoptium** (uma versão gratuita, segura e de código aberto do Java): [adoptium.net](https://adoptium.net/)
2. Na página inicial, baixe a versão recomendada (geralmente a **LTS**, como o Java 17 ou 21). Ex: `Download Temurin 21 (LTS)`.
3. Abra o arquivo `.msi` que você baixou.
4. Vá clicando em "Next". **DICA DE OURO:** No meio da instalação, ele vai perguntar sobre quais recursos quer instalar. Certifique-se de ativar a opção que diz **"Set JAVA_HOME variable"** (Mudar de um "X" vermelho para "Will be installed on local hard drive") e também a de registrar no **PATH**.
5. Finalize a instalação clicando em "Install".

## Passo a Passo para Instalar a IDE (IntelliJ IDEA)
1. Acesse o site da JetBrains para o IntelliJ: [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/)
2. **Cuidado:** Role a página um pouco para baixo e procure pela versão **IntelliJ IDEA Community Edition** (ela é 100% gratuita para sempre!). Não baixe a versão "Ultimate" (que é paga após 30 dias).
3. Faça o download e instale normalmente (Next, Next, Install).

## Verificando se deu certo!
1. Abra o `Prompt de Comando` ou o `PowerShell` do seu Windows.
2. Digite o seguinte comando:
   ```cmd
   java -version
   ```
3. Aperte Enter.
4. Se aparecer a versão do Java no console (ex: `openjdk version "21.0.1"`), **Parabéns! O seu computador agora sabe falar Java e está pronto para criarmos o seu primeiro programa!**

## Minhas Anotações
- 
