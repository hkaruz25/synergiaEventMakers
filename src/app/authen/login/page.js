"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <main className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 p-6 border rounded bg-white shadow-md">
        <section className="mb-6 text-center">
          <h3 className="text-2xl font-bold">Login</h3>
          <p className="text-gray-600">Welcome to Synergia</p>
        </section>
        <form action={formAction} className="space-y-4">
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
            Login
          </button>
          {!state?.success && <p className="text-red-600">{state?.message}</p>}
          {state?.success && <p className="text-green-600">{state?.message}</p>}
        </form>
        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
