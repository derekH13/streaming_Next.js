// components
import Card from "@/app/components/card";
import { Util } from "@/util";

type props = {
  title?: string;
  genero?: string;
  slice: number | undefined;
  isSearch?: string;
};

export default async function Listagem({
  title,
  genero,
  slice,
  isSearch,
}: props) {
  let result = await Util.RequisicaoGenero("17", 1);

  if (genero) {
    result = await Util.RequisicaoGenero(genero, slice);
  }

  if (isSearch) {
    result = await Util.requisicaoNome(isSearch);
  }

  return (
    <section className="interface pt-2 pb-8">
      {title && (
        <h1 className="text-neutral-400 font-light text-2xl pb-4">
          Filmes de <span className="font-bold text-emerald-500">{title}</span>
        </h1>
      )}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 ${
          slice != undefined ? "md:grid-cols-5" : "md:grid-cols-5 "
        } gap-5`}
      >
        {result &&
          result.map((item, index) => (
            <Card key={item.id} index={index} dadosFilme={item} />
          ))}
      </div>
    </section>
  );
}
