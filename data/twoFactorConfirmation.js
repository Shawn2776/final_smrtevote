import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userId) => {
  console.log("13");
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: {
        userId,
      },
    });

    console.log("14: ", twoFactorConfirmation);

    return twoFactorConfirmation;
  } catch (error) {
    return null;
  }
};
