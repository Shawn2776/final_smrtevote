"use client";

import { useParams, useSearchParams } from "next/navigation";

const Error = {
  Configuration: "Configuration",
};

const errorMap = {
  [Error.Configuration]: (
    <p>
      There was a problem when trying to authenticate. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="p-1 text-xs rounded-sm bg-slate-100">Configuration</code>
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error");

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <a
        href="#"
        className="block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="flex flex-row items-center justify-center gap-2 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Something went wrong
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          {errorMap[error] || "Please contact us if this error persists."}
        </div>
      </a>
      <div></div>
    </div>
  );
}
