"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import useSignIn from "react-auth-kit/hooks/useSignIn";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({}) => {
  const router = useRouter();
  const LOGIN_MUTATION = gql`
    mutation Login($identifier: String!, $password: String!) {
      login(input: { identifier: $identifier, password: $password }) {
        jwt
        user {
          username
          email
        }
      }
    }
  `;
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);
  const signIN = useSignIn<{email:string,username:string}>();
  const signUPSCHEMA = z.object({
    email_Add: z.string().min(1, { message: "Email Required" }),
    Password: z.string().min(8, { message: "min length is 8" }),
  });
  type signup = z.infer<typeof signUPSCHEMA>;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signup>({
    mode: "onChange",
    resolver: zodResolver(signUPSCHEMA),
  });
  const onSubmit: SubmitHandler<signup> = (data) => {
    const loginCred = { identifier: data.email_Add, password: data.Password };
    sendlogindata(loginCred);
  };
  // console.log(watch("email_Add")); // watch input value by passing the name of it
  const sendlogindata = async (loginCred: any) => {
    try {
      const { data } = await loginMutation({
        variables: loginCred,
      });
      if (data?.login?.user) {
        signIN({
          auth: {
            token: data.login.jwt,
            type: "Bearer",
          },
          userState: {
            email: data.login.user.email,
            username: data.login.user.username
          },
        });
        router.push("/")
      }
    } catch (error) {
      console.log("errooooooooor" + error);
    }
  };
  return (
    <div>
      <div className="mx-auto max-w-[500px] p-5">
        <section className="font-semibold text-xl text-center space-x-10 mb-5 relative after:w-full after:h-[1px] after:bg-gray-200 after:absolute after:bottom-0 after:left-0 after:z-0">
          <Link
            href={"/signin"}
            className="py-3 px-1 inline-block relative after:w-full after:h-[2px] after:bg-rose-600 after:absolute after:bottom-0 after:left-0 after:z-10"
          >
            Sign in
          </Link>
          <Link
            href={"/register"}
            className="py-3 px-1 inline-block relative after:w-full after:h-[2px] after:bg-rose-600 hover:after:absolute after:bottom-0 after:left-0 after:z-10"
          >
            Register
          </Link>
        </section>
        <form
          className="flex flex-col space-y-5 p-5 rounded"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p className="text-sm mb-2">Email</p>
            <input
              type="text"
              {...register("email_Add")}
              className="p-3 outline-none border focus:border-rose-600 w-full"
            />
          </div>
          {errors?.email_Add && (
            <span className="ms-3 text-red-400 text-sm">
              {errors.email_Add.message}
            </span>
          )}
          <div>
            <p className="text-sm mb-2">Password</p>
            <input
              type="password"
              className="p-3 outline-none border focus:border-rose-600 w-full"
              {...register("Password")}
            />
          </div>
          {errors?.Password && (
            <span className="ms-3 text-red-400 text-sm">
              {errors.Password.message}
            </span>
          )}

          <button
            type="submit"
            className="p-3 bg-rose-600 text-xl font-semibold text-white"
          >
            Sign in
          </button>
          <button className=" underline text-xs font-semibold">
            Forgot your password?
          </button>
          {loading && <p>loadiiiiiiiiiiiiiiiiiiiing</p>}
          {error && <p className="text-semibold text-red-700">Wrong User ID or Password !</p>}
        </form>
      </div>
    </div>
  );
};

export default Page;
