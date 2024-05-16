"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BackButton = ({ href, label }) => {
  return (
    <Button variant="link" size="sm" className="w-full font-normal" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
