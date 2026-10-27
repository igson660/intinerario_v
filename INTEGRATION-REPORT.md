# Revisão técnica — Bolsa Clara

## Síntese da auditoria

O dashboard não distinguia o ano da **Pactuação** do ano de **pagamento**. A dimensão anual usada nos filtros e gráficos vem de `Pagamento.dataPagamento`; portanto, aqueles anos descrevem exercícios financeiros, não camadas de pactuação. Todos os registros da base existente foram associados à Pactuação 2023, inclusive pagamentos de 2024, 2025 e 2026.

Também havia problemas de semântica e navegação: grupos com vários pagamentos eram rotulados como beneficiários duplicados; alguns textos de origem, período e página continuariam mostrando metadados da base original após uma importação; e o importador podia consolidar ocorrências sem processo SEI suficiente para identificar o vínculo com segurança. O validador de dados tentava interpretar a base TypeScript como JSON e não conseguia executá-la corretamente.

## Alterações implementadas

- Criado `data/pactuacoes.ts` como mapa de camadas iniciais: Pactuação 2023 contém a base atual; 2024, 2025 e 2026 começam vazias.
- Adicionado seletor global de Pactuação na barra superior, com estado “com dados”/“sem dados”, mensagens vazias próprias e navegação consistente entre dashboard, pesquisa e perfil.
- Separado o campo `anoPagamento` do seletor de Pactuação. O filtro temporal, os rótulos e os gráficos agora identificam explicitamente o exercício financeiro.
- A importação substitui apenas o conjunto da Pactuação selecionada e informa esse destino. Sem processo SEI, as ocorrências ficam separadas; a consolidação exige CPF, processo e curso compatíveis.
- Renomeados os indicadores ambíguos: contagem e média passam a referir-se a grupos beneficiário–processo; “múltiplos pagamentos” substitui “beneficiários duplicados”. Pessoas sem identificador não são fundidas no gráfico por curso.
- Criada uma rota de perfil genérica, compatível com registros importados. Os aliases usados nos links não expõem CPF ou nome em texto claro e não são mecanismos de controle de acesso. A geração de milhares de páginas individuais estáticas foi removida.
- Atualizadas proveniência, documentação e avisos de privacidade. O validador agora lê a AST do TypeScript e não escreve nomes/CPFs nas mensagens do relatório.

## Modelo de dados atual

O conjunto original tem **3.826 grupos**, **6.203 pagamentos** e valor total calculado de **R$ 3.479.800,00**. Os registros pertencem à Pactuação 2023; as datas dos pagamentos abrangem os exercícios financeiros de 2023 a 2026. A verificação encontrou quatro grupos com campos de identidade incompletos, mantidos separados em vez de presumidos como uma mesma pessoa.

As camadas importadas durante a sessão permanecem somente na memória do navegador e não sobrevivem a uma atualização da página. A configuração inicial dos próximos anos pode ser incorporada em `data/pactuacoes.ts` quando os dados oficiais estiverem disponíveis.

## Validações executadas

- `npm run check` — passou, sem erros TypeScript.
- `npm run verify:data` — passou: 3.826 grupos, 6.203 pagamentos, total conciliado, 3.826 aliases únicos e nenhuma inconsistência; quatro avisos de identidade incompleta.
- `npm run build` — passou; exportação estática gerou sete rotas principais, incluindo `/beneficiario`, sem pré-gerar um perfil por beneficiário.

## Limites e privacidade

A validação acima audita a base original em `data/base.ts`; não certifica arquivos que venham a ser importados depois. O parser SICAF depende da estrutura textual esperada e os resultados importados devem ser conferidos antes de apoiar decisões administrativas.

O processamento no navegador não torna os dados privados: a base está embarcada no cliente, e uma exportação estática pode disponibilizar dados pessoais e financeiros aos visitantes. Não publique o site ou os arquivos em hospedagem pública sem autorização, autenticação e controle de acesso apropriados.