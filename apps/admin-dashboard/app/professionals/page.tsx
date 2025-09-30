
'use client'

import { useProfessionals } from "./hooks/useProfessionals";

export default function Professionals() {
  const { data: professionals, isLoading, isError } = useProfessionals({
    page: 1,
    pageSize: 10,
  });

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <h2>PROFESSIONALS</h2>
      </div>
    </div>
  )
}
