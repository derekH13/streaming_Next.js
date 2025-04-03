import Image from "next/image";

import { dadosImdb } from "@/app/interface";

type props = {
  dadosFilme: dadosImdb;
};

export default function Card({ dadosFilme }: props) {
  return (
    <div className="text-center">
      <Image
        height={300}
        width={200}
        src={
          dadosFilme.poster_path
            ? `https://image.tmdb.org/t/p/w500/${dadosFilme.poster_path}`
            : "/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FmOR1Ks0EcXocwMV4EPv4letz0F5.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F%2FmOR1Ks0EcXocwMV4EPv4letz0F5.jpg&w=640&q=75 2x"
        }
        alt=""
        className="rounded-[5px]"
      />
      <h6 className="text-neutral-200 font-medium pt-1.5">
        {dadosFilme.title}
      </h6>
    </div>
  );
}
