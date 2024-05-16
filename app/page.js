import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Welcome to SMRTeVote</h1>

        <LoginButton>
          <Button size="lg">Get started</Button>
        </LoginButton>
      </div>
    </main>
  );
}
