"use client";

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import Input from "./Input";
import styles from "./AuthForm.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

interface AuthFormProps {
  variant: Variant;
}

const AuthForm: React.FC<AuthFormProps> = ({ variant }) => {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/app");
    }
  }, [session?.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    switch (variant) {
      case "REGISTER":
        fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(async (res) => {
            if (res.ok) {
              const resp = await res.json();
              if (resp.message) toast.error(resp.message);
              else {
                toast.success("Successfully registered!");
                signIn("credentials", {
                  ...data,
                  redirect: false,
                });
              }
            }
          })
          .catch(() => toast.error("Something went wrong"))
          .finally(() => setIsLoading(false));

        break;
      case "LOGIN":
        signIn("credentials", {
          ...data,
          redirect: false,
        })
          .then((cb) => {
            if (cb?.error) {
              toast.error(cb.error);
            } else {
              toast.success("Logged in successfully");
              router.push("/app");
            }
          })
          .finally(() => setIsLoading(false));

        break;
    }
  };

  return (
    <>
      <h1 className={styles.title}>
        {variant === "LOGIN"
          ? "Sign in to your account"
          : "Create a new account"}
      </h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {variant === "REGISTER" && (
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id='name'
            label='Name'
          />
        )}
        <Input
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          id='email'
          label='Email address'
          type='email'
        />
        <Input
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          id='password'
          label='Password'
          type='password'
        />

        <button disabled={isLoading} type='submit' className={styles.button}>
          {variant === "LOGIN" ? "Log in" : "Register"}
        </button>

        <p className={styles["form-switch"]}>
          {variant === "LOGIN"
            ? "Don't have an account yet?"
            : "Already have an account?"}
          &nbsp;
          <a href={`/app/${variant === "LOGIN" ? "register" : "login"}`}>
            {variant === "LOGIN" ? "Register" : "Log in"}
          </a>
        </p>
      </form>
    </>
  );
};

export default AuthForm;
