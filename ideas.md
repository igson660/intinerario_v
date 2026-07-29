# Direcção de Design — Bolsa Estudantil Dashboard

## Abordagens exploradas

### 1. Atlas Cívico

**Introdução muito breve:** Uma linguagem editorial-institucional contemporânea, inspirada em mapas, livros-caixa e painéis de gestão pública. Transmite rigor e confiança sem parecer burocrática.

**Probabilidade:** 0,023

### 2. Laboratório de Dados

**Introdução muito breve:** Uma interface analítica de alto contraste, inspirada em instrumentos científicos e terminais de observação. Densa, precisa e orientada para utilizadores avançados.

**Probabilidade:** 0,071

### 3. Arquivo Modernista

**Introdução muito breve:** Uma estética modernista brasileira com tipografia expressiva, cores minerais e composição assimétrica. Evoca serviço público, educação e território de forma humana.

**Probabilidade:** 0,008

## Abordagem escolhida: Atlas Cívico

### Movimento de design

**Modernismo editorial cívico**, com referências a cartografia institucional, relatórios financeiros impressos e visualização de dados contemporânea.

### Princípios centrais

1. **Hierarquia inequívoca:** números e decisões vêm antes da decoração; cada ecrã deve revelar a informação mais importante em poucos segundos.
2. **Densidade respirável:** acomodar grande volume de dados com separadores subtis, ritmo vertical consistente e espaço em branco funcional.
3. **Autoridade humana:** combinar rigor institucional com detalhes acolhedores — tons minerais, linguagem clara e cantos discretos, sem aparência clínica.
4. **Contexto permanente:** filtros, período e origem dos dados devem permanecer visíveis para evitar interpretações erradas.

### Filosofia de cor

A assinatura visual utiliza **verde-seringueira** como cor própria da marca, associando o Acre, responsabilidade pública e continuidade. Fundos em marfim-papel reduzem o cansaço visual e remetem a documentos oficiais; azul-tinta reforça legibilidade e confiança; âmbar-terra destaca alertas e valores secundários. As cores dos gráficos são distintas mas moderadas, evitando o aspecto genérico de dashboards saturados.

### Paradigma de layout

Uma **folha de análise assimétrica**: sidebar estreita e fixa, cabeçalho contextual e área principal composta por faixas editoriais de larguras variáveis. Em vez de uma grelha homogénea de cartões, os indicadores usam módulos de escala diferente — um painel principal de recursos pagos, uma faixa de métricas compactas e gráficos organizados por narrativa analítica.

### Elementos de assinatura

1. **Linhas cartográficas:** traços finos, coordenadas e curvas discretas usados como textura em cabeçalhos e estados vazios.
2. **Marcadores de relatório:** pequenas etiquetas monoespaçadas com período, fonte, quantidade e estado do filtro.
3. **Faixa de tinta:** uma barra vertical verde-seringueira que identifica o módulo activo e funciona como motivo recorrente em cartões e tabelas.

### Filosofia de interacção

As interacções devem parecer operações de análise, não efeitos decorativos. Filtros respondem imediatamente, linhas de tabela revelam acções com hover subtil e os gráficos usam tooltips claros com unidades completas. Elementos frequentes têm transições mínimas; modais e painéis móveis usam movimentos mais expressivos, mas sempre abaixo de 300 ms.

### Animação

Os módulos entram uma única vez com deslocamento vertical de 8 px e opacidade, em cascata de 40 ms. Botões comprimem para 0,97 ao toque. Tooltips e selects abrem em 160–200 ms com `cubic-bezier(0.23, 1, 0.32, 1)`. Gráficos animam apenas na primeira carga ou quando o conjunto filtrado muda; pesquisa e navegação por teclado são instantâneas. Todas as animações respeitam `prefers-reduced-motion`.

### Sistema tipográfico

**Fraunces** é usada com moderação em títulos e números de destaque, conferindo carácter editorial. **Manrope** estrutura navegação, corpo, filtros e tabelas pela sua excelente legibilidade. **IBM Plex Mono** identifica metadados, CPFs, processos SEI, datas e valores técnicos. Títulos usam contraste de peso e não apenas tamanho; tabelas mantêm 13–14 px com espaçamento generoso entre linhas.

### Essência da marca

**Posicionamento:** inteligência pública sobre bolsas estudantis para equipas que precisam transformar relatórios extensos em decisões verificáveis.

**Personalidade:** rigorosa, clara, territorial.

### Voz da marca

Os títulos são directos e informativos; chamadas para acção usam verbos concretos; microcopy explica contexto e consequência. Evitar slogans genéricos e linguagem promocional.

Exemplos:

> “Veja para onde foram os recursos — do total ao pagamento individual.”

> “399 registos conferidos com o relatório de origem.”

### Wordmark e logótipo

O símbolo combina uma **folha dobrada de relatório** com duas curvas topográficas e um ponto de beneficiário. O wordmark “Bolsa Clara” utiliza lettering personalizado de terminais cortados; nunca deve ser apresentado como simples texto numa fonte padrão.

### Cor própria da marca

**Verde-seringueira — `#176B57`**. Deve aparecer na marca, navegação activa, valores positivos e controlos primários, sem dominar os fundos.

## Decisões técnicas relacionadas com o scaffold

Apesar de o ambiente inicial fornecer uma aplicação React genérica, o projecto será adaptado para cumprir o requisito explícito de **Next.js 15, TypeScript, App Router, Tailwind CSS e Yarn**, mantendo exportação estática e todo o processamento no navegador. Não haverá backend, API ou base de dados.

## Decisões de estilo

- A moldura global deve manter a identidade **Bolsa Clara** visível: símbolo de folha/topografia, wordmark próprio, faixa verde activa e marcador persistente de fonte/período.
- A regra de composição é **folha de análise editorial, não grelha de cartões iguais**: cada página combina um módulo dominante, uma faixa métrica compacta e uma secção de livro-caixa/tabela em escalas distintas.
- Gráficos com apenas uma categoria ou período mudam para um **tratamento de relatório anotado**, com concentração, valor, quantidade e nota de leitura, evitando áreas visualmente vazias.
