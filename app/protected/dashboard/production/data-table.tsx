"use client";
import React from "react";

import { toast } from "sonner";
import { updateProductionSchema } from "@/lib/validations/production-project";
import {
  getProductionProjectByIdAction,
  updateProductionProjectAction,
} from "./_action";
import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import { useState, useEffect, useCallback, memo } from "react";
import cn from "classnames";

import { useModale } from "./columns";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="cursor-pointer"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export function DrawerDialog() {
  const { isOpen, setOpen } = useModale() as {
    isOpen: boolean;
    id: string;
    setOpen: (open: boolean) => void;
  };

  // useEffect(() => {
  //   setOpen(isOpen);
  // }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
          <DialogDescription>Make changes on this project.</DialogDescription>
        </DialogHeader>
        <ProjecteForm />
      </DialogContent>
    </Dialog>
  );
}

type Data = {
  productionProject: {
    client: string;
    role: string;
    year: string;
    description: string;
  };
  images: {
    src: string;
    alt: string;
  };
};

function ProjecteForm({ className }: React.ComponentProps<"form">) {
  const { id, setOpen } = useModale() as {
    id: string;
    isOpen: boolean;
    setOpen(state: any): void;
  };

  const [data, setData] = useState<Data | null>({
    productionProject: {
      client: "",
      role: "",
      year: "",
      description: "",
    },
    images: {
      src: "",
      alt: "",
    },
  });

  const fetchData = useCallback(async () => {
    const result = await getProductionProjectByIdAction(id);
    setData(result.productionProject as any);
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, fetchData]);

  const updateProductionProject = useCallback(
    async (values: Data) => {
      const result = await updateProductionProjectAction(id, values);
      console.log(result);
      setOpen((state: { isOpen: boolean }) => ({
        ...state,
        isOpen: false,
        id: "",
      }));
      toast.success("Project updated successfully.");
    },
    [id, setOpen]
  );

  return (
    <AutoForm
      formSchema={updateProductionSchema}
      onSubmit={updateProductionProject as any}
      className={cn("space-y-4", className)}
      fieldConfig={{
        client: {
          inputProps: {
            defaultValue: data?.productionProject.client,
          },
        },
        role: {
          inputProps: {
            defaultValue: data?.productionProject.role,
          },
        },
        year: {
          inputProps: {
            defaultValue: data?.productionProject.year,
          },
        },
        description: {
          inputProps: {
            defaultValue: data?.productionProject.description,
          },
        },
        // images: {
        //   inputProps: {
        //     defaultValue: data?.images.src,
        //   },
        // },
      }}
    >
      <AutoFormSubmit>Save</AutoFormSubmit>
    </AutoForm>
  );
}

export default memo(ProjecteForm);
