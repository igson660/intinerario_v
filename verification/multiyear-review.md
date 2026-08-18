# Revisão da aplicação multianual

A rota `/dashboard` carregou com a visão padrão consolidada. O seletor de ano apresentou `Todos`, `2023`, `2024`, `2025` e `2026`. A visão `Todos` exibiu 6.203 pagamentos, 3.826 registros e total de R$ 3.479.800,00.

Ao selecionar 2025, o dashboard passou a exibir o selo `SICAF · Exercício 2025`, o estado `Vista filtrada`, 2.551 pagamentos e R$ 1.856.994,00, coincidentes com a auditoria dos dados. O filtro foi aplicado no nível dos pagamentos e recalculou os totais da visão.

Ao selecionar 2026, o dashboard exibiu 353 pagamentos, 342 registros e R$ 313.114,00. Ao selecionar 2023, exibiu 399 pagamentos, 399 registros e R$ 88.610,00. Esses valores coincidem com a auditoria por ano.

Após restaurar `Todos`, o dashboard voltou a exibir R$ 3.479.800,00 e 6.203 pagamentos. A rota `/pesquisa` carregou com 3.826 registros, 3.826 resultados e total consolidado de R$ 3.479.800,00, com a descrição dos relatórios de 2023 a 2026.
