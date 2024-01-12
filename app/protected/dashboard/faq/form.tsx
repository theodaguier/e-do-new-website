"use client";

import { createQuestionSchema } from "@/lib/validations/questions";
import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import { createQuestionAction } from "./_action";
import { toast } from "sonner";

export const QuestionForm = () => {
  const handleSubmit = async (values: any) => {
    try {
      await createQuestionAction(values);
      toast.success("Question created");
    } catch (error) {
      console.log(error);
      toast.error("");
    }
  };

  return (
    <AutoForm formSchema={createQuestionSchema} onSubmit={handleSubmit as any}>
      <AutoFormSubmit>Submit</AutoFormSubmit>
    </AutoForm>
  );
};
