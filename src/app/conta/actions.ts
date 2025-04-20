'use server'



type CadastroState = {
    success: boolean
    message: string
    token?: string
    username?: string
  }
  export async function Cadastro(prevState: CadastroState, formData: FormData): Promise<CadastroState> {
    const nome = formData.get('nome')?.toString() ?? ''
    const email = formData.get('email')?.toString() ?? ''
    const senha = formData.get('senha')?.toString() ?? ''
    const rSenha = formData.get('rSenha')?.toString() ?? ''

 
  
    console.log('Valores recebidos:', nome, email, senha, rSenha)
  
    if (!nome || !email || !senha || !rSenha) {
      return { success: false, message: 'Preencha todos os campos' }
    }
  
    if (senha !== rSenha) {
      return { success: false, message: 'As senhas não coincidem' }
    }
  
    try {
      const response = await fetch('https://deckin13.pythonanywhere.com/cadastro/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: nome,
          email: email,
          password: senha,
        }),
      })
  
      if (!response.ok) {
        const errorText = await response.text()
        console.log('Erro:', errorText)
        return { success: false, message: `Erro: ${errorText}` }
      }
  
      console.log('Cadastro realizado!')
      return { success: true, message: 'Cadastro realizado com sucesso!' }



    } catch (err) {
      console.log('Erro ao cadastrar:', err)
      return { success: false, message: 'Erro inesperado ao cadastrar.' }
    }


  }




  export async function Logar(prevState: CadastroState, formData: FormData): Promise<CadastroState> {
    const nome = formData.get('nome')?.toString() ?? ''
    const email = formData.get('email')?.toString() ?? ''
    const senha = formData.get('senha')?.toString() ?? ''
 
  
    console.log('Valores recebidos:', nome, email, senha)
  
    if (!nome || !email || !senha) {
      return { success: false, message: 'Preencha todos os campos' }
    }
  

  
    try {
      const response = await fetch('https://deckin13.pythonanywhere.com/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: nome,
          email: email,
          password: senha,
        }),
      })
  
      if (!response.ok) {
        const errorText = await response.text()
        console.log('Erro:', errorText)
        return { success: false, message: `Erro: ${errorText}` }
      }

      const data = await response.json()
  
      
      return {
        success: true,
        message: 'Login realizado com sucesso!',
        token: data.token,
        username: nome,
      }



    } catch (err) {
      console.log('Erro ao Logar:', err)
      return { success: false, message: 'Erro inesperado ao Logar.' }
    }


  }