"use client";

import { useState } from "react";

import { PencilIcon, X } from "lucide-react";
import { deleteQuestionAction } from "./_action";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export function AccordionQuestion({ questions }: { questions: Question[] }) {
  const [search, setSearch] = useState("");

  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher une question"
      />

      <Accordion type="single" collapsible>
        {filteredQuestions.map((q: Question, i: number) => (
          <AccordionItem key={i} value="item-1">
            <div className="flex items-center justify-between p-2 rounded-md">
              <div className="flex flex-col">
                <h3 className="antialiased text-xs font-abc-favorit-regular text-gray-400">
                  {q.category}
                </h3>
                <AccordionTrigger>{q.question}</AccordionTrigger>
                <AccordionContent>{q.answer}</AccordionContent>
              </div>
              <div className="flex space-x-2">
                <div className="cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                  <PencilIcon className="w-4 h-4" />
                </div>
                <div
                  className="cursor-pointer p-2 rounded-lg hover:bg-red-100"
                  onClick={async () => {
                    await deleteQuestionAction(q.id);
                    toast.success("Question deleted successfully");
                  }}
                >
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
