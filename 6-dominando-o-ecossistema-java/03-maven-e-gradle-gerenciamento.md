# Maven e Gradle: Gestão de Projetos

Para ser um profissional Java, você não pode apenas criar arquivos soltos. Você precisa de um **Automação de Build** e **Gerenciador de Dependências**.

No mundo Java, os dois reis são o **Maven** e o **Gradle**.

## 1. O que eles resolvem?
Imagine que você queira ler um arquivo JSON ou conectar no banco MySQL. Você precisaria:
1. Ir no site do MySQL.
2. Baixar um arquivo `.jar`.
3. Adicionar manualmente no seu projeto.
4. Se esse `.jar` precisar de outro `.jar` (dependência transitiva), você teria que baixar esse outro também.

**O Maven/Gradle faz tudo isso sozinho via código!**

---

## 2. Maven (O Clássico)
O Maven usa um arquivo chamado `pom.xml` (Project Object Model). É um XML que descreve tudo do seu projeto.

### Estrutura Padrão Maven
O Maven impõe uma estrutura de pastas obrigatória:
- `src/main/java`: Seu código fonte.
- `src/main/resources`: Arquivos de configuração (como o de banco de dados).
- `src/test/java`: Seus testes.
- `target`: Onde o Java compilado vai parar.

### O arquivo `pom.xml`
```xml
<dependencies>
    <!-- Exemplo: Adicionando biblioteca para Logs -->
    <dependency>
        <groupId>ch.qos.logback</groupId>
        <artifactId>logback-classic</artifactId>
        <version>1.4.11</version>
    </dependency>
</dependencies>
```

---

## 3. Gradle (O Moderno)
O Gradle é mais novo, mais rápido e usa uma linguagem (Groovy ou Kotlin) em vez de XML. É o padrão para desenvolvimento Android e muito amado em projetos Spring Boot modernos.

### O arquivo `build.gradle`
```groovy
dependencies {
    implementation 'ch.qos.logback:logback-classic:1.4.11'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.9.1'
}
```

## Principais Comandos
Seja qual for a ferramenta, os conceitos são os mesmos:
- **Clean:** Apaga a pasta de build (limpa tudo).
- **Compile:** Compila o código fonte.
- **Test:** Roda os testes unitários.
- **Package / Build:** Gera o arquivo final (`.jar` ou `.war`) para rodar no servidor.
- **Install:** Salva o seu projeto no seu computador para outros projetos usarem.

## Qual escolher?
- **Maven:** Use se o projeto for tradicional, corporativo ou se você prefere regras rígidas e estabilidade.
- **Gradle:** Use se você quer velocidade (build incremental), flexibilidade e um arquivo de configuração mais limpo e legível.

Dominar uma dessas ferramentas é o **primeiro passo** para sair do "Java de estudante" e entrar no "Java de mercado". Sem elas, você não consegue usar bibliotecas famosas como Lombok ou Spring.
