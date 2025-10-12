"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else if (res.status === 400) {
        setError("User already exists!");
      } else {
        setError("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10  dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-2  dark:text-gray-100">
        Create an Account
      </h1>
      <h2 className="mb-6  dark:text-gray-300">
        Please sign up to access the dashboard.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Username"
          required
          className="p-3 bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-md text-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="p-3 bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-md text-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-3 bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-md text-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
        />
        <button className="bg-green-500 dark:bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-600 dark:hover:bg-green-700 transition-colors">
          Register
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      <span className="my-4 text-gray-400 dark:text-gray-500">- OR -</span>
      <Link
        href="/dashboard/login"
        className="text-green-400 dark:text-green-500 font-semibold hover:underline"
      >
        Login with an existing account
      </Link>
    </main>
  );
};

export default Register;
