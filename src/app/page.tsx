import Hero from "./containers/hero";
import Categorias from "./components/categorias";
import Listagem from "./containers/listagem";

export default function Home() {
  return (
    <section>
      <Hero />
      <Categorias />
      <Listagem slice={6} genero={"27"} title="Terror" />
      <Listagem slice={6} genero={"35"} title="Comédia" />
      <Listagem slice={6} genero={"16"} title="Animação" />
      <Listagem slice={6} genero={"14"} title="Fantasia" />
    </section>
  );
}
