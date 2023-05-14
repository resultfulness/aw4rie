"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Input";
import styles from "./page.module.css";

const Page = () => {
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

    // post to /api/register

    setIsLoading(false);
  };

  return (
    <main className={styles.container}>
      <h1>Create a new account</h1>
      <form className={styles.form} action=''>
        <Input
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          id='name'
          label='Name'
        />
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
          Register
        </button>
      </form>
    </main>
  );
};

export default Page;
