import { ClientLogout } from "@/actions/logout";
import { auth } from "@/auth";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col gap-4">
      {JSON.stringify(session)}
      <button onClick={ClientLogout} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
