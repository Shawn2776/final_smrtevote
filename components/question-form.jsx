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
import CardWrapperFull from "./auth/card-wrapper-full";

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
    <CardWrapperFull
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

            <hr className="w-full mx-auto" />

            <div className="flex flex-col w-full gap-6">
              <div className="flex gap-2 justify-evenly">
                <FormField
                  disabled={isPending}
                  control={form.control}
                  name="option1"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Option 1:</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Option One..."
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isPending}
                  control={form.control}
                  name="option2"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Option 2:</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Option Two..."
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2 justify-evenly">
                <FormField
                  disabled={isPending}
                  control={form.control}
                  name="option3"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Option 3:</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Option Three..."
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isPending}
                  control={form.control}
                  name="option4"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Option 4:</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Option Four..."
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
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
    </CardWrapperFull>
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
