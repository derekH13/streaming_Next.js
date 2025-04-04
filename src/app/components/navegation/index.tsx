import Image from "next/image";
import Link from "next/link";

export default function Navegation() {
  return (
    <nav className="w-screen py-2.5 z-50 fixed">
      <div className="interface2 flex items-center justify-between">
        <h1 className="text-3xl text-emerald-400 font-light">
          Series<span className="font-black">Fix</span>
        </h1>
        <ul className="flex gap-11 text-xl font-medium text-neutral-400 mobille">
          <li>
            <a href="">Home</a>
          </li>
          |
          <li>
            <a href="">Series</a>
          </li>
          |
          <li>
            <Link href="/catalogo">Filmes</Link>
          </li>
          |
          <li>
            <a href="">Avaliacoes</a>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <Image
            width={50}
            height={50}
            priority
            src="/assets/images/eu.jpeg"
            alt=""
            className="h-12 w-12 object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
