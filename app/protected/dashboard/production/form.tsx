"use client";

import { createProductionSchema } from "@/lib/validations/production-project";
import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import { createProductionProjectAction } from "./_action";
import { toast } from "sonner";

export const ProductionProjecForm = () => {
  const handleSubmit = async (values: any) => {
    try {
      await createProductionProjectAction(values);
      toast.success("Project created");
    } catch (error) {
      console.log(error);
      toast.error("");
    }
  };

  return (
    <AutoForm
      formSchema={createProductionSchema}
      onSubmit={handleSubmit as any}
    >
      <AutoFormSubmit>Submit</AutoFormSubmit>
    </AutoForm>
  );
};
