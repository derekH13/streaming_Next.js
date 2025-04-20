import ButtonHero from "@/app/components/buttonHero";
import Listagem from "@/app/containers/listagem";
import { buscarFilmePorId } from "@/util";
import { buscarAnimeId } from "@/util/jikan";
import Image from "next/image";

export default async function InfoFilme({
  searchParams,
}: {
  searchParams: Promise<{ a?: string; b?: string }>;
}) {
  let dadosFilmes, dadosAnime;
  const FilmeId = await (await searchParams).a;
  const AnimeId = await (await searchParams).b;

  if (FilmeId !== null && FilmeId)
    dadosFilmes = await buscarFilmePorId(FilmeId);

  if (AnimeId && AnimeId !== null) dadosAnime = await buscarAnimeId(AnimeId);

  console.log(dadosFilmes);

  return (
    <div>
      {dadosFilmes && (
        <section className="pt-40">
          <div className="interface">
            <div className=" text-neutral-100 flex flex-col md:flex-row gap-8 pb-30">
              <div className="md:min-w-[350px] w-[300px] relative mx-auto ">
                <span className="absolute bottom-4 right-4 border-2 text-[28px] font-bold text-amber-300 h-20 w-20 bg-emerald-950 rounded-full flex justify-center items-center">
                  {dadosFilmes.vote_average}
                </span>
                <Image
                  className="h-[500px] w-full rounded-[5px] object-cover"
                  height={600}
                  width={400}
                  priority
                  src={`https://image.tmdb.org/t/p/w500/${dadosFilmes.poster_path}`}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold">{dadosFilmes.title} </h1>

                <div className="flex gap-2 pb-4 pt-2">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="flex gap-10">
                  <div>
                    <h6 className="text-xl font-semibold">Data:</h6>
                    <p className="flex gap-5 text-neutral-300 pb-2">
                      {dadosFilmes.release_date}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold">Popularidade:</h6>
                    <p className="flex gap-5 text-neutral-300 pb-2">
                      {dadosFilmes.popularity}
                    </p>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div>
                    <h6 className="text-xl font-semibold">Duração:</h6>
                    <p className="flex gap-5 text-neutral-300 pb-2">
                      {dadosFilmes.runtime} Minutos
                    </p>
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold">Generos:</h6>
                    <div className="flex gap-5 text-neutral-300 pb-2">
                      {dadosFilmes.genres.map((item, index) => (
                        <span key={index}>{item.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="text-xl font-semibold">Descrição</h6>
                  <p className="flex gap-5 text-neutral-300 pb-6">
                    {dadosFilmes.overview !== ""
                      ? dadosFilmes.overview
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                  </p>
                </div>
                <ButtonHero idFilme={dadosFilmes.id} />
              </div>
            </div>
            <Listagem
              slice={5}
              genero={dadosFilmes.genres[0].id.toString()}
              title={dadosFilmes.genres[0].name}
            />
          </div>
        </section>
      )}

      {dadosAnime && (
        <section className="pt-40">
          <div className="interface">
            <div className=" text-neutral-100 flex flex-col md:flex-row gap-8 pb-30">
              <div className="md:min-w-[350px] w-[300px] relative mx-auto ">
                <span className="absolute bottom-4 right-4 border-2 text-[28px] font-bold text-amber-300 h-20 w-20 bg-emerald-950 rounded-full flex justify-center items-center">
                  {dadosAnime.score}
                </span>
                <Image
                  className="h-[500px] w-full rounded-[5px] object-cover"
                  height={1900}
                  width={1400}
                  priority
                  src={dadosAnime.images.jpg.large_image_url}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold">{dadosAnime.title} </h1>

                <div className="flex gap-2 pb-4 pt-2">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="flex gap-10">
                  <div>
                    <h6 className="text-xl font-semibold">Data:</h6>
                    <p className="flex gap-5 text-neutral-300 pb-2">
                      {dadosAnime.year}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold">Popularidade:</h6>
                    <p className="flex gap-5 text-neutral-300 pb-2">
                      {dadosAnime.popularity}
                    </p>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div>
                    <h6 className="text-xl font-semibold">Duração:</h6>
                    <p className="flex gap-5 text-neutral-300 pb-2">
                      {dadosAnime.episodes} episodeos
                    </p>
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold">Generos:</h6>
                    <div className="flex gap-5 text-neutral-300 pb-2">
                      {dadosAnime.genres.map((item, index) => (
                        <span key={index}>{item.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="text-xl font-semibold">Descrição</h6>
                  <p className="flex gap-5 text-neutral-300 pb-6 max-h-[170px] overflow-hidden">
                    {dadosAnime.synopsis}
                  </p>
                </div>
                <div className="pt-4">
                  <ButtonHero url={dadosAnime.url} />
                </div>
              </div>
            </div>
            <Listagem
              slice={5}
              animeGenero={dadosAnime.genres[0].mal_id.toString()}
              title={dadosAnime.genres[0].name}
            />
          </div>
        </section>
      )}
    </div>
  );
}
