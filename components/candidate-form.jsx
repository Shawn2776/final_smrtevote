"use client";

import * as z from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewCandidateSchema } from "@/schemas";
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
import { newCandidate } from "@/actions/ballots";
import { Suspense, useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import CardWrapperFull from "./auth/card-wrapper-full";

const NewCandidateForm = () => {
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
    resolver: zodResolver(NewCandidateSchema),
    defaultValues: {
      name: "",
      position: "",
      notes: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values) => {
    startTransition(() => {
      setError("");
      setSuccess("");

      newCandidate(ballotId, values).then((data) => {
        setError(data.error);
        setSuccess(data.success);

        if (data.success) {
          router.push(`/elections/${data.election.id}/overview`);
        }
      });
    });
  };

  return (
    <CardWrapperFull
      headerLabel={"New Candidate"}
      backButtonLabel={"Back to Dashboard"}
      backButtonHref={"/dashboard"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              disabled={isPending}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Candidate Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Candidate's Name..."
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
                  name="notes"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter a Description..."
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
                    <FormItem className="w-full">
                      <FormLabel>Position</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Candidate's Position..."
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
            Create New Candidate
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
    <NewCandidateForm />
  </Suspense>
);

export default SuspenseWrapper;
