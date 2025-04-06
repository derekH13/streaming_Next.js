import ButtonHero from "@/app/components/buttonHero";
import Listagem from "@/app/containers/listagem";
import { Util } from "@/util";
import Image from "next/image";

export default async function InfoFilme({
  params,
}: {
  params: Promise<{ FilmeId: string }>;
}) {
  const { FilmeId } = await params;

  const dadosFilmes = await Util.RequisiçãoId(FilmeId);

  return (
    <div>
      {dadosFilmes ? (
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
                    Dalia, filha de um famoso escritor que morreu recentemente,
                    herda o legado de terminar seu livro. Para isso, Dalia se
                    tornará parte do livro e ficará cara a cara com os
                    personagens que assumiram o tema do livro para serem os
                    protagonistas.
                  </p>
                </div>
                <ButtonHero />
              </div>
            </div>
            <Listagem
              slice={5}
              genero={dadosFilmes.genres[0].id.toString()}
              title={dadosFilmes.genres[0].name}
            />
          </div>
        </section>
      ) : (
        <div>carregando</div>
      )}
    </div>
  );
}
