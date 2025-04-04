import Image from "next/image";

import { dadosImdb } from "@/app/interface";
import Link from "next/link";

type props = {
  dadosFilme: dadosImdb | null;
  index: number;
};

export default async function Card({ dadosFilme, index }: props) {
  const img =
    `https://image.tmdb.org/t/p/w500/${dadosFilme && dadosFilme.poster_path}` ||
    "https://image.tmdb.org/t/p/w500//npzFyBu4fFPQpWXaLKdrXc6JrUK.jpg";

  console.log(index);

  return (
    <div
      className={`text-center flex flex-col justify-center items-center w-full ${
        index == 5 ? "md:last:hidden" : ""
      }`}
    >
      <Link href={`/infoFilme/${dadosFilme && dadosFilme.id}`}>
        <Image
          height={300}
          width={200}
          src={img}
          alt=""
          className="rounded-[5px] w-full h-full"
        />
      </Link>
      <h6 className="text-neutral-200 font-medium pt-1.5 h-[64px] overflow-hidden">
        {dadosFilme && dadosFilme.title}
      </h6>
    </div>
  );
}
