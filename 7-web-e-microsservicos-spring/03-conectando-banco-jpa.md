# Conectando com Banco de Dados (Spring Data JPA)

Em Java profissional, nós raramente escrevemos comandos SQL (`SELECT * FROM...`) na mão. Nós usamos o **JPA (Java Persistence API)** e o **Hibernate**.

## 1. O que é um ORM?
É um "Tradutor". Ele transforma uma linha da tabela do seu banco de dados em um Objeto Java e vice-versa.

## 2. Definindo uma Entidade (@Entity)
Uma entidade é uma classe Java que representa uma tabela no banco.

```java
@Entity
@Getter @Setter
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;
    private boolean concluida;
}
```

## 3. O Poder do Repository
Com o **Spring Data JPA**, você só cria uma interface e o Spring "escreve" o código de salvar, buscar e deletar pra você magicamente!

```java
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    // Você ganha de graça: .save(), .findById(), .findAll(), .deleteById()
}
```

## 4. Query Methods (Magia de verdade!)
Se você criar um método seguindo o padrão de nomes do Spring, ele cria a query SQL sozinho:
```java
// O Spring gera o SQL: SELECT * FROM tarefa WHERE concluida = true
List<Tarefa> findByConcluidaTrue();

// SELECT * FROM tarefa WHERE descricao LIKE %texto%
List<Tarefa> findByDescricaoContaining(String texto);
```

## 5. Configurando o Banco
No arquivo `application.properties`, você diz onde o banco está:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/meu_banco
spring.datasource.username=root
spring.datasource.password=1234
spring.jpa.hibernate.ddl-auto=update
```

O Spring Data JPA reduz semanas de trabalho com banco de dados para apenas alguns minutos. É produtivo, seguro e extremamente poderoso. 💾⚡
