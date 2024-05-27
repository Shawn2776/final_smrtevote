"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewCandidateSchema, NewQuestionSchema } from "@/schemas";
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
import { useEffect, useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { newCandidate } from "@/actions/ballots";
import CardWrapperFull from "./auth/card-wrapper-full";
import { Textarea } from "./ui/textarea";

const NewCandidateForm = () => {
  const searchParams = useSearchParams();
  const ballotId = searchParams.get("ballotId");

  useEffect(() => {
    if (!ballotId) {
      console.error("No election ID provided!");
    }
  }, [ballotId]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(NewCandidateSchema),
    defaultValues: {
      name: "",
      position: "",
      image: "",
      notes: "",
      resume: "",
    },
  });

  const onSubmit = (values) => {
    startTransition(() => {
      setError("");
      setSuccess("");

      newCandidate(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);

        if (data.success) {
          router.push(`/elections/${data.election.id}/ballot`);
        }
      });
    });
  };

  const router = useRouter();

  return (
    <CardWrapperFull
      headerLabel={"New Candidate"}
      backButtonLabel={"Back to Dashboard"}
      backButtonHref={`/dashboard`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex gap-4">
            <input type="image" src="https://placehold.co/300x300" />
            <div className="w-full space-y-4 flex-flex-col">
              <FormField
                disabled={isPending}
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Candidate's Name"
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
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Candidate's Position" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                disabled={isPending}
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter Candidate's Description..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

export default NewCandidateForm;
