"use server";

import InputPrimary from "@/app/components/input";
import Listagem from "@/app/containers/listagem";

export default async function Filme({
  params,
}: {
  params: Promise<{ FilmeId: string }>;
}) {
  const { FilmeId } = await params;

  return (
    <section>
      <div className="interface pt-30 pb-10">
        <InputPrimary />
      </div>
      <div>
        <Listagem slice={undefined} genero={FilmeId} />
      </div>
    </section>
  );
}
