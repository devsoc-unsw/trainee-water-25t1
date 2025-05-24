// app/signup/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar1 from "@accountabet/src/components/NavBar";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar1 />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await fetch("/api/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (!res.ok) {
              alert(data.error || "Sign up failed");
            } else {
              alert("Sign up successful");
              window.location.href = "/signin"; // redirect to sign in page
            }
          }}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign in instead
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
