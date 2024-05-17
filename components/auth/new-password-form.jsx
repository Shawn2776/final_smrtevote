"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { NewPasswordSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CardWrapper from "@/components/auth/card-wrapper";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { newPassword } from "@/actions/new-password";

const NewPasswordForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values, token) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess(data.success);
        }
      });
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsForm
        form={form}
        onSubmit={onSubmit}
        error={error}
        success={success}
        isPending={isPending}
      />
    </Suspense>
  );
};

const SearchParamsForm = ({ form, onSubmit, error, success, isPending }) => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = (values) => {
    onSubmit(values, token);
  };

  return (
    <CardWrapper
      headerLabel={"Enter a New Password"}
      backButtonLabel={"Back to Login"}
      backButtonHref={"/auth/login"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="********" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full shadow-md shadow-gray-500"
          >
            Reset Password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default NewPasswordForm;
