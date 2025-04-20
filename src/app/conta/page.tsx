"use client";

import { useState } from "react";
import FormCadastro from "../containers/formCadastro";

export default function Conta() {
  const [login, setLogin] = useState(false);

  function Cadastro() {
    setLogin(false);
  }

  function Logar() {
    setLogin(true);
  }

  return (
    <section className="min-h-screen flex justify-center items-center pt-[68px]">
      <FormCadastro
        onclickCadastro={Cadastro}
        onclickLogin={Logar}
        login={login}
      />
    </section>
  );
}
