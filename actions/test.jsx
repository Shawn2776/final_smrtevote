"use client";

import * as z from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewQuestionSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CardWrapper from "@/components/auth/card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { newQuestion } from "@/actions/ballots";
import { Suspense, useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

const fields = [
  { id: "option1", label: "Option 1" },
  { id: "option2", label: "Option 2" },
  { id: "option3", label: "Option 3" },
  { id: "option4", label: "Option 4" },
];

const NewQuestionForm = () => {
  const searchParams = useSearchParams();
  const ballotId = searchParams.get("ballotId");

  useEffect(() => {
    if (!ballotId) {
      console.error("No ballot ID provided!");
    }
  }, [ballotId]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(NewQuestionSchema),
    defaultValues: {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values) => {
    setError("");
    setSuccess("");

    try {
      const data = await newQuestion(ballotId, values);

      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(data.success);

        if (data.success) {
          startTransition(() => {
            router.push(`/elections/${data.election.id}/ballot`);
          });
        }
      }
    } catch (err) {
      console.error("Error in newQuestion:", err);
      setError("An error occurred while creating the question.");
    }
  };

  return (
    <CardWrapper
      headerLabel={"New Question"}
      backButtonLabel={"Back to Dashboard"}
      backButtonHref={"/elections"}
    >
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(onSubmit)();
          }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              disabled={isPending}
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter a Question..."
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.map((field, index) => (
              <FormField
                key={index}
                disabled={isPending}
                control={form.control}
                name={field.id}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter an Option..."
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full shadow-md shadow-gray-500"
          >
            Create New Question
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

const SuspenseWrapper = () => (
  <Suspense
    fallback={
      <div>
        <BeatLoader />
      </div>
    }
  >
    <NewQuestionForm />
  </Suspense>
);

export default SuspenseWrapper;
