import { dadosImdb } from "@/app/interface";

const apiKey = "bbc155bdde2230ddd3afc634917c418a";

export class Util {
  
  static RequisicaoGenero = async (genero: string, slice: number | undefined) => {
      "use server"
          const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${genero}`

        try {
          const response = await fetch(url);
    
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
          }
    
          const data = await response.json();

          const arrayResult: dadosImdb[] = data.results

          if (slice) {
            return arrayResult.slice(0, slice);
          }
        return arrayResult
    
        } catch (error) {
          console.error(error);
        }
      };

    static async RequisiçãoId(movie_id: string){
      "use server"
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=pt-BR`

      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
  
        const data = await response.json();

        const result: dadosImdb = data

      return result
  
      } catch (error) {
        console.error(error);
      }
    }

    static async requisicaoNome(nome: string) {
      "use server"
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${nome}&language=pt-BR`
      try{
        const response = await fetch(url)

        if(!response.ok){
          throw new Error(`${response.status}`)
        }

        const data = await response.json()

        const result: dadosImdb[] = data.results


        return result
      }catch(err){
        console.error(err)
      }

    }
    static async buscarAnimeGenero(num: string){
      "use server"

      const url = `https://api.jikan.moe/v4/anime?genres=${num}`
      try{
        const response = await fetch(url)

        if(!response.ok){
          throw new Error('erro:' + response.status)
        }

        const data = await response.json()
        return data.data

      }catch(err){
        console.error(err)
      }
        

    }
}