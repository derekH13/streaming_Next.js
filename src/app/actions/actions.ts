'use server'

import { CatalogoFilme } from "../interface"

export async function GuardarFilme(filme: CatalogoFilme) {
  const url = 'https://deckin13.pythonanywhere.com/catalogo/Filmes/'

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // <- Adicionado aqui
      },
      body: JSON.stringify(filme),
    })

    console.log(response)

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`)
    }

    return { success: true, message: "Guardado com Sucesso!!" }

  } catch (error) {
    return { success: false, message: "Tente Novamente: " + error }
  }
}

