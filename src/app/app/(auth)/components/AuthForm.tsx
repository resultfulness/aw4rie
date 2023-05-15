"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import styles from "./AuthForm.module.css";

type Variant = "LOGIN" | "REGISTER";

interface AuthFormProps {
  variant: Variant;
}

const AuthForm: React.FC<AuthFormProps> = ({ variant }) => {
  const [isLoading, setIsLoading] = useState(false);

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
        // post to /api/register

        break;
      case "LOGIN":
        // post to /api/login

        break;
    }

    setIsLoading(false);
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
