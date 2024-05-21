"use client";

import * as z from "zod";

import { NewElectionSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { startTransition, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import CardWrapper from "./auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { Button } from "./ui/button";
import { updateElectionById } from "@/actions/elections";

export const Election = ({ election }) => {
  const {
    id,
    name,
    description,
    electionDate,
    status,
    electionType,
    candidates,
  } = election;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const [elect, setElect] = useState({
    id: id,
    name: name,
    description: description,
    electionDate: electionDate,
    status: status,
    electionType: electionType,
    candidates: candidates,
  });

  const form = useForm({
    resolver: zodResolver(NewElectionSchema),
    defaultValues: {
      name: elect.name,
      description: elect.description,
      electionDate: elect.electionDate,
      status: elect.status,
      electionType: elect.electionType,
      candidates: elect.candidates,
    },
  });

  const onSubmit = (values) => {
    startTransition(() => {
      setError("");
      setSuccess("");

      updateElectionById(elect.id, values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel={"Update Election"}
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
                  <FormLabel>Election Name</FormLabel>
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
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
              name="electionDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Range</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="5/12/2024 - 5/15/2024" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isPending}
              control={form.control}
              name="electionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Election Type</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={elect.electionType}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Election Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="election">Election</SelectItem>
                        <SelectItem value="poll">Poll</SelectItem>
                      </SelectContent>
                    </Select>
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
            Update Election
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
