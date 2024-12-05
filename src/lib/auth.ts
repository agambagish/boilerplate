import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { AuthVerificationEmail } from "@/components/emails/auth-verification-email";
import { db } from "@/db";
import * as schema from "@/db/schema/auth";
import { resend } from "@/lib/resend";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema,
  }),
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60,
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: true,
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: "Boilerplate <boilerplate@resend.dev>",
        to: user.email,
        subject: "🚀 Boilerplate Email Verification",
        react: AuthVerificationEmail({ name: user.name, url }),
      });
    },
  },
});
