"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 p-6 border rounded bg-white shadow-md">
        <section className="mb-6 text-center">
          <h3 className="text-2xl font-bold">Register</h3>
          <p className="text-gray-600">Create an account to book your event!</p>
        </section>
        <form action={formAction} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100"
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100"
          />
          <button
            disabled={pending}
            className="w-1/4 py-2 bg-black text-white rounded"
          >
            Register
          </button>
          {state?.success === false && (
            <p className="text-red-600">{state.message}</p>
          )}
          {state?.success === true && (
            <p className="text-green-600">{state.message}</p>
          )}
        </form>
        <p className="mt-4 text-center">
          Have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
