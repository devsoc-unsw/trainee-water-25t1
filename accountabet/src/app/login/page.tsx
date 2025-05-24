// app/login/page.tsx or app/signin/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar1 from "@/components/NavBar";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar1 />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          <p className="mt-4 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up instead
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
