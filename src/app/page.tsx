import React from "react";
import Hero from "./containers/hero";
import Categorias from "./components/categorias";
import Listagem from "./containers/listagem";

export default function Home() {
  return (
    <section>
      <Hero />
      <Categorias />
      <Listagem genero={27} title="Terror" />
      <Listagem genero={16} title="Romance" />
    </section>
  );
}
