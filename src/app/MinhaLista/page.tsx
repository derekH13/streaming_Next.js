"use client";

import { useEffect, useState } from "react";
import { BuscarUsername } from "../actions/buscarName";
import { CatalogoFilme, usuario } from "../interface";
import { buscarFilmesUser } from "./action";
import Card from "../components/card";

export default function MinhaLista() {
  const [dadosFilmes, setDadosFilmes] = useState<CatalogoFilme[] | []>([]);

  useEffect(() => {
    async function buscarFilmes() {
      const name = localStorage.getItem("name");

      if (name) {
        const user: usuario = await BuscarUsername(name);

        if (user.id) {
          const item = await buscarFilmesUser(user.id);

          if (item) {
            // Se for array
            if (Array.isArray(item)) {
              setDadosFilmes(item);
            } else {
              // Se for objeto, coloca ele dentro de um array
              setDadosFilmes([item]);
            }
          }
        }
      }
    }

    buscarFilmes();
  }, []);

  console.log(dadosFilmes);
  return (
    <section className="interface min-h-screen pt-[120px]">
      <div
        className={`grid grid-cols-2 md:grid-cols-3   lg:grid-cols-5 xl:grid-cols-6 gap-5`}
      >
        {dadosFilmes &&
          dadosFilmes.map((item, index) => (
            <Card key={index} index={index} cartFilme={item} />
          ))}
      </div>
    </section>
  );
}
