/**
 * Atlas Cívico — base estática extraída do relatório SICAF de 2023.
 * Fonte: Relação de Pagamentos por Credor e Data de Baixa, 86 páginas.
 */

import type { Beneficiario } from "@/lib/types";

export const beneficiarios = [
  {
    "nome": "ABRAÃO FERREIRA DOS SANTOS",
    "cpf": "94243581215",
    "processoSei": "2817.013036.00154/2023-61",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125729/2023",
        "liquidacao": "7172124865",
        "empenho": "7172125397/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ABRAÃO SOUZA DOS SANTOS",
    "cpf": "06128781209",
    "processoSei": "2817.013032.00447/2023-42",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126114/2023",
        "liquidacao": "7172125228",
        "empenho": "7172125763/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 540.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 540.0
  },
  {
    "nome": "ACLEITO SOARES DE SOUZA",
    "cpf": "03971905226",
    "processoSei": "",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125988/2023",
        "liquidacao": "7172125115",
        "empenho": "7172125643/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ADALBERTO ELIAS LOPES CUNHA JUNIOR",
    "cpf": "06834657240",
    "processoSei": "2817.013042.00099/2023-01",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125649/2023",
        "liquidacao": "7172124813",
        "empenho": "7172125317/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ADELINO ALBUQUERQUE DA SILVA",
    "cpf": "05450200269",
    "processoSei": "2817.013047.00254/2023-87",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125800/2023",
        "liquidacao": "7172124935",
        "empenho": "7172125467/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ADMILSON SILVA DOS SANTOS",
    "cpf": "02195858222",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126066/2023",
        "liquidacao": "7172125196",
        "empenho": "7172125710/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "ADRIAN FELIPE SANTANA PEREIRA",
    "cpf": "02377603203",
    "processoSei": "2817.013042.00037/2023-91",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125769/2023",
        "liquidacao": "7172124904",
        "empenho": "7172125438/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "ADRIANA DA COSTA MONTEIRO",
    "cpf": "07298159275",
    "processoSei": "2817.013047.00115/2023-53",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126032/2023",
        "liquidacao": "7172125155",
        "empenho": "7172125695/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ADRIEL ASAF MACIEL RIBEIRO",
    "cpf": "03599873208",
    "processoSei": "2817.013047.00206/2023-99",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125765/2023",
        "liquidacao": "7172124900",
        "empenho": "7172125435/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "ADRIELE RODRIGUES SOARES",
    "cpf": "10386867259",
    "processoSei": "2817.013042.00060/2023-86",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125823/2023",
        "liquidacao": "7172124950",
        "empenho": "7172125485/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "ADRIELSON QUEIROZ DE FREITAS",
    "cpf": "10763440205",
    "processoSei": "2817.013032.00448/2023-97",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125705/2023",
        "liquidacao": "7172124845",
        "empenho": "7172125377/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 472.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 472.0
  },
  {
    "nome": "AGATHA WELLEN OLIVEIRA BRITO",
    "cpf": "02048145299",
    "processoSei": "2817.013047.00225/2023-15",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125791/2023",
        "liquidacao": "7172124925",
        "empenho": "7172125460/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 130.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 130.0
  },
  {
    "nome": "ALAN DOMINGOS SALES KAXINAWA",
    "cpf": "07766027216",
    "processoSei": "2817.013038.00482/2023-66",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125965/2023",
        "liquidacao": "7172125091",
        "empenho": "7172125626/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ALESSANDRA ALVARENGA SANTANA",
    "cpf": "09871989202",
    "processoSei": "2817.013047.00173/2023-87",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125976/2023",
        "liquidacao": "7172125101",
        "empenho": "7172125641/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "ALESSANDRA DA SILVA LIMA",
    "cpf": "08438855210",
    "processoSei": "2817.013046.00402/2023-64",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125677/2023",
        "liquidacao": "7172124828",
        "empenho": "7172125358/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 280.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 280.0
  },
  {
    "nome": "ALESSANDRO MENEZES DA SILVA",
    "cpf": "06927428240",
    "processoSei": "2817.013036.00158/2023-40",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125761/2023",
        "liquidacao": "7172124896",
        "empenho": "7172125430/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ALEX GOMES DOS SANTOS",
    "cpf": "70258936258",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125898/2023",
        "liquidacao": "7172125023",
        "empenho": "7172125555/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "ALICE DA ROCHA FARIAS",
    "cpf": "07377788224",
    "processoSei": "2817.013046.00304/2023-27",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126182/2023",
        "liquidacao": "7172125282",
        "empenho": "7172125860/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "ALICE GOMES DE ARAUJO",
    "cpf": "03735111246",
    "processoSei": "2817.013032.00283/2023-53",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125802/2023",
        "liquidacao": "7172124937",
        "empenho": "7172125469/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "ALINE AIRES DA SILVA",
    "cpf": "06388796206",
    "processoSei": "2817.013032.00306/2023-20",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125661/2023",
        "liquidacao": "7172124825",
        "empenho": "7172125357/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ALYNE PAES OLIVEIRA",
    "cpf": "07834135210",
    "processoSei": "2817.013036.00159/2023-94",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125724/2023",
        "liquidacao": "7172124859",
        "empenho": "7172125392/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 120.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 120.0
  },
  {
    "nome": "ALYNNE GOMES FAUSTINO",
    "cpf": "70307513297",
    "processoSei": "2817.013047.00109/2023-04",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125753/2023",
        "liquidacao": "7172124888",
        "empenho": "7172125421/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ALZIRA CARDOSO LESSA NETA",
    "cpf": "10192427288",
    "processoSei": "2817.013047.00116/2023-06",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125830/2023",
        "liquidacao": "7172124957",
        "empenho": "7172125492/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "AMANDA JHEMILLY DE SOUZA SANTOS",
    "cpf": "10345202295",
    "processoSei": "2817.013047.00318/2023-40",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126105/2023",
        "liquidacao": "7172125221",
        "empenho": "7172125757/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "AMANDA RUFINO BRASIL",
    "cpf": "03956779207",
    "processoSei": "",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126071/2023",
        "liquidacao": "7172125206",
        "empenho": "7172125715/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ANA BEATRIZ DA SILVA SANTOS",
    "cpf": "07414865207",
    "processoSei": "2817.013032.00309/2023-63",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126110/2023",
        "liquidacao": "7172125225",
        "empenho": "7172125761/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 50.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 50.0
  },
  {
    "nome": "ANA BEATRIZ LIMA DE ARAUJO",
    "cpf": "10632960213",
    "processoSei": "2817.013032.00403/2023-12",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125774/2023",
        "liquidacao": "7172124907",
        "empenho": "7172125441/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 488.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 488.0
  },
  {
    "nome": "ANA CAROLINA DE SILVA QUEIROZ",
    "cpf": "09206765299",
    "processoSei": "2817.013046.00143/2022-91",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125701/2023",
        "liquidacao": "7172124842",
        "empenho": "7172125374/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "ANA CLARA BORGES PINTO",
    "cpf": "08798103270",
    "processoSei": "2817.013047.00319/2023-94",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125980/2023",
        "liquidacao": "7172125106",
        "empenho": "7172125648/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "ANA CLARA DA SILVA",
    "cpf": "06241451235",
    "processoSei": "2817.013047.00214/2023-35",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125924/2023",
        "liquidacao": "7172125049",
        "empenho": "7172125587/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ANA CLARA DAMASCENO LIMA",
    "cpf": "10422466298",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126082/2023",
        "liquidacao": "7172125218",
        "empenho": "7172125724/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ANA CLARA GOMES FERREIRA",
    "cpf": "03888278236",
    "processoSei": "2817.013036.00156/2023-51",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125858/2023",
        "liquidacao": "7172124984",
        "empenho": "7172125525/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 140.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 140.0
  },
  {
    "nome": "ANA CLARA MELO DE OLIVEIRA",
    "cpf": "07989667266",
    "processoSei": "2817.013047.00110/2023-21",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125679/2023",
        "liquidacao": "7172124830",
        "empenho": "7172125360/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ANA CLARA MORAIS DO NASCIMENTO",
    "cpf": "05070169203",
    "processoSei": "2817.013046.00057/2023-62",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125593/2023",
        "liquidacao": "7172124785",
        "empenho": "7172125276/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "ANA CLARA RODRIGUES DA SILVA",
    "cpf": "10336469209",
    "processoSei": "2817.013047.00117/2023-42",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125795/2023",
        "liquidacao": "7172124929",
        "empenho": "7172125462/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ANA CLARA SILVA DAMASCENO",
    "cpf": "07007366201",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125892/2023",
        "liquidacao": "7172125018",
        "empenho": "7172125548/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 280.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 280.0
  },
  {
    "nome": "ANA CRISTINA LIMA DE SOUSA",
    "cpf": "08176154237",
    "processoSei": "2817.013048.00150/2023-71",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126131/2023",
        "liquidacao": "7172125239",
        "empenho": "7172125772/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ANA ELOISA FERREIRA DE SOUZA",
    "cpf": "02278967266",
    "processoSei": "2817.013047.00111/2023-75",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125747/2023",
        "liquidacao": "7172124882",
        "empenho": "7172125413/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ANA KASSIA ABREU SEVERINO",
    "cpf": "08639516278",
    "processoSei": "2817.013047.00198/2023-81",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125954/2023",
        "liquidacao": "7172125080",
        "empenho": "7172125614/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "ANA KÁSSIA DUARTE ALENCAR",
    "cpf": "08428577293",
    "processoSei": "2817.013032.00424/2023-38",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126117/2023",
        "liquidacao": "7172125230",
        "empenho": "7172125764/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "ANA KAYRINE MAIA SANTOS",
    "cpf": "06513168201",
    "processoSei": "2817.013032.00248/2023-34",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125762/2023",
        "liquidacao": "7172124897",
        "empenho": "7172125431/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 300.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 300.0
  },
  {
    "nome": "ANA KELY RODRIGUES DOS SANTOS",
    "cpf": "07053295265",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125894/2023",
        "liquidacao": "7172125020",
        "empenho": "7172125551/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "ANA KETLEN OLIVEIRA ARRUDA",
    "cpf": "03862297241",
    "processoSei": "2817.013032.00425/2023-82",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125763/2023",
        "liquidacao": "7172124898",
        "empenho": "7172125432/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "ANA MAYNARA DA SILVA OLIVEIRA",
    "cpf": "07530499297",
    "processoSei": "2817.013047.00256/2023-76",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126002/2023",
        "liquidacao": "7172125128",
        "empenho": "7172125668/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "ANA PAULA PIMENTEL DE LIMA",
    "cpf": "05131730210",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126073/2023",
        "liquidacao": "7172125207",
        "empenho": "7172125716/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "ANA TRIS NASCIMENTO VIANNA",
    "cpf": "10454686226",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125933/2023",
        "liquidacao": "7172125064",
        "empenho": "7172125588/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ANA VICTÓRIA CASTELO OLIVEIRA",
    "cpf": "03044350239",
    "processoSei": "2817.013042.00050/2023-41",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125951/2023",
        "liquidacao": "7172125077",
        "empenho": "7172125611/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "ANA VITORIA DO NASCIMENTO MAGALHAES",
    "cpf": "01697052266",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126074/2023",
        "liquidacao": "7172125208",
        "empenho": "7172125717/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "ANA VITORIA SOUZA OLIVEIRA",
    "cpf": "08360605203",
    "processoSei": "2817.013038.00528/2023-47",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125597/2023",
        "liquidacao": "7172124799",
        "empenho": "7172125277/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ANALICI DE SOUZA OLIVEIRA",
    "cpf": "06459364214",
    "processoSei": "2817.013038.00565/2023-55",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125654/2023",
        "liquidacao": "7172124819",
        "empenho": "7172125323/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 100.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 100.0
  },
  {
    "nome": "ANALICIA RIBEIRO AYACHE",
    "cpf": "05894707285",
    "processoSei": "2817.013038.00368/2023-36",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125770/2023",
        "liquidacao": "7172124905",
        "empenho": "7172125439/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ANDERSON ALVES PAIVA DA SILVA",
    "cpf": "10403961270",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125969/2023",
        "liquidacao": "7172125094",
        "empenho": "7172125633/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ANDERSON PEREIRA DA CUNHA",
    "cpf": "09794147257",
    "processoSei": "2817.013046.00405/2023-06",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125759/2023",
        "liquidacao": "7172124894",
        "empenho": "7172125428/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "ANDRE ANDRADE DA COSTA",
    "cpf": "06549395275",
    "processoSei": "2817.013032.00252/2023-01",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125837/2023",
        "liquidacao": "7172124964",
        "empenho": "7172125499/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 290.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 290.0
  },
  {
    "nome": "ANDRESSA COSTA DOS SANTOS",
    "cpf": "09967099240",
    "processoSei": "2817.013042.00095/2023-15",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125913/2023",
        "liquidacao": "7172125038",
        "empenho": "7172125570/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "ANDRIELE SILVA PEREIRA",
    "cpf": "07286628259",
    "processoSei": "2817.013032.00304/2023-31",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126146/2023",
        "liquidacao": "7172125254",
        "empenho": "7172125785/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "ANDRYA MARIAH MARQUES DA SILVA",
    "cpf": "07287225263",
    "processoSei": "2817.013047.00205/2023-44",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126000/2023",
        "liquidacao": "7172125125",
        "empenho": "7172125656/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "ANIELEN SALES CORDEIRO",
    "cpf": "00519004248",
    "processoSei": "2817.013032.00426/2023-27",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125847/2023",
        "liquidacao": "7172124974",
        "empenho": "7172125509/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ANNA PAULA ELLER FREITAS",
    "cpf": "06702622260",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126059/2023",
        "liquidacao": "7172125182",
        "empenho": "7172125741/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ANNY GABRIELLE SILVA DE OLIVEIRA",
    "cpf": "06979983202",
    "processoSei": "2817.013032.00285/2023-42",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126046/2023",
        "liquidacao": "7172125169",
        "empenho": "7172125730/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "ANTONIA ANDRESSA SILVA DE SOUZA",
    "cpf": "08047823264",
    "processoSei": "2817.013046.00365/2023-94",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125631/2023",
        "liquidacao": "7172124804",
        "empenho": "7172125305/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "ANTÔNIA EDUARDA DE SOUZA FERREIRA",
    "cpf": "08918613270",
    "processoSei": "2817.013046.00366/2023-39",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126028/2023",
        "liquidacao": "7172125151",
        "empenho": "7172125690/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "ANTONIA JARDE SILVA SOUZA",
    "cpf": "70443453284",
    "processoSei": "2817.013046.00427/2023-68",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126058/2023",
        "liquidacao": "7172125181",
        "empenho": "7172125740/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "ANTÔNIA MÁRCIA MAGALHÃES GRAÇA",
    "cpf": "09903229208",
    "processoSei": "2817.013046.00306/2023-16",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125733/2023",
        "liquidacao": "7172124869",
        "empenho": "7172125401/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "ANTONIA MARIA SILVA DE SOUZA",
    "cpf": "08994419209",
    "processoSei": "2817.013038.00483/2023-19",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125817/2023",
        "liquidacao": "7172124944",
        "empenho": "7172125475/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ANTÔNIA PAULA SOUZA FARIAS",
    "cpf": "08758610243",
    "processoSei": "2817.013046.00367/2023-83",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125659/2023",
        "liquidacao": "7172124824",
        "empenho": "7172125348/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "ANTONIO SILVA DE SOUZA",
    "cpf": "07411095222",
    "processoSei": "",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125905/2023",
        "liquidacao": "7172125030",
        "empenho": "7172125562/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "ANY CAROLINY CORREA DA SILVA",
    "cpf": "07079287294",
    "processoSei": "2817.013032.00314/2023-76",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126044/2023",
        "liquidacao": "7172125167",
        "empenho": "7172125727/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "AURELIO ARTHUR PAIVA ALMEIDA",
    "cpf": "10006972233",
    "processoSei": "2817.013038.00531/2023-61",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125707/2023",
        "liquidacao": "7172124849",
        "empenho": "7172125379/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "AWEVILIN JULIA DO NASCIMENTO LIRA",
    "cpf": "10671212265",
    "processoSei": "2817.013046.00257/2023-25",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125594/2023",
        "liquidacao": "7172124786",
        "empenho": "7172125278/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "BEATRIZ FERREIRA SOUSA",
    "cpf": "05045867261",
    "processoSei": "",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125882/2023",
        "liquidacao": "7172125008",
        "empenho": "7172125540/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "BEATRIZ OLIVEIRA VENANCIO",
    "cpf": "10241539242",
    "processoSei": "2817.013047.00320/2023-19",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125963/2023",
        "liquidacao": "7172125089",
        "empenho": "7172125624/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "BERGONE DA SILVA E SILVA",
    "cpf": "09794076210",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125931/2023",
        "liquidacao": "7172125063",
        "empenho": "7172125586/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "BRUNA DE LIMA GEBER",
    "cpf": "07085241250",
    "processoSei": "2817.013038.00370/2023-13",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126096/2023",
        "liquidacao": "7172125202",
        "empenho": "7172125752/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "BRUNA FONTINELE BARBOSA",
    "cpf": "06979988271",
    "processoSei": "2817.013032.00427/2023-71",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125710/2023",
        "liquidacao": "7172124852",
        "empenho": "7172125387/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "BRUNO HENRIQUE MOITOZO PINTO",
    "cpf": "06990593210",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125860/2023",
        "liquidacao": "7172124988",
        "empenho": "7172125515/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "BRUNO LIMA CARVALHO",
    "cpf": "09092384216",
    "processoSei": "2817.013046.00386/2023-18",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125900/2023",
        "liquidacao": "7172125025",
        "empenho": "7172125557/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 400.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 400.0
  },
  {
    "nome": "BRUNO MATHEUS NOLASCO MARIANO",
    "cpf": "02452079294",
    "processoSei": "",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125828/2023",
        "liquidacao": "7172124956",
        "empenho": "7172125490/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "BRUNO STARKE DE SOUSA",
    "cpf": "01838183264",
    "processoSei": "2817.013042.00087/2023-79",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125821/2023",
        "liquidacao": "7172124948",
        "empenho": "7172125479/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "CAIO JEFFERSON DE PAIVA NUNES",
    "cpf": "07438986217",
    "processoSei": "2817.013032.00429/2023-61",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125750/2023",
        "liquidacao": "7172124885",
        "empenho": "7172125415/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "CAMILA LIMA DAS CHAGAS",
    "cpf": "08053743293",
    "processoSei": "2817.013036.00164/2023-05",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126147/2023",
        "liquidacao": "7172125255",
        "empenho": "7172125787/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 110.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 110.0
  },
  {
    "nome": "CAMILA LOPES DE SOUZA",
    "cpf": "70637218280",
    "processoSei": "2817.013036.00165/2023-41",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125909/2023",
        "liquidacao": "7172125034",
        "empenho": "7172125566/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "CAMILE VITÓRIA BRAGA DE SOUZA",
    "cpf": "08875795231",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125864/2023",
        "liquidacao": "7172124992",
        "empenho": "7172125523/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "CARIANE SANTOS LIMA",
    "cpf": "09893341205",
    "processoSei": "2817.013046.00309/2023-50",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125794/2023",
        "liquidacao": "7172124928",
        "empenho": "7172125461/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "CARINE LUNA DA SILVA",
    "cpf": "07502776290",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126158/2023",
        "liquidacao": "7172125262",
        "empenho": "7172125792/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 250.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 250.0
  },
  {
    "nome": "CARLOS ANDRE CUNHA PORTELA",
    "cpf": "06747995260",
    "processoSei": "2817.013038.00420/2023-54",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125758/2023",
        "liquidacao": "7172124893",
        "empenho": "7172125427/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "CEZAR GUTIERREZ ESCALANTE NETO",
    "cpf": "06752804273",
    "processoSei": "2817.013047.00227/2023-12",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125979/2023",
        "liquidacao": "7172125105",
        "empenho": "7172125647/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "CHARLES AGAPITO DA SILVA",
    "cpf": "07378137251",
    "processoSei": "2817.013032.00480/2023-72",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126026/2023",
        "liquidacao": "7172125149",
        "empenho": "7172125687/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "CLARA ELIS PAIVA DE ALMEIDA",
    "cpf": "06864907201",
    "processoSei": "2817.013042.00038/2023-36",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125751/2023",
        "liquidacao": "7172124886",
        "empenho": "7172125417/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "CLARA MENDES BATISTA",
    "cpf": "09270028259",
    "processoSei": "2817.013047.00114/2023-17",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125678/2023",
        "liquidacao": "7172124829",
        "empenho": "7172125359/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "CLECIANE FEITOSA KAXINAWA",
    "cpf": "04258915262",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125938/2023",
        "liquidacao": "7172125070",
        "empenho": "7172125596/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "CRISTIANE GOMES DA SILVA",
    "cpf": "70532379233",
    "processoSei": "2817.013047.00228/2023-59",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125848/2023",
        "liquidacao": "7172124975",
        "empenho": "7172125510/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "CRISTIANE MACHADO DE OLIVEIRA",
    "cpf": "00216422221",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126170/2023",
        "liquidacao": "7172125269",
        "empenho": "7172125819/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "DAIANNE SILVA DE ALMEIDA",
    "cpf": "06369228206",
    "processoSei": "2817.013047.00229/2023-01",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125952/2023",
        "liquidacao": "7172125078",
        "empenho": "7172125612/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "DALTON LUIZ SILVA DA CUNHA",
    "cpf": "09480580217",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125930/2023",
        "liquidacao": "7172125060",
        "empenho": "7172125583/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "DANIEL COSTA BERNALDO",
    "cpf": "02585094227",
    "processoSei": "2817.013042.00064/2023-64",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125915/2023",
        "liquidacao": "7172125040",
        "empenho": "7172125574/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "DANIEL DA ROCHA PESSOA JUNIOR",
    "cpf": "71210993228",
    "processoSei": "",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125934/2023",
        "liquidacao": "7172125065",
        "empenho": "7172125590/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 632.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 632.0
  },
  {
    "nome": "DANIEL PERES SANTOS",
    "cpf": "04902873281",
    "processoSei": "2817.013048.00153/2023-13",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126027/2023",
        "liquidacao": "7172125150",
        "empenho": "7172125691/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 218.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 218.0
  },
  {
    "nome": "DANIEL RIRCHID NERY RODRIGUES",
    "cpf": "08101844279",
    "processoSei": "2817.013047.00281/2023-50",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125789/2023",
        "liquidacao": "7172124923",
        "empenho": "7172125457/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "DAVI DE OLIVEIRA COSTA",
    "cpf": "02919250221",
    "processoSei": "2817.013038.00421/2023-07",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125745/2023",
        "liquidacao": "7172124880",
        "empenho": "7172125411/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "DAVID DE OLIVEIRA BENEVENUTO",
    "cpf": "08041769225",
    "processoSei": "2817.013046.00368/2023-28",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126142/2023",
        "liquidacao": "7172125249",
        "empenho": "7172125782/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "DAVY MATOS DA SILVA",
    "cpf": "07853957254",
    "processoSei": "2817.013036.00166/2023-96",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126139/2023",
        "liquidacao": "7172125245",
        "empenho": "7172125778/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "DEBORA DOS SANTOS DA SILVA",
    "cpf": "09846774290",
    "processoSei": "2817.013042.00096/2023-60",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125771/2023",
        "liquidacao": "7172124906",
        "empenho": "7172125440/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "DEBORA QUETEHUARI DE MELO",
    "cpf": "02940269246",
    "processoSei": "2817.013047.00123/2023-08",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125709/2023",
        "liquidacao": "7172124851",
        "empenho": "7172125386/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "DENISE PAULA CRUZ DE OLIVEIRA AQUINO",
    "cpf": "01253671206",
    "processoSei": "2817.013032.00452/2023-55",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125999/2023",
        "liquidacao": "7172125124",
        "empenho": "7172125660/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 532.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 532.0
  },
  {
    "nome": "DHAMYLLA KARLA CARVALHO DE FREITAS BARRE",
    "cpf": "10756951208",
    "processoSei": "2817.013032.00453/2023-08",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125844/2023",
        "liquidacao": "7172124971",
        "empenho": "7172125506/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 572.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 572.0
  },
  {
    "nome": "DHEMILE DE SOUZA MARQUES",
    "cpf": "04443213228",
    "processoSei": "2817.013046.00433/2023-15",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126072/2023",
        "liquidacao": "7172125185",
        "empenho": "7172125744/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "DHIEGO OLIVEIRA DA SILVA",
    "cpf": "04183817200",
    "processoSei": "2817.013032.00258/2023-70",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125883/2023",
        "liquidacao": "7172125009",
        "empenho": "7172125539/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "DIANE MELO SILVA",
    "cpf": "08776907236",
    "processoSei": "2817.013046.00408/2023-31",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125799/2023",
        "liquidacao": "7172124934",
        "empenho": "7172125466/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "DIEGO DORNELES LEITE",
    "cpf": "07011122206",
    "processoSei": "2817.013047.00284/2023-93",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125748/2023",
        "liquidacao": "7172124883",
        "empenho": "7172125414/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "DIEMERSON MOURÃO DOS SANTOS",
    "cpf": "06401956283",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126062/2023",
        "liquidacao": "7172125191",
        "empenho": "7172125707/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 250.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 250.0
  },
  {
    "nome": "DILCELENE OLIVEIRA DA CRUZ",
    "cpf": "10198698283",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126039/2023",
        "liquidacao": "7172125162",
        "empenho": "7172125702/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "DOUGLAS RENEG DA SILVA FERNANDES",
    "cpf": "06898512277",
    "processoSei": "2817.013042.00061/2023-21",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125918/2023",
        "liquidacao": "7172125042",
        "empenho": "7172125577/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "DYEMERSON DE SOUZA GUIMARAES",
    "cpf": "05491779229",
    "processoSei": "2817.013047.00119/2023-31",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125603/2023",
        "liquidacao": "7172124792",
        "empenho": "7172125294/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "EDIGLEI SANTOS DE MACEDO",
    "cpf": "10182534243",
    "processoSei": "2817.013047.00120/2023-66",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125730/2023",
        "liquidacao": "7172124866",
        "empenho": "7172125398/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "EDINEI ALVES DE OLIVEIRA",
    "cpf": "06180599203",
    "processoSei": "2817.013047.00356/2023-01",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125744/2023",
        "liquidacao": "7172124879",
        "empenho": "7172125410/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "EDIVALDO LOPES DA SILVA JUNIOR",
    "cpf": "06616578259",
    "processoSei": "2817.013047.00231/2023-72",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126003/2023",
        "liquidacao": "7172125129",
        "empenho": "7172125669/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "EDUARDA DA COSTA FREITAS",
    "cpf": "02284916228",
    "processoSei": "2817.013047.00273/2023-11",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125891/2023",
        "liquidacao": "7172125017",
        "empenho": "7172125549/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "EDUARDO DA SILVA FREIRE",
    "cpf": "02903914230",
    "processoSei": "2817.013036.00168/2023-85",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125814/2023",
        "liquidacao": "7172124941",
        "empenho": "7172125472/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "EDUARDO HUBERTT DA SILVA MELO",
    "cpf": "01244550264",
    "processoSei": "2817.013038.00576/2023-35",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126138/2023",
        "liquidacao": "7172125244",
        "empenho": "7172125777/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "EDUARDO NASCIMENTO DA SILVA",
    "cpf": "09728612206",
    "processoSei": "2817.013046.00328/2023-86",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125598/2023",
        "liquidacao": "7172124789",
        "empenho": "7172125283/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 278.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 278.0
  },
  {
    "nome": "EDUARDO SACRAMENTO LIMA DE CASTRO",
    "cpf": "06316627238",
    "processoSei": "2817.013042.00058/2023-15",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125767/2023",
        "liquidacao": "7172124902",
        "empenho": "7172125434/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "EDUARDO SEBASTIÃO BOAVENTURA DE MEDEIROS",
    "cpf": "01376282267",
    "processoSei": "2817.013042.00046/2023-82",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125651/2023",
        "liquidacao": "7172124816",
        "empenho": "7172125319/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "EDUARDO TAVARES DE OLIVEIRA",
    "cpf": "10725729236",
    "processoSei": "2817.013046.00409/2023-86",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126061/2023",
        "liquidacao": "7172125183",
        "empenho": "7172125742/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 280.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 280.0
  },
  {
    "nome": "EFRAIM DE BRITO FERREIRA",
    "cpf": "02798537266",
    "processoSei": "2817.013042.00129/2023-71",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126175/2023",
        "liquidacao": "7172125275",
        "empenho": "7172125833/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ELAYANE CAVALCANTE DA SILVA",
    "cpf": "09750491270",
    "processoSei": "2817.013047.00285/2023-38",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125831/2023",
        "liquidacao": "7172124958",
        "empenho": "7172125493/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 110.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 110.0
  },
  {
    "nome": "ELIAS DA SILVA SALES",
    "cpf": "07561608209",
    "processoSei": "2817.013036.00169/2023-20",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125728/2023",
        "liquidacao": "7172124864",
        "empenho": "7172125396/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ELISSANDRO SILVA GOMES",
    "cpf": "03567212214",
    "processoSei": "2817.013046.00397/2023-90",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125977/2023",
        "liquidacao": "7172125103",
        "empenho": "7172125642/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 400.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 400.0
  },
  {
    "nome": "ELOISA LIMA DA SILVA",
    "cpf": "09428904260",
    "processoSei": "2817.013047.00124/2023-44",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126057/2023",
        "liquidacao": "7172125180",
        "empenho": "7172125739/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ELYANO ROCHA SOUZA",
    "cpf": "05117821289",
    "processoSei": "2817.013032.00289/2023-21",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125832/2023",
        "liquidacao": "7172124959",
        "empenho": "7172125494/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "EMANOELA WYLLARA CARDOSO OLIVEIRA",
    "cpf": "06075064230",
    "processoSei": "2817.013047.00125/2023-99",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126145/2023",
        "liquidacao": "7172125253",
        "empenho": "7172125786/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "EMANUELY GARCIA DE SOUZA",
    "cpf": "07335983231",
    "processoSei": "2817.013032.00260/2023-49",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125845/2023",
        "liquidacao": "7172124972",
        "empenho": "7172125507/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "EMERSON GOMES PEREIRA",
    "cpf": "70253438209",
    "processoSei": "2817.013047.00313/2023-17",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126140/2023",
        "liquidacao": "7172125246",
        "empenho": "7172125779/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "EMILY KETTELEM SILVA CAVALCANTE",
    "cpf": "10181861232",
    "processoSei": "2817.013047.00126/2023-33",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125746/2023",
        "liquidacao": "7172124881",
        "empenho": "7172125412/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "ERICA LIMA DE SOUZA",
    "cpf": "08185009210",
    "processoSei": "2817.013047.00259/2023-18",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125801/2023",
        "liquidacao": "7172124936",
        "empenho": "7172125468/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ERICK VINICIUS DE FREITAS PEREIRA",
    "cpf": "01730192262",
    "processoSei": "2817.013038.00424/2023-32",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125749/2023",
        "liquidacao": "7172124884",
        "empenho": "7172125416/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "ERIEL SANTOS DE MACEDO",
    "cpf": "09984430260",
    "processoSei": "2817.013047.00127/2023-88",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126084/2023",
        "liquidacao": "7172125187",
        "empenho": "7172125746/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ESAU YURI SENA DA SILVA PAIVA",
    "cpf": "03745115279",
    "processoSei": "",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125783/2023",
        "liquidacao": "7172124919",
        "empenho": "7172125449/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "ESTEFANY SANTANA",
    "cpf": "10518035271",
    "processoSei": "2817.013047.00157/2023-94",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125684/2023",
        "liquidacao": "7172124835",
        "empenho": "7172125365/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ESTER SILVA FERREIRA",
    "cpf": "05062679206",
    "processoSei": "2817.013032.00431/2023-30",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125754/2023",
        "liquidacao": "7172124889",
        "empenho": "7172125424/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ESTHEFANI DA COSTA BARRETO",
    "cpf": "05960569230",
    "processoSei": "2817.013046.00370/2023-05",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125874/2023",
        "liquidacao": "7172125000",
        "empenho": "7172125534/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "EVELLY TARGINO DE SOUZA",
    "cpf": "10328887250",
    "processoSei": "2817.013042.00133/2023-30",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125721/2023",
        "liquidacao": "7172124857",
        "empenho": "7172125391/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 140.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 140.0
  },
  {
    "nome": "EVELYN GEOVANNA SILVA VIEIRA",
    "cpf": "10409286257",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126079/2023",
        "liquidacao": "7172125215",
        "empenho": "7172125722/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "EVILIN ESTHEFANELLY MARTINS ALVES",
    "cpf": "10121174212",
    "processoSei": "2817.013047.00130/2023-00",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125601/2023",
        "liquidacao": "7172124791",
        "empenho": "7172125293/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "EVILY RONDON DA SILVA",
    "cpf": "06298336214",
    "processoSei": "2817.013046.00381/2023-87",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125997/2023",
        "liquidacao": "7172125123",
        "empenho": "7172125655/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "EZECHIAS DE MELO FERREIRA GOMES",
    "cpf": "10396296289",
    "processoSei": "2817.013038.00577/2023-80",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126161/2023",
        "liquidacao": "7172125265",
        "empenho": "7172125795/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "FABRICIO ESTEVAO PINHEIRO MAGALHAES KAXI",
    "cpf": "70458031259",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125908/2023",
        "liquidacao": "7172125033",
        "empenho": "7172125565/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "FAENNY ELZA MORAES DE SOUZA",
    "cpf": "06485181245",
    "processoSei": "2817.013032.00408/2023-45",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126143/2023",
        "liquidacao": "7172125250",
        "empenho": "7172125783/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 404.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 404.0
  },
  {
    "nome": "FELIPE CIPRIANO DO CARMO",
    "cpf": "10348323280",
    "processoSei": "2817.013047.00179/2023-54",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125766/2023",
        "liquidacao": "7172124901",
        "empenho": "7172125436/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "FELIPE COSTA CORDOVIL",
    "cpf": "06704257292",
    "processoSei": "2817.013047.00180/2023-89",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126112/2023",
        "liquidacao": "7172125226",
        "empenho": "7172125762/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "FELIPE KAUA LEAO DE BRITO",
    "cpf": "03311383281",
    "processoSei": "2817.013047.00131/2023-46",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125656/2023",
        "liquidacao": "7172124821",
        "empenho": "7172125339/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "FERNANDA DA SILVA LIMA",
    "cpf": "08415835280",
    "processoSei": "2817.013046.00359/2023-37",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125711/2023",
        "liquidacao": "7172124853",
        "empenho": "7172125388/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 400.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 400.0
  },
  {
    "nome": "FERNANDA NATIELE RODRIGUES SILVA",
    "cpf": "10032059256",
    "processoSei": "2817.013038.00430/2023-90",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125786/2023",
        "liquidacao": "7172124920",
        "empenho": "7172125453/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "FERNANDA SILVA VIEIRA",
    "cpf": "10111152208",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125903/2023",
        "liquidacao": "7172125028",
        "empenho": "7172125560/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 300.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 300.0
  },
  {
    "nome": "FERNANDA VITÓRIA RODRIGUES CAPISTRANO",
    "cpf": "05460524288",
    "processoSei": "2817.013042.00047/2023-27",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125722/2023",
        "liquidacao": "7172124858",
        "empenho": "7172125390/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "FERNANDO SILVA DOS SANTOS",
    "cpf": "07075520288",
    "processoSei": "2817.013046.00312/2023-73",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126047/2023",
        "liquidacao": "7172125170",
        "empenho": "7172125729/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "FISTHIANES PEDRINA LUCAS DA SILVA",
    "cpf": "70540082279",
    "processoSei": "2817.013047.00138/2023-68",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125658/2023",
        "liquidacao": "7172124823",
        "empenho": "7172125346/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "FLÁVIA FERNANDES MOTA",
    "cpf": "08431008261",
    "processoSei": "2817.013036.00174/2023-32",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125781/2023",
        "liquidacao": "7172124915",
        "empenho": "7172125448/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 120.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 120.0
  },
  {
    "nome": "FRANCIVANIA DOS SANTOS PIRES",
    "cpf": "10194496244",
    "processoSei": "2817.013047.00233/2023-61",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126005/2023",
        "liquidacao": "7172125131",
        "empenho": "7172125671/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "GABRIEL DA SILVA PESSOA",
    "cpf": "07496703206",
    "processoSei": "2817.013047.00325/2023-41",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126023/2023",
        "liquidacao": "7172125147",
        "empenho": "7172125684/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "GABRIEL DE SOUZA NASCIMENTO",
    "cpf": "10222174293",
    "processoSei": "2817.013038.00434/2023-78",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125819/2023",
        "liquidacao": "7172124946",
        "empenho": "7172125477/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "GABRIEL HENRIQUE OLIVEIRA PINHO",
    "cpf": "04226132238",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125986/2023",
        "liquidacao": "7172125113",
        "empenho": "7172125634/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "GABRIEL MARQUES FERNANDES",
    "cpf": "07079636213",
    "processoSei": "2817.013038.00487/2023-99",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125950/2023",
        "liquidacao": "7172125076",
        "empenho": "7172125610/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "GABRIEL PURO DE OLIVEIRA LOPES",
    "cpf": "05625988200",
    "processoSei": "2817.013047.00234/2023-14",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125893/2023",
        "liquidacao": "7172125019",
        "empenho": "7172125550/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "GABRIEL RAMOS PINHEIRO",
    "cpf": "70111535271",
    "processoSei": "2817.013047.00196/2023-91",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125792/2023",
        "liquidacao": "7172124926",
        "empenho": "7172125459/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "GABRIEL RODRIGUES DE LIMA",
    "cpf": "07932293243",
    "processoSei": "2817.013047.00310/2023-83",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126011/2023",
        "liquidacao": "7172125137",
        "empenho": "7172125677/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "GABRIEL VASCONCELOS COIMBRA",
    "cpf": "06757852276",
    "processoSei": "2817.013038.00580/2023-01",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126053/2023",
        "liquidacao": "7172125176",
        "empenho": "7172125736/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "GABRIELA KHRISTYE DA SILVEIRA LIMA",
    "cpf": "06284675240",
    "processoSei": "",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125884/2023",
        "liquidacao": "7172125010",
        "empenho": "7172125541/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "GABRIELLE FABRICIO ARZA FIGUEIREDO",
    "cpf": "03703632216",
    "processoSei": "2817.013032.00262/2023-38",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125890/2023",
        "liquidacao": "7172125016",
        "empenho": "7172125547/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "GABRIELLY MESQUITA DA COSTA",
    "cpf": "05209925200",
    "processoSei": "2817.013032.00290/2023-55",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125703/2023",
        "liquidacao": "7172124844",
        "empenho": "7172125376/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "GEAN VITOR CAVICCHIOLI DOS SANTOS",
    "cpf": "07365525290",
    "processoSei": "2817.013047.00140/2023-37",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125700/2023",
        "liquidacao": "7172124841",
        "empenho": "7172125373/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "GEOVANA SOUZA SAMPAIO",
    "cpf": "07152130248",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125981/2023",
        "liquidacao": "7172125108",
        "empenho": "7172125627/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "GEYSLA YASMIN DE ANDRADE SOUZA",
    "cpf": "02028716223",
    "processoSei": "2817.013038.00435/2023-12",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125958/2023",
        "liquidacao": "7172125083",
        "empenho": "7172125617/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "GHADIEL VICTOR DE ARAUJO MARTINS",
    "cpf": "03451065207",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125862/2023",
        "liquidacao": "7172124990",
        "empenho": "7172125520/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "GLEICE KELLY BRANDÃO DOS ANJOS",
    "cpf": "08509712255",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126076/2023",
        "liquidacao": "7172125212",
        "empenho": "7172125719/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "GLÓRIA FERNANDA DA SILVA BRITO",
    "cpf": "06537542219",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126075/2023",
        "liquidacao": "7172125209",
        "empenho": "7172125718/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "GUILHERME ARAUJO DE SOUZA",
    "cpf": "07580294206",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125991/2023",
        "liquidacao": "7172125118",
        "empenho": "7172125649/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "GUILHERME DE OLIVEIRA CAMARGO CABRAL",
    "cpf": "06544947202",
    "processoSei": "2817.013042.00139/2023-15",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125920/2023",
        "liquidacao": "7172125044",
        "empenho": "7172125579/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "GUILHERME DE SOUZA LESSA MARTINS",
    "cpf": "05148705248",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125899/2023",
        "liquidacao": "7172125024",
        "empenho": "7172125556/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "GUILHERME DE SOUZA SILVA",
    "cpf": "07624934299",
    "processoSei": "",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125935/2023",
        "liquidacao": "7172125066",
        "empenho": "7172125591/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 140.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 140.0
  },
  {
    "nome": "GUSTAVO COSTA BOA",
    "cpf": "08308775250",
    "processoSei": "2817.013047.00261/2023-89",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125947/2023",
        "liquidacao": "7172125073",
        "empenho": "7172125607/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "GUSTAVO KENNEDY MARTINS DA SILVA",
    "cpf": "08140339202",
    "processoSei": "",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125929/2023",
        "liquidacao": "7172125059",
        "empenho": "7172125582/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "GUSTAVO OLIVEIRA DA SILVA",
    "cpf": "06806208266",
    "processoSei": "2817.013032.00411/2023-69",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126118/2023",
        "liquidacao": "7172125231",
        "empenho": "7172125765/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 508.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 508.0
  },
  {
    "nome": "HAYME MESQUISTA DE LIMA",
    "cpf": "01326578219",
    "processoSei": "2817.013047.00347/2023-10",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125968/2023",
        "liquidacao": "7172125093",
        "empenho": "7172125630/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "HELOUISE KIWANNE AMORIM DE ARAUJO",
    "cpf": "03433287201",
    "processoSei": "",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126068/2023",
        "liquidacao": "7172125199",
        "empenho": "7172125712/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "HERCULE FERREIRA DA SILVA",
    "cpf": "09033026244",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125937/2023",
        "liquidacao": "7172125069",
        "empenho": "7172125594/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "HERMINIA HOLANDA VIEIRA",
    "cpf": "07015695227",
    "processoSei": "2817.013046.00049/2023-16",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125596/2023",
        "liquidacao": "7172124788",
        "empenho": "7172125280/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "HIERRY GOMES DE CARVALHO",
    "cpf": "06908806260",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125885/2023",
        "liquidacao": "7172125011",
        "empenho": "7172125542/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "HILARY ISABELE LIMA DA SILVA",
    "cpf": "06206739236",
    "processoSei": "2817.013046.00434/2023-60",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126107/2023",
        "liquidacao": "7172125223",
        "empenho": "7172125760/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "ILANA GABRIELLE DE OLIVEIRA BEZERRA",
    "cpf": "00689290217",
    "processoSei": "2817.013038.00437/2023-10",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125948/2023",
        "liquidacao": "7172125074",
        "empenho": "7172125608/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 130.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 130.0
  },
  {
    "nome": "ISAAC DE MELO LUCENA",
    "cpf": "05222457222",
    "processoSei": "2817.013047.00135/2023-24",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125773/2023",
        "liquidacao": "7172124908",
        "empenho": "7172125442/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "ISABEL CRISTINA DOS SANTOS BRASIL",
    "cpf": "04735249290",
    "processoSei": "2817.013032.00437/2023-15",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126120/2023",
        "liquidacao": "7172125233",
        "empenho": "7172125766/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ISABEL DE ALMEIDA LIMA",
    "cpf": "04121648250",
    "processoSei": "2817.013042.00033/2023-11",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125787/2023",
        "liquidacao": "7172124921",
        "empenho": "7172125456/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "ISABELE DA SILVA GUEDES",
    "cpf": "07089275213",
    "processoSei": "2817.013032.00325/2023-56",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126021/2023",
        "liquidacao": "7172125145",
        "empenho": "7172125683/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 270.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 270.0
  },
  {
    "nome": "ISABELE LOPES BARBOSA",
    "cpf": "06672660208",
    "processoSei": "2817.013042.00048/2023-71",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125906/2023",
        "liquidacao": "7172125031",
        "empenho": "7172125563/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "ISABELY FERNANDA ALVES DA SILVA",
    "cpf": "70377574201",
    "processoSei": "2817.013038.00488/2023-33",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126157/2023",
        "liquidacao": "7172125261",
        "empenho": "7172125791/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ISAC RIBEIRO MARTINS",
    "cpf": "06031135248",
    "processoSei": "2817.013038.00506/2023-87",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125964/2023",
        "liquidacao": "7172125090",
        "empenho": "7172125625/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ISAQUE CAMPOS ARAUJO",
    "cpf": "06993527200",
    "processoSei": "2817.013038.00554/2023-75",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126178/2023",
        "liquidacao": "7172125278",
        "empenho": "7172125849/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 100.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 100.0
  },
  {
    "nome": "ISRAEL MARTINS ALVES",
    "cpf": "01668850290",
    "processoSei": "",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126180/2023",
        "liquidacao": "7172125280",
        "empenho": "7172125858/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "ISTANLEY XAVIER DE LIMA",
    "cpf": "03032200237",
    "processoSei": "2817.013042.00051/2023-95",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125978/2023",
        "liquidacao": "7172125104",
        "empenho": "7172125645/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "ITALO GADELHA",
    "cpf": "09601525203",
    "processoSei": "2817.013047.00146/2023-12",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125706/2023",
        "liquidacao": "7172124848",
        "empenho": "7172125378/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "IVONILSON SOUZA DOS SANTOS",
    "cpf": "10140692207",
    "processoSei": "2817.013047.00136/2023-79",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125854/2023",
        "liquidacao": "7172124981",
        "empenho": "7172125518/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "IZABEL KETLEN COSTA GOMES",
    "cpf": "04867951285",
    "processoSei": "2817.013046.00335/2023-88",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125595/2023",
        "liquidacao": "7172124787",
        "empenho": "7172125279/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 268.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 268.0
  },
  {
    "nome": "IZABELLE VITORIA DA SILVA MEDEIROS",
    "cpf": "02725200202",
    "processoSei": "2817.013032.00326/2023-09",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126094/2023",
        "liquidacao": "7172125200",
        "empenho": "7172125751/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "JAINE GOMES DA COSTA",
    "cpf": "07447018210",
    "processoSei": "2817.013042.00101/2023-34",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125826/2023",
        "liquidacao": "7172124953",
        "empenho": "7172125488/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "JAMILE CORDEIRO DOS SANTOS",
    "cpf": "08510805296",
    "processoSei": "2817.013047.00137/2023-13",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125911/2023",
        "liquidacao": "7172125036",
        "empenho": "7172125567/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "JAMILLY VALÉRIA DA SILVA BARRETO",
    "cpf": "07430899285",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126060/2023",
        "liquidacao": "7172125188",
        "empenho": "7172125706/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "JANDE CARLOS MENDES PACHECO",
    "cpf": "06041763250",
    "processoSei": "2817.013038.00441/2023-70",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125780/2023",
        "liquidacao": "7172124914",
        "empenho": "7172125447/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "JAQUELINY OLIVEIRA DOS SANTOS",
    "cpf": "05417993204",
    "processoSei": "2817.013047.00184/2023-67",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125699/2023",
        "liquidacao": "7172124840",
        "empenho": "7172125372/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "JEAN WILLIAN DA SILVA SOUZA",
    "cpf": "10648386260",
    "processoSei": "2817.013038.00543/2023-95",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126064/2023",
        "liquidacao": "7172125184",
        "empenho": "7172125743/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "JEOVANE DE SOUZA PEREIRA",
    "cpf": "08508703210",
    "processoSei": "2817.013038.00442/2023-14",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125838/2023",
        "liquidacao": "7172124965",
        "empenho": "7172125500/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "JESSICA ROCHA PEREIRA",
    "cpf": "04096693260",
    "processoSei": "",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126069/2023",
        "liquidacao": "7172125204",
        "empenho": "7172125713/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "JHON KASSIO GUTIERREZ DA SILVA",
    "cpf": "70540523232",
    "processoSei": "2817.013047.00147/2023-59",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125633/2023",
        "liquidacao": "7172124806",
        "empenho": "7172125306/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "JHONATHAN DA SILVA NOGUEIRA",
    "cpf": "10351324275",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125936/2023",
        "liquidacao": "7172125067",
        "empenho": "7172125593/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 270.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 270.0
  },
  {
    "nome": "JHULY REFANY BRAGA DE SOUZA",
    "cpf": "08227838278",
    "processoSei": "",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125836/2023",
        "liquidacao": "7172124963",
        "empenho": "7172125498/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 512.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 512.0
  },
  {
    "nome": "JOAO ANDREI CORREIA DE ALMEIDA",
    "cpf": "07197437296",
    "processoSei": "2817.013046.00336/2023-22",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125657/2023",
        "liquidacao": "7172124822",
        "empenho": "7172125345/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 288.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 288.0
  },
  {
    "nome": "JOÃO LUCAS RIBEIRO DA SILVA",
    "cpf": "09492697270",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126040/2023",
        "liquidacao": "7172125163",
        "empenho": "7172125703/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "JOAO PEDRO DE ARAUJO",
    "cpf": "07839357229",
    "processoSei": "2817.013047.00315/2023-14",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126088/2023",
        "liquidacao": "7172125193",
        "empenho": "7172125749/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "JOAO VICTOR GOMES DE SOUSA",
    "cpf": "04530441237",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125944/2023",
        "liquidacao": "7172125068",
        "empenho": "7172125603/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "JOAO VICTOR TEIXEIRA BARBOSA",
    "cpf": "06993531224",
    "processoSei": "2817.013042.00081/2023-00",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125956/2023",
        "liquidacao": "7172125081",
        "empenho": "7172125615/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "JOAQUIM FARRAJ DE DE SOUZA SILVA",
    "cpf": "01869602200",
    "processoSei": "2817.013047.00148/2023-01",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125708/2023",
        "liquidacao": "7172124850",
        "empenho": "7172125384/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "JOAQUIM JUNIOR CASTRO DOS SANTOS",
    "cpf": "08057380292",
    "processoSei": "2817.013047.00236/2023-03",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126025/2023",
        "liquidacao": "7172125148",
        "empenho": "7172125685/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "JOAZ FERREIRA DE MORAIS BARROS",
    "cpf": "08110130224",
    "processoSei": "2817.013047.00237/2023-40",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126029/2023",
        "liquidacao": "7172125152",
        "empenho": "7172125692/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "JOEL DE ALMEIDA SILVA",
    "cpf": "07003984229",
    "processoSei": "2817.013047.00217/2023-79",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125756/2023",
        "liquidacao": "7172124891",
        "empenho": "7172125426/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "JOELSON PEREIRA DE FREITAS",
    "cpf": "03003888293",
    "processoSei": "2817.013047.00211/2023-00",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125752/2023",
        "liquidacao": "7172124887",
        "empenho": "7172125419/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "JOSÉ ADRIAN MELO DE SOUZA",
    "cpf": "04628744270",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126063/2023",
        "liquidacao": "7172125192",
        "empenho": "7172125708/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "JOSE EDUARDO BARRETO ALBUQUERQUE",
    "cpf": "00814122230",
    "processoSei": "",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125863/2023",
        "liquidacao": "7172124991",
        "empenho": "7172125521/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "JOSE LIMA DA SILVA NETO",
    "cpf": "08452117221",
    "processoSei": "2817.013047.00239/2023-39",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125939/2023",
        "liquidacao": "7172125055",
        "empenho": "7172125598/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "JOSÉ TAILAN LIMA DE OLIVEIRA",
    "cpf": "08803874240",
    "processoSei": "2817.013046.00374/2023-85",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125784/2023",
        "liquidacao": "7172124917",
        "empenho": "7172125451/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "JULIANA RIBEIRO DE SOUZA",
    "cpf": "09219027275",
    "processoSei": "",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126083/2023",
        "liquidacao": "7172125219",
        "empenho": "7172125725/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "KAÍKE EMANUEL RODRIGUES DE OLIVEIRA",
    "cpf": "05411438241",
    "processoSei": "2817.013046.00314/2023-62",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126035/2023",
        "liquidacao": "7172125158",
        "empenho": "7172125698/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 256.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 256.0
  },
  {
    "nome": "KAÍNA BIANCA DE SOUZA LIMA",
    "cpf": "07817158223",
    "processoSei": "2817.013038.00587/2023-15",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126152/2023",
        "liquidacao": "7172125259",
        "empenho": "7172125790/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "KAIO DE LIMA NASCIMENTO",
    "cpf": "07339299238",
    "processoSei": "2817.013038.00588/2023-60",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126179/2023",
        "liquidacao": "7172125279",
        "empenho": "7172125853/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "KAIRO RAMOS CABRAL",
    "cpf": "09494233271",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125867/2023",
        "liquidacao": "7172124994",
        "empenho": "7172125528/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "KALYKY EDUARDO BRASIL",
    "cpf": "07538114211",
    "processoSei": "2817.013047.00241/2023-16",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126098/2023",
        "liquidacao": "7172125210",
        "empenho": "7172125754/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "KAMILLY LOPES DANTAS",
    "cpf": "08432339237",
    "processoSei": "2817.013042.00108/2023-56",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125994/2023",
        "liquidacao": "7172125119",
        "empenho": "7172125652/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 60.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 60.0
  },
  {
    "nome": "KARLA REGINA DA SILVA RIBEIRO",
    "cpf": "06328544219",
    "processoSei": "2817.013042.00054/2023-29",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125972/2023",
        "liquidacao": "7172125098",
        "empenho": "7172125637/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "KASSIA DE SOUZA SILVA",
    "cpf": "03133129236",
    "processoSei": "",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125989/2023",
        "liquidacao": "7172125116",
        "empenho": "7172125644/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 120.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 120.0
  },
  {
    "nome": "KAUA LEAO DA SILVA",
    "cpf": "07835185288",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125879/2023",
        "liquidacao": "7172125005",
        "empenho": "7172125536/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 60.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 60.0
  },
  {
    "nome": "KAUAN ALVES BANDEIRA",
    "cpf": "02678351246",
    "processoSei": "2817.013047.00240/2023-63",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125652/2023",
        "liquidacao": "7172124815",
        "empenho": "7172125318/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "KAUAN NASCIMENTO DE LIMA",
    "cpf": "10275796205",
    "processoSei": "2817.013042.00062/2023-75",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125702/2023",
        "liquidacao": "7172124843",
        "empenho": "7172125375/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "KAUANE LIMA BARBOSA",
    "cpf": "05457298230",
    "processoSei": "2817.013032.00294/2023-33",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126086/2023",
        "liquidacao": "7172125190",
        "empenho": "7172125748/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "KAUE VICTOR COUTINHO BITTENCOURT",
    "cpf": "70539341282",
    "processoSei": "2817.013047.00265/2023-67",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125927/2023",
        "liquidacao": "7172125052",
        "empenho": "7172125595/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "KAYNA BARROS TEXEIRA",
    "cpf": "09081989227",
    "processoSei": "2817.013047.00266/2023-10",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125796/2023",
        "liquidacao": "7172124931",
        "empenho": "7172125463/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "KAYO ROCHA DE MESQUITA",
    "cpf": "02591211264",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125912/2023",
        "liquidacao": "7172125037",
        "empenho": "7172125569/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "KELLY JAIANE VALLE DE OLIVEIRA",
    "cpf": "08226129257",
    "processoSei": "2817.013032.00415/2023-47",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126124/2023",
        "liquidacao": "7172125235",
        "empenho": "7172125768/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 372.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 372.0
  },
  {
    "nome": "KEMYNNY RITCHELY DA SILVA COSTA",
    "cpf": "02769759280",
    "processoSei": "2817.013047.00142/2023-26",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125850/2023",
        "liquidacao": "7172124977",
        "empenho": "7172125512/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "KESSIA OLEGARIO DA SILVA",
    "cpf": "70696547236",
    "processoSei": "2817.013038.00589/2023-12",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126160/2023",
        "liquidacao": "7172125264",
        "empenho": "7172125794/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "KETLEN CRISTINA DE MACEDO MARQUES",
    "cpf": "08428146209",
    "processoSei": "2817.013036.00183/2023-23",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125856/2023",
        "liquidacao": "7172124983",
        "empenho": "7172125524/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 140.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 140.0
  },
  {
    "nome": "KEULY VITORIA MOREIRA DE SOUSA",
    "cpf": "10769936210",
    "processoSei": "2817.013042.00069/2023-97",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125995/2023",
        "liquidacao": "7172125120",
        "empenho": "7172125653/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "KEVEN LUCAS SOUZA DA CUNHA",
    "cpf": "07205150256",
    "processoSei": "2817.013047.00160/2022-27",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125639/2023",
        "liquidacao": "7172124808",
        "empenho": "7172125311/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "LAIS DO NASCIMENTO MORAES DE MELO",
    "cpf": "06959524202",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125907/2023",
        "liquidacao": "7172125032",
        "empenho": "7172125564/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "LAIZA SILVA DE OLIVEIRA",
    "cpf": "06522562286",
    "processoSei": "2817.013047.00218/2023-13",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125731/2023",
        "liquidacao": "7172124867",
        "empenho": "7172125399/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "LARA IZABELLE ENES SILVA",
    "cpf": "11444141481",
    "processoSei": "2817.013046.00350/2023-26",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125591/2023",
        "liquidacao": "7172124783",
        "empenho": "7172125274/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 744.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 744.0
  },
  {
    "nome": "LARA MARIA ZABALA VIEIRA",
    "cpf": "07679593299",
    "processoSei": "2817.013042.00085/2023-80",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125970/2023",
        "liquidacao": "7172125096",
        "empenho": "7172125635/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "LARISSA DOS SANTOS XIMENES",
    "cpf": "08269705241",
    "processoSei": "2817.013036.00185/2023-12",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126164/2023",
        "liquidacao": "7172125267",
        "empenho": "7172125816/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "LAUANE ARAUJO DA SILVA",
    "cpf": "09734154281",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126085/2023",
        "liquidacao": "7172125189",
        "empenho": "7172125747/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "LAURA VITTORAZZI TESSINARI SOUZA",
    "cpf": "07209295208",
    "processoSei": "2817.013038.00590/2023-39",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126144/2023",
        "liquidacao": "7172125252",
        "empenho": "7172125784/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "LAYSSA VITORIA NASCIMENTO SOUZA",
    "cpf": "05548065254",
    "processoSei": "2817.013047.00327/2023-31",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126176/2023",
        "liquidacao": "7172125276",
        "empenho": "7172125840/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "LEANDRO SANTOS FREITAS",
    "cpf": "08490809240",
    "processoSei": "",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125859/2023",
        "liquidacao": "7172124987",
        "empenho": "7172125514/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "LETICIA ALVES REGO",
    "cpf": "08862963238",
    "processoSei": "2817.013032.00416/2023-91",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126136/2023",
        "liquidacao": "7172125243",
        "empenho": "7172125774/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 564.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 564.0
  },
  {
    "nome": "LETICIA DOS SANTOS VENTURA",
    "cpf": "70260560260",
    "processoSei": "2817.013047.00292/2023-30",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125620/2023",
        "liquidacao": "7172124796",
        "empenho": "7172125298/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "LETICIA SOUZA DA SILVA",
    "cpf": "01278985220",
    "processoSei": "",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125880/2023",
        "liquidacao": "7172125006",
        "empenho": "7172125537/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "LETICIA VITORIA LOPES DE OLIVEIRA",
    "cpf": "08854791229",
    "processoSei": "2817.013046.00315/2023-15",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126033/2023",
        "liquidacao": "7172125156",
        "empenho": "7172125696/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 296.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 296.0
  },
  {
    "nome": "LIA REBECA DA SILVA BATISTA",
    "cpf": "02580669205",
    "processoSei": "2817.013032.00779/2023-27",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125872/2023",
        "liquidacao": "7172124999",
        "empenho": "7172125533/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "LILIANE LIMA DA SILVA",
    "cpf": "08068863230",
    "processoSei": "2817.013046.00417/2023-22",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125941/2023",
        "liquidacao": "7172125058",
        "empenho": "7172125600/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "LORRANA COELHO RODRIGUES",
    "cpf": "04586827211",
    "processoSei": "2817.013046.00436/2023-59",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126149/2023",
        "liquidacao": "7172125256",
        "empenho": "7172125788/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "LUAN ISAAC BRITO DO NASCIMENTO",
    "cpf": "06545906216",
    "processoSei": "2817.013042.00100/2023-90",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126099/2023",
        "liquidacao": "7172125211",
        "empenho": "7172125755/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "LUANA MARINHO TUESTE",
    "cpf": "08985425293",
    "processoSei": "2817.013047.00143/2023-71",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125630/2023",
        "liquidacao": "7172124803",
        "empenho": "7172125303/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "LUCAS EDUARDO OLIVEIRA E SILVA",
    "cpf": "01786355299",
    "processoSei": "2817.013046.00376/2023-74",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126019/2023",
        "liquidacao": "7172125144",
        "empenho": "7172125682/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 300.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 300.0
  },
  {
    "nome": "LUCAS GABRIEL LEAO DE BRITO",
    "cpf": "03311370201",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125901/2023",
        "liquidacao": "7172125026",
        "empenho": "7172125558/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "LUCIANA FERNANDES DA SILVA",
    "cpf": "04423257203",
    "processoSei": "2817.013047.00293/2023-84",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125846/2023",
        "liquidacao": "7172124973",
        "empenho": "7172125508/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "LUCIANO DA SILVA SANTOS",
    "cpf": "10041593235",
    "processoSei": "",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125984/2023",
        "liquidacao": "7172125111",
        "empenho": "7172125631/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "LUDIMILA DA COSTA CAETANO",
    "cpf": "08873689213",
    "processoSei": "2817.013038.00559/2023-06",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125843/2023",
        "liquidacao": "7172124970",
        "empenho": "7172125505/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "LUDMILA DE SOUZA SILVA",
    "cpf": "10546021239",
    "processoSei": "2817.013047.00203/2023-55",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125827/2023",
        "liquidacao": "7172124954",
        "empenho": "7172125489/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "LUIS FELIPE ALMEIDA DE ALENCAR",
    "cpf": "03817447280",
    "processoSei": "2817.013032.00333/2023-01",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125996/2023",
        "liquidacao": "7172125122",
        "empenho": "7172125654/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "LUIS HENRIQUE LIMA DE SOUSA DA SILVA",
    "cpf": "02690166275",
    "processoSei": "2817.013032.00677/2023-10",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125957/2023",
        "liquidacao": "7172125082",
        "empenho": "7172125616/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 60.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 60.0
  },
  {
    "nome": "LUIS MIGUEL ACHAD LAURA",
    "cpf": "09097448239",
    "processoSei": "2817.013047.00317/2023-03",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126171/2023",
        "liquidacao": "7172125272",
        "empenho": "7172125820/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "LUIZ EDUARDO DE MOURA MACIEL",
    "cpf": "08508812264",
    "processoSei": "2817.013038.00450/2023-61",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125632/2023",
        "liquidacao": "7172124805",
        "empenho": "7172125304/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "LUIZ FERNANDO SILVA DE OLIVEIRA",
    "cpf": "01782555218",
    "processoSei": "2817.013046.00437/2023-01",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126127/2023",
        "liquidacao": "7172125237",
        "empenho": "7172125769/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "LUSIANE MONTEIRO BARROSO",
    "cpf": "09702447208",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126038/2023",
        "liquidacao": "7172125161",
        "empenho": "7172125701/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "LUZIELLER MATOS HYDALL",
    "cpf": "07877754280",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125990/2023",
        "liquidacao": "7172125117",
        "empenho": "7172125646/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "MANUELA MENDONÇA PEREIRA",
    "cpf": "10505603292",
    "processoSei": "2817.013032.00295/2023-88",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125647/2023",
        "liquidacao": "7172124811",
        "empenho": "7172125315/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "MANUELA MIRANDA DE OLIVEIRA",
    "cpf": "06222906222",
    "processoSei": "2817.013047.00220/2023-92",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125852/2023",
        "liquidacao": "7172124979",
        "empenho": "7172125516/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "MARCELA SOARES PASSAMANI",
    "cpf": "06811818263",
    "processoSei": "2817.013047.00221/2023-37",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125888/2023",
        "liquidacao": "7172125014",
        "empenho": "7172125545/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "MÁRCIA NOGUEIRA DA COSTA",
    "cpf": "08129891204",
    "processoSei": "2817.013046.00384/2023-11",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126056/2023",
        "liquidacao": "7172125179",
        "empenho": "7172125738/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "MARCO ANTONIO MARTINS DA SILVA ACOSTA",
    "cpf": "03775773240",
    "processoSei": "2817.013042.00074/2023-08",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125712/2023",
        "liquidacao": "7172124854",
        "empenho": "7172125389/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "MARCOS FERNANDO REGO DA COSTA",
    "cpf": "05560856207",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125881/2023",
        "liquidacao": "7172125007",
        "empenho": "7172125538/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "MARCOS PAULO MIRANDA SALES",
    "cpf": "05350027263",
    "processoSei": "2817.013047.00305/2023-71",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125648/2023",
        "liquidacao": "7172124812",
        "empenho": "7172125316/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "MARCOS VINICIOS MOTA DE ARAUJO",
    "cpf": "07251334224",
    "processoSei": "2817.013042.00053/2023-84",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126010/2023",
        "liquidacao": "7172125136",
        "empenho": "7172125676/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "MARIA CARICIA LIMA DE OLIVEIRA",
    "cpf": "09306440260",
    "processoSei": "2817.013046.00420/2023-46",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126122/2023",
        "liquidacao": "7172125234",
        "empenho": "7172125767/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 290.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 290.0
  },
  {
    "nome": "MARIA CLARA VIANA GADELHA",
    "cpf": "04372578270",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126090/2023",
        "liquidacao": "7172125195",
        "empenho": "7172125750/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 260.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 260.0
  },
  {
    "nome": "MARIA EDUARDA DANTAS CARNEIRO",
    "cpf": "07062503207",
    "processoSei": "2817.013038.00591/2023-83",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126009/2023",
        "liquidacao": "7172125133",
        "empenho": "7172125675/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "MARIA EDUARDA MIRANDA LOPES DE OLIVEIRA",
    "cpf": "02169464255",
    "processoSei": "2817.013047.00154/2023-51",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125785/2023",
        "liquidacao": "7172124918",
        "empenho": "7172125452/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "MARIA GABRIELA LOPES DA SILVA",
    "cpf": "71279243252",
    "processoSei": "2817.013047.00156/2023-40",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125645/2023",
        "liquidacao": "7172124809",
        "empenho": "7172125313/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "MARIA GABRIELE AZEVEDO SILVA",
    "cpf": "70436256290",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126070/2023",
        "liquidacao": "7172125205",
        "empenho": "7172125714/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "MARIA LORRANY LEITE DE SOUZA",
    "cpf": "07070732279",
    "processoSei": "2817.013036.00188/2023-56",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126148/2023",
        "liquidacao": "7172125257",
        "empenho": "7172125789/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "MARIA LUIZA PAIVA CUNHA",
    "cpf": "04434107208",
    "processoSei": "2817.013032.00563/2023-61",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126001/2023",
        "liquidacao": "7172125127",
        "empenho": "7172125666/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 250.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 250.0
  },
  {
    "nome": "MARIANA OLIVEIRA DINIZ",
    "cpf": "01927440203",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125922/2023",
        "liquidacao": "7172125047",
        "empenho": "7172125584/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "MARYANA BORER DA SILVA",
    "cpf": "10649729269",
    "processoSei": "2817.013047.00145/2023-60",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126017/2023",
        "liquidacao": "7172125142",
        "empenho": "7172125681/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "MATEUS DE SOUZA CASSIMIRO JUNIOR",
    "cpf": "09732628260",
    "processoSei": "2817.013047.00296/2023-18",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125975/2023",
        "liquidacao": "7172125100",
        "empenho": "7172125639/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "MATHEUS BORER DA SILVA",
    "cpf": "10204690218",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126036/2023",
        "liquidacao": "7172125159",
        "empenho": "7172125699/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "MEVANNY VITORIA DE FREITAS QUEIROZ",
    "cpf": "05686915202",
    "processoSei": "2817.013042.00086/2023-24",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125910/2023",
        "liquidacao": "7172125035",
        "empenho": "7172125568/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "MICAELE SOUZA DA COSTA",
    "cpf": "10651966280",
    "processoSei": "2817.013038.00507/2023-21",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125608/2023",
        "liquidacao": "7172124793",
        "empenho": "7172125295/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "MIKAEL DE LIMA DA SILVA",
    "cpf": "10721997260",
    "processoSei": "2817.013047.00314/2023-61",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126052/2023",
        "liquidacao": "7172125175",
        "empenho": "7172125735/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "MILENA HILLARY CUNHA DE OLIVEIRA",
    "cpf": "07126356293",
    "processoSei": "2817.013047.00190/2023-14",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125628/2023",
        "liquidacao": "7172124800",
        "empenho": "7172125301/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "MIRELA ALCANTARA SOARES",
    "cpf": "02618359208",
    "processoSei": "2817.013032.00419/2023-25",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125726/2023",
        "liquidacao": "7172124862",
        "empenho": "7172125394/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 528.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 528.0
  },
  {
    "nome": "MIRELLA SOUZA BOAVENTURA",
    "cpf": "04589603225",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125861/2023",
        "liquidacao": "7172124989",
        "empenho": "7172125517/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "MIRELLY LAUANY DIAS LIRA",
    "cpf": "08891631205",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126037/2023",
        "liquidacao": "7172125160",
        "empenho": "7172125700/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "MOACIR ARTHUR FERREIRA DE SOUZA",
    "cpf": "04646840219",
    "processoSei": "2817.013047.00303/2023-81",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125822/2023",
        "liquidacao": "7172124949",
        "empenho": "7172125484/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "MONICA CAVALCANTE NUNES",
    "cpf": "08332735238",
    "processoSei": "2817.013047.00152/2023-61",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125866/2023",
        "liquidacao": "7172124986",
        "empenho": "7172125527/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "NAIELE LETÍCIA MARTINS ARAÚJO",
    "cpf": "08732851235",
    "processoSei": "2817.013046.00317/2023-04",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125768/2023",
        "liquidacao": "7172124903",
        "empenho": "7172125437/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  },
  {
    "nome": "NÁTALY GALVÃO DE OLIVEIRA SANTOS",
    "cpf": "06687074296",
    "processoSei": "2817.013032.00565/2023-51",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126034/2023",
        "liquidacao": "7172125157",
        "empenho": "7172125697/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 270.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 270.0
  },
  {
    "nome": "NATAN DE ABREU RIBEIRO",
    "cpf": "04227914230",
    "processoSei": "2817.013042.00042/2023-02",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125960/2023",
        "liquidacao": "7172125085",
        "empenho": "7172125619/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "NATANAEL HABACUC ARAUJO DA SILVA",
    "cpf": "05842604230",
    "processoSei": "2817.013032.00430/2023-95",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126174/2023",
        "liquidacao": "7172125273",
        "empenho": "7172125828/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "NATHALY MOTA GOMES",
    "cpf": "07366541273",
    "processoSei": "2817.013032.00272/2023-73",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125812/2023",
        "liquidacao": "7172124939",
        "empenho": "7172125470/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "NATHANAEL OLIVEIRA ANDRADE",
    "cpf": "07046592209",
    "processoSei": "2817.013032.00488/2023-39",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125919/2023",
        "liquidacao": "7172125045",
        "empenho": "7172125578/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "NAYRA BEATRIZ NOGUEIRA NUNES",
    "cpf": "06535247228",
    "processoSei": "2817.013036.00189/2023-09",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125916/2023",
        "liquidacao": "7172125041",
        "empenho": "7172125573/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 120.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 120.0
  },
  {
    "nome": "NEUMA QUEIROZ DE OLIVEIRA",
    "cpf": "04231863296",
    "processoSei": "2817.013047.00249/2023-74",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125599/2023",
        "liquidacao": "7172124790",
        "empenho": "7172125284/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "OTONYEL LUZ DE ALMEIDA MOREIRA",
    "cpf": "70259645222",
    "processoSei": "2817.013047.00297/2023-62",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126137/2023",
        "liquidacao": "7172125242",
        "empenho": "7172125775/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "OZIEL TEIXEIRA DE FREITAS",
    "cpf": "70259278211",
    "processoSei": "2817.013047.00155/2023-03",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125646/2023",
        "liquidacao": "7172124810",
        "empenho": "7172125314/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "PAMELI SOUZA RODRIGUES",
    "cpf": "06093636208",
    "processoSei": "2817.013047.00222/2023-81",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126004/2023",
        "liquidacao": "7172125130",
        "empenho": "7172125670/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "PATRICIA DA SILVA VIANA",
    "cpf": "10546563201",
    "processoSei": "",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125982/2023",
        "liquidacao": "7172125109",
        "empenho": "7172125628/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "PAULO CESAR DE MORAIS LIMA",
    "cpf": "10676750273",
    "processoSei": "2817.013032.00393/2023-15",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125897/2023",
        "liquidacao": "7172125022",
        "empenho": "7172125554/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "PEDRO HENRIQUE GOMES",
    "cpf": "07051796216",
    "processoSei": "2817.013047.00158/2023-39",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125840/2023",
        "liquidacao": "7172124967",
        "empenho": "7172125502/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "PEDRO HENRIQUE MATTOS OLIVEIRA",
    "cpf": "07439832205",
    "processoSei": "2817.013047.00159/2023-83",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125855/2023",
        "liquidacao": "7172124982",
        "empenho": "7172125522/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "PEDRO HENRYK SILVA LEAL",
    "cpf": "08219735252",
    "processoSei": "",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125889/2023",
        "liquidacao": "7172125015",
        "empenho": "7172125546/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "PEDRO IAGO DE ALMEIDA SOUZA",
    "cpf": "05117824202",
    "processoSei": "2817.013032.00299/2023-66",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125992/2023",
        "liquidacao": "7172125110",
        "empenho": "7172125651/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "PEDRO MANOEL COSTA DE AGUIAR",
    "cpf": "02350007286",
    "processoSei": "2817.013032.00440/2023-21",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125842/2023",
        "liquidacao": "7172124969",
        "empenho": "7172125504/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "PEDRO NICOLAS SANTOS RIBEIRO",
    "cpf": "02505365288",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125824/2023",
        "liquidacao": "7172124951",
        "empenho": "7172125486/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 80.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 80.0
  },
  {
    "nome": "POLIANA DA SILVA E SILVA",
    "cpf": "07996771243",
    "processoSei": "2817.013047.00192/2023-11",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125895/2023",
        "liquidacao": "7172125021",
        "empenho": "7172125552/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "PRISCILA ROCHA LOPES",
    "cpf": "07104336206",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126065/2023",
        "liquidacao": "7172125194",
        "empenho": "7172125709/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "QUEZIA SOUZA PAIXAO",
    "cpf": "09963897258",
    "processoSei": "2817.013036.00191/2023-70",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125853/2023",
        "liquidacao": "7172124980",
        "empenho": "7172125519/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 120.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 120.0
  },
  {
    "nome": "RAFAEL SILVA DA COSTA",
    "cpf": "09705703256",
    "processoSei": "2817.013047.00324/2023-05",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125815/2023",
        "liquidacao": "7172124942",
        "empenho": "7172125474/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "RAFAELI FERNANDES DA SILVA",
    "cpf": "08166856220",
    "processoSei": "2817.013047.00161/2023-52",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125725/2023",
        "liquidacao": "7172124860",
        "empenho": "7172125393/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "RAILSON DA SILVA ARAUJO ALCANTARA",
    "cpf": "05601683220",
    "processoSei": "2817.013036.00192/2023-14",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125878/2023",
        "liquidacao": "7172125004",
        "empenho": "7172125535/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "RAIRE ALVES BARRETO",
    "cpf": "02255881292",
    "processoSei": "2817.013047.00329/2023-20",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125973/2023",
        "liquidacao": "7172125099",
        "empenho": "7172125638/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "RANGLEIS RAMOS DE OLIVEIRA",
    "cpf": "10493652248",
    "processoSei": "",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125887/2023",
        "liquidacao": "7172125013",
        "empenho": "7172125544/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "RAQUEL DE SOUZA MACIEL",
    "cpf": "70952640236",
    "processoSei": "2817.013038.00508/2023-76",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125946/2023",
        "liquidacao": "7172125072",
        "empenho": "7172125605/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "RAUANA DE ALBUQUERQUE ALCANTARA",
    "cpf": "10461976226",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125869/2023",
        "liquidacao": "7172124996",
        "empenho": "7172125530/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "RAYANE LUCAS BARROS",
    "cpf": "02729061231",
    "processoSei": "2817.013047.00162/2023-05",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125616/2023",
        "liquidacao": "7172124795",
        "empenho": "7172125297/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "RAYNARA DA SILVA BATISTA",
    "cpf": "07032971202",
    "processoSei": "2817.013032.00423/2023-93",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125739/2023",
        "liquidacao": "7172124875",
        "empenho": "7172125407/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 332.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 332.0
  },
  {
    "nome": "RAYSLA LORRANE ARAUJO DA SILVA",
    "cpf": "10244092281",
    "processoSei": "2817.013047.00194/2023-01",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125967/2023",
        "liquidacao": "7172125092",
        "empenho": "7172125629/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "RENATA DA SILVA NUNES",
    "cpf": "03020022274",
    "processoSei": "2817.013032.00302/2023-41",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125777/2023",
        "liquidacao": "7172124910",
        "empenho": "7172125444/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 60.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 60.0
  },
  {
    "nome": "RENE FERREIRA DA SILVA",
    "cpf": "05995603205",
    "processoSei": "2817.013047.00342/2023-89",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125818/2023",
        "liquidacao": "7172124945",
        "empenho": "7172125476/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "RHEMILY FREITAS COSTA",
    "cpf": "03756528251",
    "processoSei": "2817.013047.00097/2023-18",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125782/2023",
        "liquidacao": "7172124916",
        "empenho": "7172125450/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 270.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 270.0
  },
  {
    "nome": "RICARDO DA SILVA SANTOS",
    "cpf": "07173900204",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126049/2023",
        "liquidacao": "7172125172",
        "empenho": "7172125732/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "RIKELLISSON ROIS GOMES",
    "cpf": "09839786202",
    "processoSei": "2817.013038.00509/2023-11",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125945/2023",
        "liquidacao": "7172125071",
        "empenho": "7172125604/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "RILARI ESTEFANE CALDAS DE SOUSA",
    "cpf": "00934191204",
    "processoSei": "2817.013047.00251/2023-43",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125687/2023",
        "liquidacao": "7172124838",
        "empenho": "7172125370/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "ROBERTA DA SILVA ARAUJO",
    "cpf": "10185813240",
    "processoSei": "",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126081/2023",
        "liquidacao": "7172125186",
        "empenho": "7172125745/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "ROBERTO ANGELO DO NASCIMENTO VASCONCELOS",
    "cpf": "06990507233",
    "processoSei": "2817.013047.00269/2023-45",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125949/2023",
        "liquidacao": "7172125075",
        "empenho": "7172125609/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "ROBSON MARQUES DE FREITAS CARVALHO",
    "cpf": "07313406207",
    "processoSei": "2817.013047.00250/2023-07",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125683/2023",
        "liquidacao": "7172124834",
        "empenho": "7172125364/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "RODRIGO DO NASCIMENTO FERRAZ",
    "cpf": "09526663241",
    "processoSei": "2817.013038.00561/2023-77",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125776/2023",
        "liquidacao": "7172124909",
        "empenho": "7172125443/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "RODRIGO TAVARES DA SILVA",
    "cpf": "07918866207",
    "processoSei": "2817.013032.00442/2023-10",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125870/2023",
        "liquidacao": "7172124997",
        "empenho": "7172125531/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "RONALD JUAN DE SOUZA FERREIRA",
    "cpf": "07144963244",
    "processoSei": "2817.013047.00299/2023-51",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126133/2023",
        "liquidacao": "7172125240",
        "empenho": "7172125773/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "ROSIMEIRE DE SOUZA COSTA",
    "cpf": "70260730289",
    "processoSei": "2817.013047.00193/2023-58",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125778/2023",
        "liquidacao": "7172124912",
        "empenho": "7172125445/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "RUDSON DA CRUZ AZEVEDO",
    "cpf": "05041657203",
    "processoSei": "2817.013038.00510/2023-45",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125757/2023",
        "liquidacao": "7172124892",
        "empenho": "7172125425/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "RYCK CHARLES BRANDAO LOPES",
    "cpf": "06544752290",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125923/2023",
        "liquidacao": "7172125048",
        "empenho": "7172125585/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "SABRINA DE OLIVEIRA LACERDA",
    "cpf": "10120341271",
    "processoSei": "2817.013047.00306/2023-15",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125634/2023",
        "liquidacao": "7172124807",
        "empenho": "7172125308/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "SAMANTHA DA SILVA MORAES",
    "cpf": "70532199251",
    "processoSei": "2817.013047.00163/2023-41",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125839/2023",
        "liquidacao": "7172124966",
        "empenho": "7172125501/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "SAMILY DE OLIVEIRA SILVA",
    "cpf": "08580303222",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125816/2023",
        "liquidacao": "7172124943",
        "empenho": "7172125473/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 268.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 268.0
  },
  {
    "nome": "SARA ARAÚJO DE SOUZA",
    "cpf": "06565319243",
    "processoSei": "2817.013032.00428/2023-16",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125734/2023",
        "liquidacao": "7172124870",
        "empenho": "7172125402/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 184.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 184.0
  },
  {
    "nome": "SARAH HELOA BRUNETA SOUZA",
    "cpf": "06543528281",
    "processoSei": "2817.013042.00040/2023-13",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125835/2023",
        "liquidacao": "7172124962",
        "empenho": "7172125497/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "SHAIANE LIMA DE OLIVEIRA",
    "cpf": "06097319207",
    "processoSei": "2817.013047.00355/2023-58",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126012/2023",
        "liquidacao": "7172125138",
        "empenho": "7172125678/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "SORAIA DE SOUSA MAIA",
    "cpf": "07291203252",
    "processoSei": "2817.013047.00168/2023-74",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125760/2023",
        "liquidacao": "7172124895",
        "empenho": "7172125429/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "STEFANE PINHEIRO LIRA",
    "cpf": "03735045278",
    "processoSei": "2817.013042.00036/2023-47",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125788/2023",
        "liquidacao": "7172124922",
        "empenho": "7172125455/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "STEFANY VITORIA SILVA DE ANDRADE",
    "cpf": "05497999239",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126055/2023",
        "liquidacao": "7172125178",
        "empenho": "7172125737/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "TAINÁ LUCAS DE ANDRADE",
    "cpf": "70541200275",
    "processoSei": "2817.013047.00164/2023-96",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126048/2023",
        "liquidacao": "7172125171",
        "empenho": "7172125731/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "TAIS MESQUITA DA SILVA",
    "cpf": "08475936229",
    "processoSei": "",
    "curso": "Qualificação Profissional em Editor de Vídeo",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126045/2023",
        "liquidacao": "7172125168",
        "empenho": "7172125728/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "TALISSON XAVIER DE SOUZA",
    "cpf": "09912643208",
    "processoSei": "2817.013047.00209/2023-22",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125790/2023",
        "liquidacao": "7172124924",
        "empenho": "7172125454/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "TALYTA CRISTINA CARVALHO MOISES",
    "cpf": "02244320286",
    "processoSei": "2817.013047.00316/2023-51",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125663/2023",
        "liquidacao": "7172124826",
        "empenho": "7172125356/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "TAYLON GUSTAVO DE OLIVEIRA CARMO",
    "cpf": "10223268216",
    "processoSei": "2817.013038.00451/2023-13",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125886/2023",
        "liquidacao": "7172125012",
        "empenho": "7172125543/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 180.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 180.0
  },
  {
    "nome": "TEREZA FREITAS OLIVEIRA",
    "cpf": "09449659206",
    "processoSei": "2817.013046.00422/2023-35",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125680/2023",
        "liquidacao": "7172124831",
        "empenho": "7172125361/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 320.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 320.0
  },
  {
    "nome": "THAILON RAMOM OLIVEIRA DA COSTA",
    "cpf": "07173969247",
    "processoSei": "2817.013047.00165/2023-31",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125834/2023",
        "liquidacao": "7172124961",
        "empenho": "7172125496/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "THALLISON FELIPE PAULA DA CRUZ",
    "cpf": "06237349235",
    "processoSei": "2817.013047.00275/2023-01",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125914/2023",
        "liquidacao": "7172125039",
        "empenho": "7172125571/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 200.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 200.0
  },
  {
    "nome": "THAUANA OLIVEIRA DA SILVA",
    "cpf": "08931861206",
    "processoSei": "",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125727/2023",
        "liquidacao": "7172124863",
        "empenho": "7172125395/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "THAYLINE SOUSA DA SILVA",
    "cpf": "70025198246",
    "processoSei": "2817.013038.00594/2023-17",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "28/12/2023",
        "notaPagamento": "7172126159/2023",
        "liquidacao": "7172125263",
        "empenho": "7172125793/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "TIAGO CRUZ DA COSTA",
    "cpf": "08364578200",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126077/2023",
        "liquidacao": "7172125213",
        "empenho": "7172125720/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 210.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 210.0
  },
  {
    "nome": "TIAGO OLIVEIRA DA SILVA",
    "cpf": "06040044276",
    "processoSei": "2817.013038.00452/2023-50",
    "curso": "Técnico em Marketing",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125764/2023",
        "liquidacao": "7172124899",
        "empenho": "7172125433/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "TIAGO PEREIRA DE FREITAS",
    "cpf": "08918429266",
    "processoSei": "2817.013047.00170/2023-43",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125629/2023",
        "liquidacao": "7172124801",
        "empenho": "7172125302/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "UEIQUE SOUZA OLIVEIRA",
    "cpf": "03664676203",
    "processoSei": "2817.013032.00459/2023-77",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125732/2023",
        "liquidacao": "7172124868",
        "empenho": "7172125400/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 412.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 412.0
  },
  {
    "nome": "VANESSA SILVA ARAÚJO",
    "cpf": "08754641225",
    "processoSei": "2817.013046.00423/2023-80",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125868/2023",
        "liquidacao": "7172124995",
        "empenho": "7172125529/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 310.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 310.0
  },
  {
    "nome": "VERONICA PAULA LIMA",
    "cpf": "06368783257",
    "processoSei": "2817.013047.00197/2023-36",
    "curso": "Técnico em Recursos Humanos",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125627/2023",
        "liquidacao": "7172124798",
        "empenho": "7172125300/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "VICTOR RAFAEL MACHADO FEITOZA",
    "cpf": "04116891266",
    "processoSei": "2817.013032.00432/2023-84",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125686/2023",
        "liquidacao": "7172124837",
        "empenho": "7172125368/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 508.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 508.0
  },
  {
    "nome": "VINICIUS EDUARDO MARTINS",
    "cpf": "10132972298",
    "processoSei": "2817.013047.00302/2023-37",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125695/2023",
        "liquidacao": "7172124839",
        "empenho": "7172125371/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 170.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 170.0
  },
  {
    "nome": "VITOR GABRIEL ARAUJO DE ALMEIDA",
    "cpf": "09118171230",
    "processoSei": "",
    "curso": "Técnico em Veterinária",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126078/2023",
        "liquidacao": "7172125214",
        "empenho": "7172125721/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "VITOR GABRIEL CARLOS DOS SANTOS",
    "cpf": "06840664244",
    "processoSei": "2817.013038.00495/2023-35",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126008/2023",
        "liquidacao": "7172125132",
        "empenho": "7172125674/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "VITOR KAUÃ LIMA SILVA",
    "cpf": "06520716278",
    "processoSei": "2817.013046.00310/2023-84",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126050/2023",
        "liquidacao": "7172125173",
        "empenho": "7172125733/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 304.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 304.0
  },
  {
    "nome": "VITORIA MENDONCA DE MEDEIROS",
    "cpf": "02946663205",
    "processoSei": "2817.013032.00434/2023-73",
    "curso": "Técnico em Gerência em Saúde",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125653/2023",
        "liquidacao": "7172124817",
        "empenho": "7172125320/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 416.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 416.0
  },
  {
    "nome": "VITORIA SANTOS DE OLIVEIRA",
    "cpf": "10184102286",
    "processoSei": "",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126031/2023",
        "liquidacao": "7172125154",
        "empenho": "7172125694/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "WENDERSON NUNES DE MORAIS",
    "cpf": "07384144256",
    "processoSei": "2817.013036.00193/2023-69",
    "curso": "Técnico em Confeitaria",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125971/2023",
        "liquidacao": "7172125097",
        "empenho": "7172125636/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 150.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 150.0
  },
  {
    "nome": "WENDYLA TAIS GAMA DA SILVA",
    "cpf": "08346620276",
    "processoSei": "2817.013042.00104/2023-78",
    "curso": "Curso não identificado",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125685/2023",
        "liquidacao": "7172124836",
        "empenho": "7172125369/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 130.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 130.0
  },
  {
    "nome": "WESLEY FREITAS PEREIRA",
    "cpf": "08375749273",
    "processoSei": "2817.013047.00309/2023-59",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126141/2023",
        "liquidacao": "7172125248",
        "empenho": "7172125780/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 240.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 240.0
  },
  {
    "nome": "WEVERTON DE MORAES SOUZA",
    "cpf": "06391326266",
    "processoSei": "2817.013038.00500/2023-18",
    "curso": "Técnico em Administração",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172126013/2023",
        "liquidacao": "7172125139",
        "empenho": "7172125680/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 160.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 160.0
  },
  {
    "nome": "WILIAM AMARAL DA SILVA",
    "cpf": "08282387231",
    "processoSei": "",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "27/12/2023",
        "notaPagamento": "7172126043/2023",
        "liquidacao": "7172125166",
        "empenho": "7172125726/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 296.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 296.0
  },
  {
    "nome": "WILLIAM DA COSTA MAIA",
    "cpf": "08759544210",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125943/2023",
        "liquidacao": "7172125062",
        "empenho": "7172125602/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 230.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 230.0
  },
  {
    "nome": "WILLIAN LIMA DE OLIVEIRA CUNHA",
    "cpf": "02462640207",
    "processoSei": "",
    "curso": "Técnico em Enfermagem",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125871/2023",
        "liquidacao": "7172124998",
        "empenho": "7172125532/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 190.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 190.0
  },
  {
    "nome": "YAGALO MOTA ROCHA",
    "cpf": "07313709293",
    "processoSei": "2817.013047.00253/2023-32",
    "curso": "Técnico em Finanças",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125959/2023",
        "liquidacao": "7172125084",
        "empenho": "7172125618/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 220.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 220.0
  },
  {
    "nome": "YASMIN DE AMARAL CARNEIRO",
    "cpf": "08470325230",
    "processoSei": "2817.013046.00321/2023-64",
    "curso": "Técnico em Farmácia",
    "pagamentos": [
      {
        "dataPagamento": "26/12/2023",
        "notaPagamento": "7172125655/2023",
        "liquidacao": "7172124820",
        "empenho": "7172125330/2023",
        "contaFinanceira": "2717212155",
        "despesa": "3390180000",
        "fonte": "15010700",
        "valor": 312.0
      }
    ],
    "quantidadePagamentos": 1,
    "valorTotalRecebido": 312.0
  }
] satisfies Beneficiario[];

export const baseMetadata = {
  fonte: "SICAF — Relação de Pagamentos por Credor e Data de Baixa",
  periodo: "01/01/2023 a 31/12/2023",
  ano: 2023,
  totalRelatorio: 88610,
  quantidadeRelatorio: 399,
  paginas: 86,
  dataGeracao: "20/07/2026",
} as const;
