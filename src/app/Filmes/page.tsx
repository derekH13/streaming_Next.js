import React from "react";
import InputPrimary from "../components/input";
import Listagem from "../containers/listagem";

export default function Filmes() {
  return (
    <section>
      <div className="interface pt-40">
        <form action="" className="pb-10">
          <InputPrimary />
        </form>
        <div className="min-h-[500px]">
          <Listagem slice={undefined} genero={"27"} />
        </div>
      </div>
    </section>
  );
}
