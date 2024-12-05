import { type PropsWithChildren } from "react";

import { Toaster } from "@/components/ui/sonner";

interface Props extends PropsWithChildren {
  className?: string;
}

export function Providers({ children, className }: Props) {
  return (
    <>
      {children}
      <Toaster richColors className={className} theme="light" />
    </>
  );
}
