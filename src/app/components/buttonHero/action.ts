'use server'

import { GuardarFilme } from "@/app/actions/actions";
import { buscarFilmePorId } from "@/util";

export async function addFilme(userId: number, filmeId: number) {
  const filme = await buscarFilmePorId(filmeId.toString());

  console.log('filme')


  if (filme) {

    const catalogoFilme = {
      user_id: userId,
      apiFilme_id: filme.id.toString(),
      cartFilmes_genero: filme.genres[0]?.name || "Gênero desconhecido",
      cartFilmes_img:`https://image.tmdb.org/t/p/w500/${filme.poster_path}`,
      cartFilmes_title: filme.title,
      cartFilmes_IMDB: true,
    };

    const result = await GuardarFilme(catalogoFilme)

    console.log(result);
}
}