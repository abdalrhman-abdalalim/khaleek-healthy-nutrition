import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginButton = () => {
  return (
    <div className="flex items-center gap-4">
      <Button
        className="bg-background text-secondary hover:bg-background/90"
        asChild
      >
        <Link href="/Register" className="text-background">
          ابدأ مجاناً
        </Link>
      </Button>
    </div>
  );
};
export default LoginButton;