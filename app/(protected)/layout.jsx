import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import ProtectedNavbar from "./_components/navbar";

const ProtectedLayout = async ({ children }) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="w-full min-h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <ProtectedNavbar />
        <div className="flex flex-col items-center justify-center pb-10 gap-y-10">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
};

export default ProtectedLayout;
