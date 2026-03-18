# Arquitetura: MVC, Camadas e Hexagonal

Até agora temos escrito códigos em classes soltas. As empresas reais usam **Arquitetura**. É o jeito de organizar as pastas, para que o sistema não vire uma bagunça de códigos.

## 1. O Padrão MVC (Model - View - Controller)
O mais famoso do mundo Java Web.
- **Model:** O Coração. As classes que representam os dados (`Usuario`, `Produto`) e as regras (ex: "Só salvar se for maior de 18 anos").
- **View:** A Cara. O que o usuário vê (HTML, App de Celular, JSON da API).
- **Controller:** O Porteiro de Hotel. Recebe o pedido, chama o serviço certo e devolve a resposta.

## 2. A Camada de Serviços: @Service e @Repository
Com o Spring, dividimos ainda mais o Model:
1. **Controller:** Recebe a rota `/usuarios`.
2. **Service:** Tem a lógica (ex: "Criptografar senha antes de salvar").
3. **Repository:** Tem o acesso ao Banco de Dados (SQL).

**Por que fatiar assim?**
- Para cada pedaço ter **Responsabilidade Única** (o 'S' do SOLID).
- Para ser fácil saber onde está o erro.

## 3. Arquitetura em Camadas (Layers)
As pastas comuns em um projeto Java real são:
- `controller/`
- `service/`
- `repository/`
- `model/` (ou `entity/`)
- `dto/` (Objetos simples para mandar dados na internet)
- `config/` (Configurações do Spring)

## 4. Arquitetura Hexagonal (Clean Architecture)
Imagine que o seu código é um **Motor**. Você não quer que o motor pare de funcionar se você trocar os pneus do carro (o banco de dados H2 por MySQL).

Na Arquitetura Hexagonal:
- O seu código de **Negócio** (a lógica real) fica no centro (o `Core`).
- Tudo o que é externo (Banco de Dados, APIs de Terceiros, Controllers) se conecta ao Core através de **Adaptadores** (Interfaces).

**Vantagem:** Se o banco de dados mudar de SQL pra MongoDB hoje, você não toca no seu `Service`. Você só cria um novo Adaptador.

## Resumo dos Níveis:
- **Nível 1:** Tudo no Main (Pior).
- **Nível 2:** MVC (Melhorando).
- **Nível 3:** Camadas Controller/Service/Repo (Profissional).
- **Nível 4:** Arquitetura Hexagonal (Arquiteto de Software).

Entender como organizar o seu projeto é o primeiro passo para arquitetar sistemas gigantes que duram décadas sem quebrar. 🏗️📐🏛️
