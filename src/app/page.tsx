import { headers } from "next/headers";
import Link from "next/link";

import { UserButton } from "@/components/global/user-button";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";

export default async function Page() {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex h-[100vh] items-center justify-center">
      {sessionData ? (
        <UserButton />
      ) : (
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      )}
    </main>
  );
}
