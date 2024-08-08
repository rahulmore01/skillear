"use client";
import Link from "next/link";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/ui/card";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginForm = () => {
  const { data: session } = useSession();
  return (
    <section className="sectionContainer !h-screen">
      <Card className="w-full max-w-sm border-b-[1px] border-foreground/15">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                signIn("google", {
                  callbackUrl: "/Dashboard/my-courses",
                });
              }}
              // handleLogin={(e) => {
              //   e.preventDefault();
              //   signIn("google", { callbackUrl: REDIRECT_URL_AFTER_SIGN_IN });
              // }}
            >
              Login with Gmail
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Dont have an account?
            <Link href={"/auth/sign-up"} className="underline text-primary">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
export default LoginForm;
