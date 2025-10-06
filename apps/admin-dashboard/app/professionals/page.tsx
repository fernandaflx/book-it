
'use client'

import { DataTable } from "@/features/professionals/components/DataTable/data-table";
import { columns } from "@/features/professionals/components/DataTable/colums";
import { useProfessionals } from "@/features/professionals/hooks/useProfessionals";
import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Plus } from "lucide-react";

export default function Professionals() {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data: professionals, isLoading, isError } = useProfessionals({
    page,
    pageSize,
  });

  return (
    <div className="flex justify-center min-h-auto">
      <div className="flex flex-col items-center justify-center gap-4 min-w-3/4 ">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-bold">Professionals</h1>
          <Button>
            <Plus />
            Add Professional
          </Button>
        </div>
        {/* TODO: add searchbar */}
        <DataTable
          columns={columns}
          data={professionals?.data ?? []}
          page={page}
          pageSize={pageSize}
          total={professionals?.total ?? 0}
          onPageChange={setPage}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  )
}
