"use client";

import { useForm } from "react-hook-form";

const { Button } = require("./ui/button");
const {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} = require("./ui/form");
const { Input } = require("./ui/input");
const {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} = require("./ui/select");

const updateElection = async (data) => {
  console.log(data);
};

export const ElectionUpdateForm = ({ election }) => {
  const form = useForm({
    defaultValues: {
      title: election.title,
      description: election.description,
      electionDate: election.electionDate,
      electionType: election.electionType,
    },
  });

  const { isPending, handleSubmit } = form;

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-lg p-8 bg-white rounded shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-center">
            Update Election
          </h1>
          <form onSubmit={handleSubmit(updateElection)}>
            <FormField
              disabled={isPending}
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
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
                    <Select onValueChange={field.onChange}>
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

            <div className="flex justify-center mt-6">
              <Button type="submit" variant="primary" disabled={isPending}>
                {isPending ? "Updating..." : "Update Election"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
