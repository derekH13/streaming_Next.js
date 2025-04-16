import Hero from "./containers/hero";
import Categorias from "./components/categorias";
import Listagem from "./containers/listagem";
import MainLayout from "./components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section>
        <Hero />
        <Categorias />
        <div className="interface">
          <Listagem slice={6} genero={"27"} title="Terror" />
          <Listagem slice={6} genero={"35"} title="Comédia" />
          <Listagem slice={6} genero={"16"} title="Animação" />
          <Listagem slice={6} genero={"14"} title="Fantasia" />
        </div>
      </section>
    </MainLayout>
  );
}
