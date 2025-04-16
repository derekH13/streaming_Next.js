'use server';

import { redirect } from 'next/navigation';

export async function handleSubmit(formData: FormData) {



  const query = formData.get('pesquisa')?.toString() ?? '';
  const path = `/Filmes/busca?q=${encodeURIComponent(query)}`;
  redirect(path); // redireciona para a mesma página com query
}
