import { Button } from "@/src/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginPage() {
    return (
        <main className="h-dvh flex flex-col items-center gap-6 text-4xl mt-8 p-4">
            <h1>Nawabi Repair Shop</h1>
            <Button className="bg-gray-400 hover:bg-gray-600" asChild>
                <LoginLink>Login</LoginLink>
            </Button>
        </main>
    )
}