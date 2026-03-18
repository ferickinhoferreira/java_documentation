# Capítulo 3: JDBC e Persistência de Dados

> **Neste capítulo:** Aprenda a conectar seu programa Java a um banco de dados real e salvar/buscar informações de forma permanente.

---

## 💾 O Que é JDBC?

**JDBC** (Java Database Connectivity) é a API do Java para se conectar a bancos de dados. Com ela, seu programa Java consegue:

- **Criar** tabelas no banco
- **Inserir** dados (INSERT)
- **Buscar** dados (SELECT)
- **Atualizar** dados (UPDATE)
- **Deletar** dados (DELETE)

---

## 🔌 O Fluxo Básico

```java
import java.sql.*;

public class ExemploJDBC {
    public static void main(String[] args) throws SQLException {
        // 1. Conectar ao banco
        Connection conexao = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/meubanco", "root", "senha123"
        );

        // 2. Criar um statement
        Statement stmt = conexao.createStatement();

        // 3. Executar uma query
        ResultSet resultado = stmt.executeQuery("SELECT * FROM clientes");

        // 4. Ler os resultados
        while (resultado.next()) {
            String nome = resultado.getString("nome");
            int idade = resultado.getInt("idade");
            System.out.println(nome + " - " + idade + " anos");
        }

        // 5. Fechar a conexão
        conexao.close();
    }
}
```

---

> **Este capítulo será expandido conforme você avançar.** Antes de JDBC, domine bem OOP e Collections.

## Minhas Anotações
- 
