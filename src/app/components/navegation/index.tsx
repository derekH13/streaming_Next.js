import Link from "next/link";

export default function Navegation() {
  return (
    <nav className="w-full border-b-2 border-b-neutral-800 py-2.5 fixed">
      <div className="interface2 flex items-center justify-between">
        <h1 className="text-3xl text-emerald-400 font-light">
          Series<span className="font-black">Fix</span>
        </h1>
        <ul className="flex gap-11 text-xl font-semibold text-white">
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
        <img
          src="./assets/images/eu.jpeg"
          alt=""
          className="h-12 w-12 object-cover rounded-full"
        />
      </div>
    </nav>
  );
}
