# JDBC: O Acesso Raiz a Bancos de Dados

Antes de existirem repositórios automáticos (como JPA), os programadores precisavam falar diretamente com o SQL. Esse tradutor é o **JDBC (Java Database Connectivity)**.

## 1. Por que aprender JDBC se já temos JPA?
1. O JPA é construído EM CIMA do JDBC. Se o JPA der pau, você só sabe arrumar se entender o JDBC.
2. Em projetos legados, você vai encontrar JDBC.
3. Para operações ultra rápidas e massivas, o JDBC puro é insuperável.

## 2. A "Canaleta" de Conexão
Para falar com o banco, precisamos de um **Driver** (ex: o do MySQL) e uma URL de conexão.

```java
String url = "jdbc:mysql://localhost:3306/banco_teste";
String user = "root";
String senha = "123";

try (Connection conn = DriverManager.getConnection(url, user, senha)) {
    System.out.println("Conectado ao Banco! 🎉");
} catch (SQLException e) {
    e.printStackTrace();
}
```

## 3. O Perigo da "Injeção de SQL"
Nunca concatene strings para criar seu SQL! Se você fizer: `SELECT * FROM usuario WHERE nome = '" + nomeParam + "'`, um hacker pode digitar `' OR '1'='1` e ver todos os dados.

**O Jeito Certo: `PreparedStatement`**
Ele já sanitiza as entradas e bloqueia hackers.

```java
String sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";

try (PreparedStatement stmt = conn.prepareStatement(sql)) {
    stmt.setString(1, "Feric"); // O Java troca o 1º '?' por 'Feric'
    stmt.setString(2, "feric@email.com"); // O Java troca o 2º '?'
    
    stmt.executeUpdate(); // Roda a ordem no Banco
}
```

## 4. Lendo os Resultados: `ResultSet`
É como um cursor. Você vai pulando de linha em linha da tabela.

```java
String query = "SELECT nome FROM usuarios";
ResultSet rs = stmt.executeQuery(query);

while (rs.next()) {
    String nome = rs.getString("nome");
    System.out.println("Nome no Banco: " + nome);
}
```

## Resumo dos Passos:
1. **Driver:** Tenha o JAR do banco no seu projeto.
2. **Connection:** Abra a porta da casa.
3. **Statement:** Prepare a ordem.
4. **Execute:** Mande a ordem.
5. **ResultSet:** Leia a resposta.
6. **Close:** Feche tudo (ou use o Try-with-resources que fecha sozinho).

JDBC é a base de tudo o que envolve dados em Java. Dominá-lo te dá o controle total sobre o banco de dados. 💾🔨
