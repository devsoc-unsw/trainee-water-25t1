"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@../../styles/customCalendar.css";
import Navbar1 from "@/components/NavBar2";

export default function TrackHabit() {
  const [markedDates, setMarkedDates] = useState<Date[]>([
    new Date("2025-05-02"),
    new Date("2025-05-10"),
    new Date("2025-05-13"),
    new Date("2025-05-21"),
    new Date("2025-05-23"),
  ]);

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

  return (
    <>
      <Navbar1 />
      <section className="flex min-h-screen relative bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 text-black py-32 px-6 text-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-white text-4xl sm:text-7xl font-extrabold leading-tight mb-10">
            Track Your Habit
          </h1>
          <Calendar onClickDay={toggleDate} tileClassName={tileClassName} />
        </div>
      </section>
    </>
  );
}
