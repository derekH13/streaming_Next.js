'use server'

export async function BuscarUsername(name: string){
  'use server'
    const url = `https://deckin13.pythonanywhere.com/cadastro/username/${name}/`
    try {
        const response = await fetch(url)
    
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`)
        }

        const result = await response.json()

        return result
    
      } catch (error) {
        return { success: false, message: "Tente Novamente:" + error }
      }
}