import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center ">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              variant="outline"
              disabled
              className="opacity-50 cursor-not-allowed pointer-events-none border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-xl font-semibold shadow-md"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="default"
              disabled
              className="opacity-50 cursor-not-allowed pointer-events-none border-2 bg-blue-500 text-gray-800 px-6 py-2 rounded-xl font-semibold shadow-md"
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>

          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-4">
    <Button
      asChild
      size="sm"
      variant="outline"
      className="border-blue-400 bg-transparent text-blue-400 px-6 py-2 border-2 rounded-xl font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500 shadow-md transition duration-300"
    >
      <Link href="/sign-in">Sign in</Link>
    </Button>
    <Button
      asChild
      size="sm"
      variant="default"
      className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 shadow-md transition duration-300"
    >
      <Link href="/sign-up">Sign up</Link>
    </Button>
  </div>
  
  );
}
