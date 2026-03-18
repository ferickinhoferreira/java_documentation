# Docker: Seu Java em Qualquer Lugar (Sem Instalar Nada)

"Ué, mas na minha máquina funciona!" - Essa é a frase que o **Docker** resolve.

## 1. O que é um Container?
Imagine que você queira mandar um presente para outro país. Você coloca dentro de um **Container de Navio**. Não importa se o navio é chinês ou brasileiro, o presente está seguro e o porto sabe como mover o container.

O **Docker** faz isso com o seu código Java. Ele empacota:
1. O seu código compilado (`.jar`).
2. A Máquina Virtual Java (**JRE**).
3. As pastas e configurações do sistema.

## 2. Dockerfile: A Receita do Bolo
Você cria um arquivo chamado `Dockerfile` na raiz do seu projeto. Nele, você diz como o Docker deve montar a imagem do seu app.

```dockerfile
# 1. Escolha a imagem base (O Java que você quer usar)
FROM openjdk:17-jdk-slim

# 2. Crie uma pasta dentro do container
WORKDIR /app

# 3. Copie o seu arquivo compilado (.jar) pra dentro
COPY target/meu-app-0.0.1.jar app.jar

# 4. Diga qual comando liga o seu app
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 3. Comandos de Sobrevivência (Docker)

```bash
# Criar a imagem a partir da "receita" (Dockerfile)
docker build -t meu-java-app .

# Ligar o container (Rodar o seu app isolado)
docker run -p 8080:8080 meu-java-app
```

## 4. Docker Compose: A Planta do Sistema
Um sistema real tem o Java + o Banco de Dados. O **Docker Compose** permite ligar TUDO de uma vez num só arquivo `docker-compose.yml`.

```yaml
version: '3.8'
services:
  db:
      image: postgres:15
      environment:
        POSTGRES_PASSWORD: 123
  api:
      build: .
      ports:
        - "8080:8080"
      depends_on:
        - db
```

Você roda um único comando `docker-compose up` e o sistema inteiro sobe sozinho!

## Resumo dos Benefícios:
- **Portabilidade:** Roda igual no Windows, Mac, Linux ou Nuvem.
- **Isolamento:** Se o seu Java crashar o container, ele não derruba o seu computador.
- **Rapidez:** Subir um banco de dados com Docker leva 5 segundos.

O Docker é a base da infraestrutura moderna. Se você sabe Docker, você já está anos-luz à frente de quem só sabe "escrever código". 🏗️📦🚢
