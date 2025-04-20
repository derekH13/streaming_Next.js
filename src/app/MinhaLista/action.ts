import { CatalogoFilme } from "../interface"

export async function buscarFilmesUser(idUser: number){
    const url = `https://deckin13.pythonanywhere.com/catalogo/cartUser/${idUser}/`

    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('Falaha na busca dos filmes' + response.status)
        }

        const result: CatalogoFilme[] | CatalogoFilme = await response.json()
        return result

    }catch(err){
        console.error(err)
    }
}