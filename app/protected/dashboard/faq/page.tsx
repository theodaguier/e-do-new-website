import prisma from "@/lib/db";

import { QuestionForm } from "./form";
import { AccordionQuestion } from "./accordion";

import { Separator } from "@/components/ui/separator";

export default async function FaqPage() {
  const questions = await prisma.question.findMany();

  return (
    <div className="flex flex-col gap-8 h-full">
      <h1 className="antialiased font-abc-favorit-bold text-4xl">FAQ</h1>

      <div className="flex flex-col gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2
            className="
            antialiased
            font-abc-favorit-regular
            text-2xl
          "
          >
            Create a new question
          </h2>
          <Separator />
          <QuestionForm />
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
            Existing question
          </h2>
          <Separator />
          <AccordionQuestion questions={questions} />
        </div>
      </div>
    </div>
  );
}
