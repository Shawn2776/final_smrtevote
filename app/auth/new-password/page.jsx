"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const NewPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return <div>{token}</div>;
};

export default NewPasswordPage;
