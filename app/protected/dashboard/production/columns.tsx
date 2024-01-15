"use client";

import Image from "next/image";
import { toast } from "sonner";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { deleteProductionProjectAction } from "./_action";

import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type ProductionTableType = {
  id: string;
  client: string;
  role: string;
  description: string;
  year: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<ProductionTableType>[] = [
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  // {
  //   accessorKey: "images",
  //   header: "Images",
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex flex-wrap">
  //         {row.original.images.map((image) => (
  //           <div key={image} className="w-1/2">
  //             <Image src={image.url} width={50} height={50} alt="" />
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   },
  // },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return formatDate(row.original.createdAt);
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      return formatDate(row.original.updatedAt);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              Copy project ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500"
              onClick={async () => {
                if (confirm("Are you sure you want to delete this project?")) {
                  try {
                    await deleteProductionProjectAction(project.id);
                    toast.success("Project with id " + project.id + " deleted");
                  } catch (error: any) {
                    alert("Something went wrong");
                    toast.error(error.message);
                  }
                }
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
