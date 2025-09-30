import type { SupabaseClient } from "@supabase/supabase-js";
import type { Professional } from "@workspace/types";

export async function getProfessionals(
  client: SupabaseClient,
  filters?: { specialty?: string }
): Promise<Professional[]> {
  let query = client.from("professionals").select("*");

  if (filters?.specialty) {
    query = query.eq("specialty", filters.specialty);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Erro ao buscar profissionais:", error.message);
    throw new Error("Não foi possível buscar os dados dos profissionais.");
  }

  return data || [];
}
