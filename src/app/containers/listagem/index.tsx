import Card from "@/app/components/card";

export default async function Listagem() {
  const apiKey = "bbc155bdde2230ddd3afc634917c418a";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=27`;

  // requisicao das listagens
  const Requisicao = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const result = await Requisicao();

  console.log(result);

  return (
    <section className="interface pt-2">
      <h1 className="text-neutral-400 font-light text-2xl pb-4">
        Filmes de <span className="font-bold ">Terror</span>
      </h1>
      <div className="flex gap-7">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
