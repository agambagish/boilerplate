import { TriangleAlertIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page() {
  return (
    <Card className="z-50 w-96 max-w-md rounded-md rounded-t-none">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Verify your email</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          We have sent you a verification email, please check the inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-amber-500/50 px-4 py-3 text-amber-600">
          <p className="text-sm">
            <TriangleAlertIcon
              className="-mt-0.5 me-3 inline-flex opacity-60"
              size={16}
              strokeWidth={2}
            />
            Verify to Sign In!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
