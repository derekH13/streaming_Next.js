import Accordion from "@/app/components/acordion";
import Link from "next/link";

export default function Filter() {
  return (
    <section className="bg-neutral-800 flex flex-row md:flex-col  text-neutral-50 md:h-full w-full md:w-[300px] left-0 top-0 rounded-tr-[10px] rounded-br-[10px] pt-3">
      <Accordion
        title="Animes"
        categorias={
          <ul className="flex flex-col ">
            <Link href="/Filmes/busca?a=1">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Ação
              </li>
            </Link>
            <Link href="/Filmes/busca?a=2">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Aventura
              </li>
            </Link>
            <Link href="/Filmes/busca?a=8">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Fantasia
              </li>
            </Link>
            <Link href="/Filmes/busca?a=10">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Terror
              </li>
            </Link>
            <Link href="/Filmes/busca?a=14">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Romance
              </li>
            </Link>
            <Link href="/Filmes/busca?a=4">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Comédia
              </li>
            </Link>
            <Link href="/Filmes/busca?a=30">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Esportes
              </li>
            </Link>
          </ul>
        }
      />
      <Accordion
        title="Filmes"
        categorias={
          <ul className="flex flex-col ">
            <Link href="/Filmes/28">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Ação
              </li>
            </Link>
            <Link href="/Filmes/12">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Aventura
              </li>
            </Link>
            <Link href="/Filmes/14">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Fantasia
              </li>
            </Link>
            <Link href="/Filmes/27">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Terror
              </li>
            </Link>
            <Link href="/Filmes/10749">
              <li className="h-[54px] flex justify-start items-center hover:bg-neutral-900 cursor-pointer pl-12">
                Romance
              </li>
            </Link>
          </ul>
        }
      />
    </section>
  );
}
