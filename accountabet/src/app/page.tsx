import Link from "next/link";
import NavBar1 from "@/components/NavBar";
export default function Home() {
  return (
    <>
      {/* Header in row 1 */}
      <NavBar1 />
      <section className="min-h-screen relative bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl sm:text-7xl font-extrabold leading-tight mb-6">
            Bet on your habits. <br className="hidden sm:block" />
            Stay accountable.
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Can’t keep on top of your habits? Get{" "}
            <span className="font-semibold">Accountabet</span>, a personal habit
            tracker which forces consistency by fine. Remember, tiny changes,
            remarkable results!
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/signup">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
                Start here.
              </button>
            </Link>
          </div>
        </div>
      </section>
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start"></main>
    </>
  );
}
