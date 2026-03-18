# Git e Controle de Versão (Essencial)

O **Git** é a "Máquina do Tempo" do programador. Ele salva versões do seu código para você nunca mais perder nada e poder trabalhar em equipe.

## 1. Por que o Git é Obrigatório?
- Se você deletar algo por engano, você recupera.
- Se seu PC quebrar, o código está no **GitHub** (a nuvem do Git).
- Se você quiser testar uma coisa nova sem estragar o que já funciona (`branch`).

## 2. O Ciclo de Vida do Arquivo
Imagine um arquivo Java que você acabou de criar. Ele passa por 3 caixas:
1. **Working Directory:** Você está escrevendo.
2. **Staging Area:** Você "preparou" o arquivo pra ser salvo.
3. **Local Repo:** O arquivo está salvo na história do seu PC.

## 3. Comandos de Sobrevivência (Dia a Dia)

```bash
# Iniciar o Git no seu projeto
git init

# Verificar o que mudou
git status

# Colocar tudo na caixa de preparo
git add .

# Salvar com uma mensagem breve
git commit -m "Criando a classe Usuário"

# Ver a história do projeto
git log
```

## 4. O GitHub e o `Push`
Para mandar seu código para o site do GitHub:
```bash
# Conectar seu PC com o GitHub
git remote add origin https://github.com/feric/meu-java.git

# Mandar suas alterações para lá
git push origin main
```

## 5. Branching: Rams do Projeto
Uma **Branch** é como uma "linha do tempo alternativa". 
- Se você quer testar um recurso novo e maluco sem estragar a versão do cliente (`main`), você cria uma branch `feature-loja`.
- Se deu tudo certo, você faz um `Merge` (une as duas linhas do tempo).

```bash
git branch feature-login # Cria a ramificação
git checkout feature-login # Entra nela
```

## Resumo em Três Passos:
1. `git add .` (Organiza).
2. `git commit -m "v1"` (Tira a foto da história).
3. `git push` (Sobe pro mundo).

O Git é a ferramenta que separa o amador do profissional. Sem Git, você não trabalha em nenhuma empresa de tecnologia do mundo. 🕒💾🚀
