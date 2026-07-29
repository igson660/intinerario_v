/** Atlas Cívico: rota estática individual gerada para cada CPF presente no relatório de origem. */
import { BeneficiaryDetail } from "@/components/BeneficiaryDetail";
import { beneficiarios } from "@/data/base";

export const dynamicParams = false;

export function generateStaticParams() {
  return beneficiarios.map((beneficiary) => ({ cpf: beneficiary.cpf }));
}

export default async function BeneficiaryPage({ params }: { params: Promise<{ cpf: string }> }) {
  const { cpf } = await params;
  return <BeneficiaryDetail cpf={cpf} />;
}
