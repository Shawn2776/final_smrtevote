"use client";

import { signOut, useSession } from "next-auth/react";

const DashboardPage = () => {
  const session = useSession();

  const handleSignout = () => {
    signOut();
  };
  return (
    <div>
      {JSON.stringify(session)}
      <button onClick={handleSignout} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default DashboardPage;
