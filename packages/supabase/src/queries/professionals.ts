import type { SupabaseClient } from "@supabase/supabase-js";
import type { Professional } from "@workspace/types";

type Filters = { specialty?: string };

export async function getProfessionals(
  client: SupabaseClient,
  filters?: Filters,
  page: number = 1,
  pageSize: number = 10
): Promise<{
  data: Professional[];
  page: number;
  pageSize: number;
  total: number;
}> {
  let query = client.from("professionals").select("*", { count: "exact" });

  if (filters?.specialty) {
    query = query.eq("specialty", filters.specialty);
  }

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  query = query.range(from, to);

  const { data, count, error } = await query;

  if (error) {
    console.error("Erro ao buscar profissionais:", error.message);
    throw new Error("Não foi possível buscar os profissionais.");
  }

  return {
    data: data || [],
    page,
    pageSize,
    total: count ?? 0,
  };
}
