"use client";

import { useLogin } from "../hooks/use-login";
import { LoginInput, loginSchema } from "../schemas/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import { is } from "zod/v4/locales"; // <--- DELETE THIS. Unused and likely incorrect import.

export const LoginForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending, error: apiError } = useLogin();

  const onSubmit = async (data: LoginInput) => {
    login(data);
  };

  return (
    <Card className="w-full max-w-sm border-white">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      {/* PROBLEM WAS HERE: The form closed too early before. */}
      {/* We must wrap the CardContent AND CardFooter inside the form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Show API Errors here if login fails */}
            {apiError && (
              <div className="text-red-500 text-sm mb-2">
                {(apiError as any).response?.data?.message || "Login failed"}
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                disabled={isPending}
                id="email"
                type="email"
                placeholder="m@example.com"
                // required // <--- Remove native 'required'. Let Zod handle validation so you get custom error messages.
              />
              {/* Add Error Message Display */}
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-xs underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Input
                {...register("password")}
                disabled={isPending}
                id="password"
                type="password"
                // required // <--- Remove native 'required'
              />
              {/* Add Error Message Display */}
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2 mt-4">
          {/* Now this button is INSIDE the <form>, so it will actually trigger submit */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full text-white hover:bg-sky-700 ">
            {isPending ? "Authenticating..." : "Login"}
          </Button>
        </CardFooter>
      </form>{" "}
      {/* <--- Form closes HERE, after the button */}
    </Card>
  );
};
