// interface
import { dadosImdb } from "@/app/interface";

// components
import Card from "@/app/components/card";

type props = {
  title: string;
  genero: number;
};

export default async function Listagem({ title, genero }: props) {
  const apiKey = "bbc155bdde2230ddd3afc634917c418a";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${genero}`;

  // requisicao das listagens
  const Requisicao = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      return data.results.slice(0, 5);
    } catch (error) {
      console.error(error);
    }
  };

  const result: dadosImdb[] = await Requisicao();

  return (
    <section className="interface pt-2 pb-8">
      <h1 className="text-neutral-400 font-light text-2xl pb-4">
        Filmes de <span className="font-bold text-emerald-500">{title}</span>
      </h1>
      <div className="flex gap-7">
        {result.map((item) => (
          <Card key={item.id} dadosFilme={item} />
        ))}
      </div>
    </section>
  );
}
