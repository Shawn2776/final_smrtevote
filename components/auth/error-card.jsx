import CardWrapper from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full items-center flex justify-center">
        <ExclamationTriangleIcon className="text-destructive w-5 h-5" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
