import Link from "next/link";
import InputPrimary from "../input";

export default function Categorias() {
  return (
    <div className="bg-neutral-900 py-[20px] flex items-center mb-10">
      <div className="interface flex flex-col-reverse gap-5 md:flex-row md:gap-[80px] items-center">
        <ul className="flex justify-between w-full md:min-w-[60%] text-neutral-400 bold-light text-[18px]">
          <li>
            <Link href="/Filmes/27">Terror</Link>
          </li>
          <li>
            <Link href="/Filmes/16">Animação</Link>
          </li>
          <li>
            <Link href="/Filmes/27">Comédia</Link>
          </li>
          <li>
            <Link href="/Filmes/10749">Romance</Link>
          </li>
          <li>
            <Link href="/Filmes/14">Fantasia</Link>
          </li>
        </ul>
        <InputPrimary />
      </div>
    </div>
  );
}
