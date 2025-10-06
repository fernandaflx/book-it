import { useQuery } from "@tanstack/react-query";

import { supabaseClient } from "@/lib/supabaseClient";
import { getProfessionals } from "@workspace/supabase";

type UseProfessionalsParams = {
  page: number;
  pageSize: number;
  filters?: { specialty?: string };
};

export function useProfessionals(params: UseProfessionalsParams) {
  const { page, pageSize, filters } = params;

  return useQuery({
    queryKey: ["professionals", page, pageSize, filters],
    queryFn: () => getProfessionals(supabaseClient, filters, page, pageSize),
  });
}
