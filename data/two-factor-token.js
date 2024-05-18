import { db } from "@/lib/db";

export const getTwoFactorTokenByToken = async (token) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: {
        token,
      },
    });

    return twoFactorToken;
  } catch (error) {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email) => {
  console.log("7");
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: {
        email,
      },
    });

    console.log("8: ", twoFactorToken);
    return twoFactorToken;
  } catch (error) {
    return null;
  }
};
