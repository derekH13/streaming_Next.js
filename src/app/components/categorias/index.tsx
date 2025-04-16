import Link from "next/link";
import InputPrimary from "../input";

export default function Categorias() {
  return (
    <div className="bg-neutral-900 py-[20px] flex items-center mb-10">
      <div className="interface flex flex-col-reverse gap-5 md:flex-row md:gap-[80px] items-center">
        <ul className="flex justify-between w-full md:min-w-[60%] text-neutral-400 bold-light text-[18px]">
          <Link
            className=" p-3 rounded-[10px] hover:bg-emerald-800 hover:text-neutral-50 px-8 cursor-pointer"
            href="/Filmes/27"
          >
            <li>Terror</li>
          </Link>
          <Link
            className=" p-3 rounded-[10px] hover:bg-emerald-800 hover:text-neutral-50 px-8 cursor-pointer"
            href="/Filmes/16"
          >
            <li>Animação</li>
          </Link>
          <Link
            className=" p-3 rounded-[10px] hover:bg-emerald-800 hover:text-neutral-50 px-8 cursor-pointer"
            href="/Filmes/27"
          >
            <li>Comédia</li>
          </Link>
          <Link
            className=" p-3 rounded-[10px] hover:bg-emerald-800 hover:text-neutral-50 px-8 cursor-pointer"
            href="/Filmes/10749"
          >
            <li>Romance</li>
          </Link>
          <Link
            className=" p-3 rounded-[10px] hover:bg-emerald-800 hover:text-neutral-50 px-8 cursor-pointer"
            href="/Filmes/14"
          >
            <li>Fantasia</li>
          </Link>
        </ul>
        <InputPrimary />
      </div>
    </div>
  );
}
