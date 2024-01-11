"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import { z } from "zod";

export type SignInFormValues = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { status } = useSession();

  const schema = z.object({
    email: z.string().email(),
    password: z
      .string({
        required_error: "Password is required.",
      })
      .describe("Your secure password")
      .min(8, {
        message: "Password must be at least 8 characters.",
      }),
  });

  const handleSubmit = async (value: SignInFormValues) => {
    setMessage("Signing in...");
    console.log(value);

    try {
      const email = value.email;
      const password = value.password;

      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid credentials");
      } else {
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/protected/dashboard");
    }
  }, [status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-full max-w-md px-8 py-6 bg-white rounded-xl shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">
            Login
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Welcome back! Please login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AutoForm
            formSchema={schema}
            onSubmit={handleSubmit as any}
            fieldConfig={{
              password: {
                inputProps: {
                  type: "password",
                  placeholder: "••••••••",
                },
              },
            }}
          >
            <AutoFormSubmit>Login</AutoFormSubmit>
          </AutoForm>
        </CardContent>
        {/* <CardFooter>
          <Button
            className="w-full"
            onClick={() => {
              router.push("/auth/signin");
            }}
          >
            Login
          </Button>
        </CardFooter> */}
      </Card>
    </div>
  );
}
