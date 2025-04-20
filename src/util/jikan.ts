// src/server/jikan.ts
'use server';

import { dadosAnime, typeAnime } from "@/app/interface";

export async function buscarAnimeGenero(num: string, slice?: number) {
  const url = `https://api.jikan.moe/v4/anime?genres=${num}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    const data = await response.json();
    const result: dadosAnime[] = data.data;
    return slice ? result.slice(0, slice) : result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function buscarAnimeId(num: string) {
  const url = `https://api.jikan.moe/v4/anime/${num}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    const data: typeAnime = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
