"use client";

import { ReactNode } from "react";

type props = {
  title: string;
  categorias: ReactNode;
};

export default function Accordion({ title, categorias }: props) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border-b border-zinc-700">
        <button
          className="flex w-full items-center justify-between gap-5 px-6"
          onClick={() => {
            const el = document.getElementById(title);
            if (el) el.classList.toggle("hidden");
          }}
        >
          <h6 className=" min-w-[80px] h-[54px] flex justify-start items-center ">
            {title}
          </h6>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
        </button>

        <div id={title} className=" text-zinc-300 ">
          {categorias}
        </div>
      </div>
    </div>
  );
}
