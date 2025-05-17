"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import Navbar1 from "@/components/NavBar2";
export default function AddHabit() {
  const [habit, setHabit] = useState("");
  return (
    <>
      <Navbar1 />
      <section className="flex min-h-screen relative bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 text-black py-32 px-6 text-center justify-center">
        <form>
          <h1 className="text-white text-4xl sm:text-7xl font-extrabold leading-tight mb-6">
            Add a Habit!
          </h1>
          <input
            type="text"
            value={habit}
            required
            onChange={(e) => setHabit(e.target.value)}
            className="bg-white w-full mb-4 px-4 py-2 border rounded-full"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
