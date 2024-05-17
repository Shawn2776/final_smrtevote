import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useCustomSearchParams = () => {
  const searchParams = useSearchParams();
  const urlError = useMemo(() => {
    return searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  }, [searchParams]);

  return urlError;
};

export default useCustomSearchParams;
