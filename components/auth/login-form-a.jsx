"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, Suspense } from "react";

import { LoginSchema } from "@/schemas";
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
import { login } from "@/actions/login";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";
import Link from "next/link";

const LoginFormA = () => {
  const urlError = useCustomSearchParams();
  const [error, setError] = useState(urlError);
  const [success, setSuccess] = useState("");
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("An error occurred. Please try again."));
    });
  };

  return (
    <CardWrapper
      headerLabel={"Welcome Back!"}
      backButtonLabel={"Don't have an Account?"}
      backButtonHref={"/auth/register"}
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              disabled={isPending}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="j.smith@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isPending}
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="********" type="password" />
                  </FormControl>
                  <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="px-0 font-normal"
                  >
                    <Link href="/auth/reset">Forgot Password?</Link>
                  </Button>
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
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LoginFormA />
  </Suspense>
);
