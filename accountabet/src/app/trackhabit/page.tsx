"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@../../styles/customCalendar.css";
import Navbar1 from "@/components/NavBar2";
import { useUser } from "@clerk/nextjs";

export default function TrackHabit() {
  const [markedDates, setMarkedDates] = useState<Date[]>([]);
  const { user } = useUser();

  // Fetch tracked dates from DB on mount
  useEffect(() => {
    const fetchTrackedDates = async () => {
      if (!user?.id) return;

      const res = await fetch(`/api/trackhabit?userId=${user.id}`);
      const data = await res.json();
      const datesFromDb =
        data?.trackList?.map((d: string) => new Date(d)) || [];
      setMarkedDates(datesFromDb);
    };

    fetchTrackedDates();
  }, [user]);

  // Update local state on click
  const toggleDate = (date: Date) => {
    const exists = markedDates.some(
      (d) => d.toDateString() === date.toDateString()
    );
    if (exists) {
      setMarkedDates(
        markedDates.filter((d) => d.toDateString() !== date.toDateString())
      );
    } else {
      setMarkedDates([...markedDates, date]);
    }
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      return markedDates.some((d) => d.toDateString() === date.toDateString())
        ? "highlight"
        : null;
    }
    return null;
  };

  const trackToday = async () => {
    const today = new Date();
    if (!user?.id) return;

    const res = await fetch("/api/trackhabit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        date: today.toISOString(),
      }),
    });

    if (res.ok) {
      setMarkedDates((prev) => {
        const exists = prev.some(
          (d) => d.toDateString() === today.toDateString()
        );
        return exists ? prev : [...prev, today];
      });
    } else {
      alert("Failed to track today's habit");
    }
  };

  return (
    <>
      <Navbar1 />
      <section className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 py-32 px-6 text-center">
        <h1 className="text-white text-4xl sm:text-7xl font-extrabold leading-tight mb-10">
          Track Your Habit
        </h1>
        <div className="bg-white p-6 rounded-xl shadow-lg w-[340px] sm:w-[400px]">
          <Calendar onClickDay={toggleDate} tileClassName={tileClassName} />
          <button
            onClick={trackToday}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition"
          >
            Track Today's Habit
          </button>
        </div>
      </section>
    </>
  );
}
