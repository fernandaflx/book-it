import { ColumnDef } from "@tanstack/react-table"
import { Professional } from "@workspace/types"
import { Button } from "@workspace/ui/components/button"
import { Trash, UserPen } from "lucide-react"

export const columns: ColumnDef<Professional>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "specialty",
    header: "Especialidade",
    //TODO: Create reusable capitalize function
    cell: ({ row }) => {
      const specialty = row.getValue("specialty") as string
      const formatted =
        specialty.charAt(0).toUpperCase() + specialty.slice(1)

      return <span>{formatted}</span>
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <div className="flex gap-4 justify-end">
          <Button size='icon' variant='outline' >
            <UserPen />
          </Button>
          <Button size='icon' variant='secondary'>
            <Trash />
          </Button>
        </div>
      )
    },
  },
]