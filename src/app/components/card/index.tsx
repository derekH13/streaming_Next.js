import Image from "next/image";

import { CatalogoFilme, dadosAnime, dadosImdb } from "@/app/interface";
import Link from "next/link";

type props = {
  dadosFilme?: dadosImdb | null;
  index: number;
  isAnime?: boolean;
  dadosAnime2?: dadosAnime | null;
  cartFilme?: CatalogoFilme;
};

export default function Card({
  dadosFilme,
  index,
  dadosAnime2,
  cartFilme,
}: props) {
  return (
    <>
      {dadosFilme && (
        <div
          className={`text-center flex flex-col justify-center items-center w-full ${
            index == 5 ? "md:last:hidden" : ""
          }`}
        >
          <Link
            href={`/infoFilme/buscar?a=${dadosFilme && dadosFilme.id}`}
            className="h-full w-full"
          >
            <Image
              height={300}
              width={200}
              src={`https://image.tmdb.org/t/p/w500/${
                dadosFilme && dadosFilme.poster_path
              }`}
              alt=""
              className="rounded-[5px] w-full h-full object-cover"
            />
          </Link>
          <h6 className="text-neutral-200 font-medium pt-1.5 h-[64px] overflow-hidden">
            {dadosFilme && dadosFilme.title}
          </h6>
        </div>
      )}

      {dadosAnime2 && (
        <div
          className={`text-center flex flex-col justify-center items-center w-full ${
            index == 5 ? "md:last:hidden" : ""
          }`}
        >
          <Link
            href={`/infoFilme/buscar?b=${dadosAnime2 && dadosAnime2.mal_id}`}
            className="h-full w-full"
          >
            <Image
              height={300}
              width={200}
              src={dadosAnime2.images.jpg.large_image_url}
              alt=""
              className="rounded-[5px] w-full h-full object-cover"
            />
          </Link>
          <h6 className="text-neutral-200 font-medium pt-1.5 h-[64px] overflow-hidden">
            {dadosAnime2 && dadosAnime2.title}
          </h6>
        </div>
      )}

      {cartFilme && (
        <div
          className={`text-center flex flex-col justify-center items-center w-full ${
            index == 5 ? "md:last:hidden" : ""
          }`}
        >
          <Link
            href={`/infoFilme/buscar?b=${cartFilme && cartFilme.apiFilme_id}`}
            className="h-full w-full"
          >
            <Image
              priority
              height={300}
              width={200}
              src={cartFilme.cartFilmes_img}
              alt=""
              className="rounded-[5px] w-full h-full object-cover"
            />
          </Link>
          <h6 className="text-neutral-200 font-medium pt-1.5 h-[64px] overflow-hidden">
            {cartFilme && cartFilme.cartFilmes_title}
          </h6>
        </div>
      )}
    </>
  );
}
