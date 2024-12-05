"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AgreementParagraph() {
  const pathname = usePathname();

  return pathname === "/sign-in" || pathname === "/sign-up" ? (
    <p className="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our{" "}
      <Link
        href="#"
        className="underline underline-offset-4 hover:text-primary"
      >
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link
        href="#"
        className="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </Link>
      .
    </p>
  ) : null;
}
