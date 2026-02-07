import React from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

const NewProjectPage = () => {
  return (
    <div className="min-h-full p-4 border rounded-md">
      <h1>Create new project</h1>
      <Field className="flex flex-col space-y-4 mt-3">
        <div className="flex space-x-4 justify-between">
          <div className="w-full flex flex-col space-y-1">
            <FieldLabel>Meow</FieldLabel>
            <Input placeholder="meow" />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <FieldLabel>Meow</FieldLabel>
            <Input placeholder="meow" />
          </div>
        </div>
        <div className="flex space-x-4 justify-between">
          <div className="w-full flex flex-col space-y-1">
            <FieldLabel>Meow</FieldLabel>
            <Input placeholder="meow" />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <FieldLabel>Meow</FieldLabel>
            <Input placeholder="meow" />
          </div>
        </div>
      </Field>
    </div>
  );
};

export default NewProjectPage;
