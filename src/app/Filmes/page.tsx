import React from "react";

import Listagem from "../containers/listagem";

import { handleSubmit } from "./[FilmeId]/actions";

export default function Filmes() {
  return (
    <div className="w-5/7 pr-2">
      <div className="w-full pb-10">
        <form
          action={handleSubmit}
          className="flex h-[40px] rounded-[10px] w-full overflow-hidden"
        >
          <input
            name="pesquisa"
            className="text w-full pl-2  bg-neutral-800 rounded-bl-[10px] rounded-tl-[10px]  h-full text-neutral-400 "
            placeholder="Pesquise o filme que deseja assistir"
          />
          <button
            type="submit"
            className="bg-emerald-900 w-[40px] h-full flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>
      </div>
      <div className="min-h-[500px]">
        <Listagem slice={undefined} genero="27" numGrid="6" />
      </div>
    </div>
  );
}
