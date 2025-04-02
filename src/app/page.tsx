import React from "react";
import Hero from "./containers/hero";
import Categorias from "./components/categorias";

export default function Home() {
  return (
    <section>
      <Hero />
      <Categorias />
    </section>
  );
}
