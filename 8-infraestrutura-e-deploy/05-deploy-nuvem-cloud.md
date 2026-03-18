# Deploy: Seu App Java Online (Cloud)

Depois de escrever o seu código, Java, Spring e Docker, você precisa mandar para o mundo. **Deploy** é colocar o seu programa para rodar num servidor 24h na nuvem (**Cloud**).

## 1. O Alvo: O Arquivo `.jar` (ou `.war`)
Se você estiver usando **Maven**, você roda um único comando local:
`mvn clean install`
O Maven pega o seu projeto inteiro e gera o executável comprimido dentro da pasta `/target/`.

## 2. A Nuvem (AWS, Azure e GCP)
As 3 gigantes do mercado oferecem serviços para hospedar o seu Java.
- **AWS (Amazon Web Services):** O rei das nuvens. O serviço `Elastic Beanstalk` é o mais fácil para Java.
- **Railway / Render / Heroku:** São ferramentas de nuvem muito simples ("PaaS"). Você conecta o seu GitHub no site deles e o seu app Java vira uma URL pública em 5 segundos!

## 3. O Passo a Passo Gerencial (CI/CD)
Hoje as empresas não fazem o deploy "na mão" apertando botões. Elas usam o **CI/CD** (Integração Contínua e Entrega Contínua).

1. Você faz `git push`.
2. O **GitHub Actions** (ou `Jenkins`) vê as mudanças.
3. Ele compila o Java sozinho.
4. Ele roda todos os seus testes do **JUnit**.
5. Se der tudo certo (Verde), o GitHub envia o seu Container pro servidor (AWS).

Isso é a esteira de produção mágica. Reduz o erro humano a zero.

## 4. Orquestração e Kubernetes (Sênior+)
Se você tem 200 microserviços rodando em 50 servidores diferentes, você precisa de um "Gerente de Containers". O nome disso é **Kubernetes (K8s)**.
- Se um container Java cair de madrugada, o Kubernetes percebe e liga outro sozinho.
- Ele divide o tráfego se você tiver muitos usuários.

## Resumo dos Níveis de Deploy:
1. **Estudante:** Roda só no PC clicando em "Run".
2. **Pleno:** Sobe um `.jar` pro **Railway** ou **Heroku**.
3. **Sênior:** Faz o deploy via **Docker** e **CI/CD** no **AWS**.
4. **Arquiteto:** Gerencia todo o ecossistema com **Kubernetes**.

A jornada para a nuvem é o capítulo final do desenvolvedor moderno. Se o seu código não está online, ele não existe para o mundo! ☁️🌍🚀🏆
