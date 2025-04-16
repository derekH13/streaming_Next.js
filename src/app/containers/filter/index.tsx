import Accordion from "@/app/components/acordion";
import Link from "next/link";

export default function Filter() {
  return (
    <section className="bg-neutral-800 text-neutral-50 h-full w-[300px] left-0 top-0 rounded-tr-[10px] rounded-br-[10px] pt-3">
      <Accordion
        title="Animes"
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
