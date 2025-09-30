import type { SupabaseClient } from "@supabase/supabase-js";
import type { Professional } from "@workspace/types"; // Verifique se o nome do pacote está correto

/**
 * Busca todos os profissionais ativos no banco de dados.
 * @param client - A instância do cliente Supabase a ser usada.
 * @returns Uma promessa que resolve para um array de profissionais.
 */
export async function getProfessionals(
  client: SupabaseClient
): Promise<Professional[]> {
  const { data, error } = await client.from("teste").select("*");
  // Futuramente, podemos adicionar filtros, como: .eq('isActive', true);

  if (error) {
    console.error("Erro ao buscar profissionais:", error.message);
    throw new Error("Não foi possível buscar os dados dos profissionais.");
  }

  // Retorna os dados ou um array vazio se data for null
  return data || [];
}
