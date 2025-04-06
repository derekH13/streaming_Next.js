'use server';

export async function Pesquisar(formData: FormData) {
  const query = formData.get("pesquisa")?.toString();
  console.log("🔍 Termo de busca:", query);

  // Ex: chamar a API aqui:
  // const resultado = await Util.requisicaoNome(query);

  return query;
}
