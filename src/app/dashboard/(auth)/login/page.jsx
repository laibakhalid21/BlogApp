"use client";
export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";
// export const revalidate = 0;

import React, { useEffect, useState, Suspense } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const { status } = useSession(); 
  const router = useRouter();
  const params = useSearchParams();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  useEffect(() => {
    if (status === "authenticated") {
      router?.push("/dashboard");
    }
   }, [status, router]);

  if (status === "loading") {
    return <p className=" text-center mt-10">Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <h1 className="text-2xl font-bold ">
        {success ? success : "Welcome Back"}
      </h1>
      <h2 className="text-lg  mb-6">
        Please sign in to see the dashboard.
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-80">
        <input
          type="email"
          placeholder="Email"
          required
          className="p-4 bg-transparent border-2 border-gray-400 rounded-md outline-none  text-lg font-semibold placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-4 bg-transparent border-2 border-gray-400 rounded-md outline-none  text-lg font-semibold placeholder-gray-500"
        />
        <button
          type="submit"
          className="p-4 w-full rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>

      <button
        onClick={() => signIn("google")}
        className="w-80 p-4 rounded-md bg-orange-500/80 hover:bg-orange-500 text-white font-bold transition-colors"
      >
        Login with Google
      </button>

      <button
        onClick={() => signIn("github")}
        className="w-80 p-4 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-bold transition-colors flex items-center justify-center gap-2"
      >
        Login with GitHub
      </button>

      <span>- OR -</span>

      <Link
        href="/dashboard/register"
        className="underline hover:text-gray-500 transition-colors mb-20"
      >
        Create new account
      </Link>
    </div>
  );
};

// ✅ This wrapper adds the required Suspense boundary
export default function LoginWrapper() {
  return (
    <Suspense fallback={<p>Loading login...</p>}>
      <Login />
    </Suspense>
  );
}
