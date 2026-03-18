$base = "x:\feric\Documents\Meus Programas que Criei\java documentation"

Write-Host "=== REESTRUTURANDO O ROADMAP ==="

# Phase 1: Rename old folders to temp to avoid conflicts
Write-Host "Fase 1: Renomeando pastas para temp..."
Rename-Item "$base\3-dados-e-funcoes" "_temp_3"
Rename-Item "$base\4-java-avancado" "_temp_4"
Rename-Item "$base\5-orientacao-a-objetos" "_temp_5"

# Phase 2: Create new Section 3 - POO + Estruturas de Dados
Write-Host "Fase 2: Criando nova Seção 3 (POO + Estruturas)..."
New-Item "$base\3-poo-e-estruturas-de-dados" -ItemType Directory -Force | Out-Null

# First: Methods/Scope/Params (prerequisites for OOP)
Copy-Item "$base\_temp_3\04-funcoes-e-metodos.md" "$base\3-poo-e-estruturas-de-dados\01-funcoes-e-metodos.md"
Copy-Item "$base\_temp_3\05-passagem-de-parametros.md" "$base\3-poo-e-estruturas-de-dados\02-passagem-de-parametros.md"
Copy-Item "$base\_temp_3\06-escopo-de-variaveis.md" "$base\3-poo-e-estruturas-de-dados\03-escopo-de-variaveis.md"

# Then: OOP core
Copy-Item "$base\_temp_5\01-classes-e-objetos.md" "$base\3-poo-e-estruturas-de-dados\04-classes-e-objetos.md"
Copy-Item "$base\_temp_5\02-atributos-e-metodos.md" "$base\3-poo-e-estruturas-de-dados\05-atributos-e-metodos.md"
Copy-Item "$base\_temp_5\03-construtores-e-palavra-this.md" "$base\3-poo-e-estruturas-de-dados\06-construtores-e-palavra-this.md"
Copy-Item "$base\_temp_5\04-encapsulamento-getters-setters.md" "$base\3-poo-e-estruturas-de-dados\07-encapsulamento-getters-setters.md"
Copy-Item "$base\_temp_5\05-heranca-extends.md" "$base\3-poo-e-estruturas-de-dados\08-heranca-extends.md"
Copy-Item "$base\_temp_5\06-polimorfismo-sobrecarga-sobreposicao.md" "$base\3-poo-e-estruturas-de-dados\09-polimorfismo-sobrecarga-sobreposicao.md"
Copy-Item "$base\_temp_5\07-classes-abstratas-e-interfaces.md" "$base\3-poo-e-estruturas-de-dados\10-classes-abstratas-e-interfaces.md"
Copy-Item "$base\_temp_5\08-modificadores-de-acesso.md" "$base\3-poo-e-estruturas-de-dados\11-modificadores-de-acesso.md"
Copy-Item "$base\_temp_5\09-palavras-static-e-final.md" "$base\3-poo-e-estruturas-de-dados\12-palavras-static-e-final.md"

# Then: Arrays and data structures (after OOP)
Copy-Item "$base\_temp_3\01-arrays-vetores.md" "$base\3-poo-e-estruturas-de-dados\13-arrays-vetores.md"
Copy-Item "$base\_temp_3\02-matrizes.md" "$base\3-poo-e-estruturas-de-dados\14-matrizes.md"
Copy-Item "$base\_temp_3\03-strings-e-metodos.md" "$base\3-poo-e-estruturas-de-dados\15-strings-e-metodos-avancados.md"
Copy-Item "$base\_temp_3\07-recursividade.md" "$base\3-poo-e-estruturas-de-dados\16-recursividade.md"
Copy-Item "$base\_temp_5\10-exercicios-praticos-poo.md" "$base\3-poo-e-estruturas-de-dados\17-exercicios-praticos-poo.md"

# Phase 3: Create new Section 4 - Java Avançado
Write-Host "Fase 3: Criando nova Seção 4 (Java Avançado)..."
New-Item "$base\4-java-avancado" -ItemType Directory -Force | Out-Null

Copy-Item "$base\_temp_4\01-tratamento-de-erros.md" "$base\4-java-avancado\01-tratamento-de-erros.md"
Copy-Item "$base\_temp_4\02-colecoes-em-java.md" "$base\4-java-avancado\02-colecoes-em-java.md"
Copy-Item "$base\_temp_4\03-lacos-aprimorados-for-each.md" "$base\4-java-avancado\03-lacos-aprimorados-for-each.md"
Copy-Item "$base\_temp_4\06-enums-e-constantes.md" "$base\4-java-avancado\04-enums-e-constantes.md"
Copy-Item "$base\_temp_4\09-entendendo-a-classe-math.md" "$base\4-java-avancado\05-entendendo-a-classe-math.md"
Copy-Item "$base\_temp_4\07-classes-anonimas-e-lambdas.md" "$base\4-java-avancado\06-classes-anonimas-e-lambdas.md"
Copy-Item "$base\_temp_4\08-stream-api.md" "$base\4-java-avancado\07-stream-api.md"
Copy-Item "$base\_temp_3\08-introducao-a-depuracao.md" "$base\4-java-avancado\08-introducao-a-depuracao.md"
Copy-Item "$base\_temp_4\05-datas-e-horas.md" "$base\4-java-avancado\09-datas-e-horas.md"
Copy-Item "$base\_temp_4\04-manipulacao-de-arquivos.md" "$base\4-java-avancado\10-manipulacao-de-arquivos.md"
Copy-Item "$base\_temp_4\10-exercicios-praticos-parte-2.md" "$base\4-java-avancado\11-exercicios-praticos-parte-2.md"

# Phase 4: Create Section 5 - Mastery e Projetos
Write-Host "Fase 4: Criando nova Seção 5 (Mastery)..."
New-Item "$base\5-mastery-e-projetos" -ItemType Directory -Force | Out-Null

Copy-Item "$base\_temp_4\09-threads-e-concorrencia.md" "$base\5-mastery-e-projetos\01-threads-e-concorrencia.md"

# Phase 5: Cleanup temp folders
Write-Host "Fase 5: Limpando pastas temporárias..."
Remove-Item "$base\_temp_3" -Recurse -Force
Remove-Item "$base\_temp_4" -Recurse -Force
Remove-Item "$base\_temp_5" -Recurse -Force

Write-Host "=== REESTRUTURAÇÃO COMPLETA! ==="
Write-Host ""
Write-Host "Nova estrutura:"
Write-Host "  0   - Comece por Aqui (Be-a-Bá)"
Write-Host "  0.5 - Mergulho Profundo"
Write-Host "  1   - Fundamentos do Java"
Write-Host "  2   - Lógica de Programação"
Write-Host "  3   - POO + Estruturas de Dados  ** NOVO **"
Write-Host "  4   - Java Avançado (Exceptions, Collections, Lambdas)"
Write-Host "  5   - Mastery e Projetos  ** NOVO **"
Write-Host "  6   - Dominando o Ecossistema"
Write-Host "  7   - Spring & Microserviços"
Write-Host "  8   - Infra & Deploy"
Write-Host "  9   - Hacks & Carreira"
