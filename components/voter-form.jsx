"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewVoterSchema } from "@/schemas";
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
import { newElection } from "@/actions/new-election";
import { useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";
import { addVoterToElection } from "@/actions/voters";

const VoterForm = ({ electionId }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(NewVoterSchema),
    defaultValues: {
      name: "",
      email: "",
      voterId: "",
      voterKey: "",
    },
  });

  const onSubmit = (values) => {
    startTransition(() => {
      setError("");
      setSuccess("");

      addVoterToElection(electionId, values).then((data) => {
        setError(data.error);
        setSuccess(data.success);

        if (data.success) {
          router.push(`/elections/${data.electionId}/voters`);
        }
      });
    });
  };

  const router = useRouter();

  return (
    <CardWrapper
      headerLabel={"New Voter"}
      backButtonLabel={"Back to Dashboard"}
      backButtonHref={`/dashboard`}
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
                  <FormLabel>Voter Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isPending}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voter Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isPending}
              control={form.control}
              name="voterId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voter ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isPending}
              control={form.control}
              name="voterKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voter Key</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              disabled={isPending}
              control={form.control}
              name="electionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Election Type</FormLabel>

                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Election Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="election">Election</SelectItem>
                        <SelectItem value="poll">Poll</SelectItem>
                      </SelectContent>
                    </FormControl>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full shadow-md shadow-gray-500"
          >
            Add Voter
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default VoterForm;
