// src/server/tmdb.ts
'use server';

import { dadosImdb } from "@/app/interface";

const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY || "bbc155bdde2230ddd3afc634917c418a";

export async function buscarPorGenero(genero: string, slice?: number) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${genero}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
    const data = await response.json();
    const arrayResult: dadosImdb[] = data.results;
    return slice ? arrayResult.slice(0, slice) : arrayResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function buscarFilmePorId(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);

    const result: dadosImdb = await response.json();
    return result
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function buscarPorNome(nome: string) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${nome}&language=pt-BR`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
    const data = await response.json();
    return data.results as dadosImdb[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
