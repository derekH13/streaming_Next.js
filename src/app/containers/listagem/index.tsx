// components
import Card from "@/app/components/card";
import { dadosAnime, dadosImdb } from "@/app/interface";
import { buscarPorGenero, buscarPorNome } from "@/util";
import { buscarAnimeGenero } from "@/util/jikan";

type props = {
  title?: string;
  genero?: string;
  slice: number | undefined;
  isSearch?: string | null;
  numGrid?: string;
  animeGenero?: string | null;
};

export default async function Listagem({
  title,
  genero,
  slice,
  isSearch,
  numGrid,
  animeGenero,
}: props) {
  let resultFilme: dadosImdb[] | undefined = await buscarPorGenero("17", 1);

  let resultAnime: dadosAnime[] | undefined = await buscarAnimeGenero("1", 1);

  if (genero && genero !== "busca") {
    resultFilme = await buscarPorGenero(genero, slice);
    console.log(genero);
  }
  if (isSearch) {
    resultFilme = await buscarPorNome(isSearch);
    console.log(isSearch);
  }
  if (animeGenero) {
    resultAnime = await buscarAnimeGenero(animeGenero, slice);
    console.log(resultAnime);
  }

  console.log(animeGenero);

  return (
    <section className="pt-2 pb-8 w-full">
      {title && (
        <h1 className="text-neutral-400 font-light text-2xl pb-4">
          Filmes de <span className="font-bold text-emerald-500">{title}</span>
        </h1>
      )}
      <div
        className={`grid  ${
          numGrid != undefined
            ? `grid-cols-2 md:grid-cols-3   lg:grid-cols-5 xl:grid-cols-6`
            : `grid-cols-2 sm:grid-cols-3 md:grid-cols-5`
        } gap-5`}
      >
        {/* verifica se não é um anime */}
        {resultFilme && genero && animeGenero == null
          ? resultFilme.map((item, index) => (
              <Card key={index} index={index} dadosFilme={item} />
            ))
          : resultAnime &&
            resultAnime.map((item, index) => (
              <Card
                key={item.mal_id}
                index={index}
                dadosAnime2={item}
                isAnime={true}
              />
            ))}
      </div>
    </section>
  );
}
