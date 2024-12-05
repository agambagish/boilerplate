import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { type PropsWithChildren, Suspense } from "react";

import { PuzzleIcon } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/lib/auth";

import { AgreementParagraph } from "./_components/agreement-paragraph";
import { TopRightButton } from "./_components/top-right-button";

export default async function Layout({ children }: PropsWithChildren) {
  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  if (sessionData?.user.emailVerified) {
    redirect("/");
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <div className="container relative grid h-[100vh] flex-col items-center justify-center md:max-w-none lg:grid-cols-2 lg:px-0">
        <TopRightButton />
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <PuzzleIcon className="mr-2 size-6" />
            Boilerplate
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minima, reiciendis ut suscipit dolorem modi veritatis magni
                aliquam id. Dolorum!&rdquo;
              </p>
              <footer className="text-sm">John Doe</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <div className="flex justify-center">{children}</div>
            <AgreementParagraph />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

function LoadingSkeleton() {
  return (
    <div className="container relative grid h-[100vh] flex-col items-center justify-center md:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <Skeleton className="h-9 w-20" />
      </div>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Skeleton className="mr-2 h-6 w-6" />
          <Skeleton className="h-6 w-24" />
        </div>
        <div className="relative z-20 mt-auto">
          <Skeleton className="mb-2 h-16 w-full" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6">
          <div className="flex justify-center">
            <div className="z-50 w-96 max-w-md rounded-md rounded-t-none border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="p-6 pt-0">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-9 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-9 w-full" />
                    <Skeleton className="h-1 w-full" />
                    <Skeleton className="h-4 w-48" />
                    <div className="space-y-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Skeleton className="h-4 w-4" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Skeleton className="h-9 w-full" />
                </div>
              </div>
            </div>
          </div>
          <Skeleton className="mx-auto h-4 w-72" />
        </div>
      </div>
    </div>
  );
}
