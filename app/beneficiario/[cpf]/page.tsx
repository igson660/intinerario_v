/** Atlas Cívico: rota estática individual para cada grupo beneficiário/processo da base. */
import { BeneficiaryDetail } from "@/components/BeneficiaryDetail";
import { beneficiarios } from "@/data/base";
import { recordSlug } from "@/lib/recordIdentity";

export const dynamicParams = false;

export function generateStaticParams() {
  return beneficiarios.map((beneficiary) => ({ cpf: recordSlug(beneficiary) }));
}

export default async function BeneficiaryPage({ params }: { params: Promise<{ cpf: string }> }) {
  const { cpf: slug } = await params;
  return <BeneficiaryDetail slug={slug} />;
}
