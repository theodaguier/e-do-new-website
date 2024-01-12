import prisma from "@/lib/db";

import { ProductionProjecForm } from "./form";
// import { AccordionQuestion } from "./accordion";

import { Separator } from "@/components/ui/separator";

export default async function ProductionProjectPage() {
  // const projects = await prisma.productionProject.findMany();

  return (
    <div className="flex flex-col gap-8 h-full">
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
          {/* <AccordionQuestion questions={questions} /> */}
        </div>
      </div>
    </div>
  );
}
