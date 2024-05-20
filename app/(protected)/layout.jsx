import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const layout = async ({ children }) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="w-full h-full">
        <div>{children}</div>
      </div>
    </SessionProvider>
  );
};

export default layout;
