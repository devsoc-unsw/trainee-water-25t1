"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AddHabit() {
  const [habit, setHabit] = useState("");
  return (
    <section className="flex min-h-screen relative bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 text-black py-32 px-6 text-center items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Add a Habit!</h1>
        <input
          type="text"
          placeholder="habit"
          value={habit}
          required
          onChange={(e) => setHabit(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700 transition"
        >
          submit
        </button>
      </form>
    </section>
  );
}
