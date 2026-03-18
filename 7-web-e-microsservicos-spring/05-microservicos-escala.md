# Microserviços: Escalando o Sistema

Quando uma empresa fica gigante (como Netflix, Uber ou Amazon), um único programa Java não aguenta mais o tranco. É aí que dividimos o sistema em **Microserviços**.

## 1. O que são Microserviços?
Em vez de um "Monolito" (um app que faz tudo), criamos vários apps pequenos que conversam entre si:
- Um app Java só para **Pagamentos**.
- Um app Java só para **Catálogo**.
- Um app Java só para **Usuários**.

## 2. Por que usar?
- **Independência:** Se o sistema de pagamentos cair, o usuário ainda consegue ver o catálogo.
- **Escalabilidade:** Se for Black Friday, você liga 10 máquinas para o "Carrinho" e deixa só 1 para o "Suporte".
- **Tecnologias diferentes:** Você pode ter um microserviço em Java e outro em Python na mesma empresa.

## 3. Como eles conversam?
1. **Síncrono (HTTP/REST):** Um chama o outro e fica esperando a resposta.
2. **Assíncrono (Mensageria):** Um joga uma mensagem numa "fila" (Kafka ou RabbitMQ) e o outro pega quando puder.

## 4. O Ecossistema Spring Cloud
O Spring tem ferramentas prontas para gerenciar essa bagunça:
- **Eureka:** Uma lista telefônica onde os microserviços se encontram.
- **Gateway:** Uma "portaria" única que recebe todas as chamadas da internet e distribui para os serviços.
- **Config Server:** Um lugar central para guardar as senhas e configurações de todos os apps.

Microserviços são o ápice da engenharia de software atual. Dominar isso é o caminho direto para cargos de **Sênior e Arquiteto de Software**. 🏗️📡
