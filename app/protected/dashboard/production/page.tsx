import prisma from "@/lib/db";

import { ProductionProjecForm } from "./form";
import { DataTable } from "./data-table";
import { ProductionTableType, columns } from "./columns";

import { Separator } from "@/components/ui/separator";
import { DrawerDialog } from "./data-table";
import { LayoutDashboardGrid } from "@/components/layout-grid";

export default async function ProductionProjectPage() {
  const data = await prisma.productionProject.findMany({
    include: {
      images: true,
    },
  });

  return (
    <LayoutDashboardGrid>
      <h1 className="antialiased font-abc-favorit-bold text-4xl">Production</h1>

      <div className="flex flex-col gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2
            className="
            antialiased
            font-abc-favorit-regular
            text-2xl
          "
          >
            Create a new project
          </h2>
          <Separator />
          <ProductionProjecForm />
        </div>

        <Separator />

        <div className="flex-1 flex flex-col gap-4">
          <h2
            className="
            antialiased
            font-abc-favorit-regular
            text-2xl
          "
          >
            Existing projects
          </h2>
          <Separator />
          <DataTable columns={columns} data={data as any} />
        </div>
      </div>
      <DrawerDialog />
    </LayoutDashboardGrid>
  );
}
