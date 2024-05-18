"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/lib/tokens";
import { sendTwoFactorTokenEmail, sendVerificationEmail } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/data/twoFactorConfirmation";

export const login = async (values) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent!" };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    console.log("1");
    const twoFactorToken = await generateTwoFactorToken(existingUser.email);
    console.log("5");
    if (code) {
      console.log("6");
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

      console.log("9");
      if (!twoFactorToken || twoFactorToken.token !== code) {
        return { error: "Invalid two-factor code" };
      }

      const hasExpired = new Date(twoFactorToken.expiresAt) < new Date();

      if (hasExpired) {
        return { error: "Two-factor code has expired" };
      }

      console.log("10");
      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });

      console.log("11");

      console.log("12");
      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );

      console.log("15");
      if (existingConfirmation) {
        await db.existingConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }

      console.log("16");

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      console.log("17");
      await sendTwoFactorTokenEmail(existingUser.email, twoFactorToken.token);

      console.log("18");
      return { twoFactor: true };
    }

    console.log("20");
  }

  console.log("21");

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
