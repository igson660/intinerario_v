# Integração multianual dos dados de 2023 a 2026

A aplicação Bolsa Clara foi atualizada para utilizar a base consolidada dos relatórios SICAF do Itinerário Formativo 2023 nos exercícios de 2023, 2024, 2025 e 2026.

## Base integrada

A base contém 3.826 grupos beneficiário/processo e 6.203 pagamentos, totalizando R$ 3.479.800,00. Os lançamentos foram agrupados por CPF e processo SEI quando disponíveis. Quando o mesmo CPF possui processos distintos, os grupos são mantidos separados para preservar a granularidade documental.

| Exercício | Pagamentos | Total |
|---|---:|---:|
| 2023 | 399 | R$ 88.610,00 |
| 2024 | 2.900 | R$ 1.221.082,00 |
| 2025 | 2.551 | R$ 1.856.994,00 |
| 2026 | 353 | R$ 313.114,00 |
| **Consolidado** | **6.203** | **R$ 3.479.800,00** |

## Seleção de ano e visão consolidada

A visão padrão utiliza `ano = todos` e mostra o consolidado de 2023 a 2026. O filtro global de ano oferece as opções 2023, 2024, 2025 e 2026. Ao selecionar um ano, a aplicação recalcula os indicadores, os gráficos, os totais, a pesquisa e os perfis com base apenas nos pagamentos daquele exercício. O gráfico de recursos por ano permanece disponível para comparar os exercícios na visão consolidada.

## Alterações técnicas

A base estática em `data/base.ts` foi substituída pelo consolidado multianual. As rotas de perfil continuam utilizando identificadores compostos por CPF ou nome, processo SEI e primeira nota de pagamento, evitando colisões entre registros com o mesmo CPF ou sem CPF. O dashboard passou a identificar dinamicamente o exercício selecionado ou o intervalo consolidado, e os textos globais foram atualizados para 2023–2026.

A função de formatação de CPF exibe `Não informado` para registros sem CPF. O script `scripts/verify-data.mjs` valida as quantidades e os totais consolidados, além das contagens por exercício, da unicidade das notas de pagamento e dos identificadores de rota.

## Validação

A validação multianual passou com 3.826 grupos, 6.203 pagamentos, R$ 3.479.800,00 de total calculado, 3.826 identificadores de rota únicos e 6.203 notas de pagamento únicas. Nenhuma duplicação exata foi removida. Foram preservados quatro registros com identidade incompleta porque nome e/ou CPF não aparecem nos relatórios de origem.

O build de produção foi concluído com 3.832 páginas estáticas. A revisão funcional confirmou a visão consolidada e as visões específicas de 2023, 2025 e 2026; a seleção de 2024 também permanece alimentada pelos dados auditados. Após retornar para `Todos`, o dashboard e a pesquisa voltaram ao total consolidado.

A aplicação deve ser executada com:

```bash
yarn install
yarn dev
```

Para validar a base:

```bash
node scripts/verify-data.mjs
```

Para gerar a exportação estática:

```bash
yarn build
```
