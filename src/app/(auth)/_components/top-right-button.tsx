"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TopRightButton() {
  const pathname = usePathname();

  return (
    <Link
      href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute right-4 top-4 md:right-8 md:top-8"
      )}
    >
      {pathname === "/sign-in" ? "Sign Up" : "Sign In"}
    </Link>
  );
}
