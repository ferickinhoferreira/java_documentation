$baseDir = "c:\Users\08128175408\Documents\java learn"

$curriculum = @{
    "1-fundamentos-do-java" = @(
        "Capítulo 1: O que é Java (Introdução à linguagem multiplataforma)",
        "Capítulo 2: Onde o Java é usado (Aplicações reais e mercado)",
        "Capítulo 3: Instalando o Ambiente (Configurando JDK para programar)",
        "Capítulo 4: Primeiro Programa: Olá, Mundo! (Criando Olá, Mundo! em Java)",
        "Capítulo 5: Estrutura de um Programa Java (Classes, métodos e pacotes)",
        "Capítulo 6: JVM, JRE e JDK (Como o Java é executado)",
        "Capítulo 7: Comentários e Boas Práticas (Código limpo e documentado)",
        "Capítulo 8: Tipos de Dados Básicos (int, double, boolean e char)",
        "Capítulo 9: Variáveis e Constantes (Armazenando e manipulando dados)",
        "Capítulo 10: Entrada e Saída de Dados (Interagindo com Scanner)"
    );
    "2-logica-de-programacao" = @(
        "Capítulo 1: Operadores Aritméticos (Operações matemáticas básicas)",
        "Capítulo 2: Operadores Lógicos (AND, OR e NOT)",
        "Capítulo 3: Estruturas de Decisão: if e else (Tomando decisões no código)",
        "Capítulo 4: if, else if e else (Testando múltiplas condições)",
        "Capítulo 5: Switch Case (Decisões com opções fixas)",
        "Capítulo 6: Loop: for (Repetições com contador)",
        "Capítulo 7: Loop: while (Repetições por condição)",
        "Capítulo 8: Loop: do while (Executa pelo menos uma vez)",
        "Capítulo 9: break e continue (Controlando o fluxo)",
        "Capítulo 10: Exercícios Práticos - Parte 1 (Desafios básicos)"
    );
    "3-dados-e-funcoes" = @(
        "Capítulo 1: Arrays - Vetores (Armazenando múltiplos valores)",
        "Capítulo 2: Matrizes (Trabalhando com matrizes)",
        "Capítulo 3: Strings e Métodos Úteis (Métodos úteis de String)",
        "Capítulo 4: Funções e Métodos (Criando funções em Java)",
        "Capítulo 5: Passagem de Parâmetros e Retorno (Parâmetros e retorno)",
        "Capítulo 6: Escopo de Variáveis (Variáveis locais e globais)",
        "Capítulo 7: Recursividade (Funções que se chamam)",
        "Capítulo 8: Introdução à Depuração (Encontrando e corrigindo bugs)"
    );
    "4-java-avancado" = @(
        "Capítulo 1: Tratamento de Erros (Try, catch e finally)",
        "Capítulo 2: Coleções em Java (ArrayList, HashMap e HashSet)",
        "Capítulo 3: Laços Aprimorados - for-each (Iterando coleções facilmente)",
        "Capítulo 4: Manipulação de Arquivos (Lendo e escrevendo arquivos)",
        "Capítulo 5: Datas e Horas (LocalDate e LocalDateTime)",
        "Capítulo 6: Enums e Constantes (Constantes tipadas)",
        "Capítulo 7: Classes Anônimas e Lambdas (Classes anônimas e lambdas)",
        "Capítulo 8: Streams e Filtros (Programação funcional)",
        "Capítulo 9: Threads e Concorrência (Execução paralela)",
        "Capítulo 10: Boas Práticas e Organização (Organização de projetos)"
    )
}

foreach ($folder in $curriculum.Keys) {
    $folderPath = Join-Path $baseDir $folder
    if (-not (Test-Path $folderPath)) {
        New-Item -ItemType Directory -Path $folderPath | Out-Null
    }

    $chapters = $curriculum[$folder]
    foreach ($chapter in $chapters) {
        $numMatch = [regex]::Match($chapter, "Capítulo (\d+):")
        if ($numMatch.Success) {
            $num = "{0:D2}" -f [int]$numMatch.Groups[1].Value
            $titleMatch = [regex]::Match($chapter, "Capítulo \d+: (.*?)(?: \()")
            $title = ""
            if ($titleMatch.Success) {
                $title = $titleMatch.Groups[1].Value
            } else {
                $titleMatch = [regex]::Match($chapter, "Capítulo \d+: (.*)")
                $title = $titleMatch.Groups[1].Value
            }
            
            # Formatar o nome do arquivo para algo seguro
            $cleanTitle = $title -replace 'á|à|ã|â|ä', 'a' -replace 'é|è|ê|ë', 'e' -replace 'í|ì|î|ï', 'i' -replace 'ó|ò|õ|ô|ö', 'o' -replace 'ú|ù|û|ü', 'u' -replace 'ç', 'c' -replace 'ñ', 'n'
            $cleanTitle = $cleanTitle -replace '[^a-zA-Z0-9]', '-' -replace '-+', '-' -replace '^-|-$', ''
            $cleanTitle = $cleanTitle.ToLower()
            
            $filename = "$num-$cleanTitle.md"
            $filePath = Join-Path $folderPath $filename
            
            if (-not (Test-Path $filePath)) {
                $content = @"
# $chapter

## Resumo
*(Aqui vamos adicionar a teoria sobre este capítulo)*

## Exemplos de Código
```java
// O código estudado ficará aqui
```

## Minhas Anotações
- 
"@
                Set-Content -Path $filePath -Value $content -Encoding UTF8
            }
        }
    }
}
Write-Host "Estrutura do currículo gerada com sucesso!"
