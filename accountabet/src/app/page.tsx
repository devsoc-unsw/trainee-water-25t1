import Image from "next/image";
import NavBar1 from "@/components/NavBar";
export default function Home() {
  return (
    <div className="p-2">
      {/* Header in row 1 */}
      <NavBar1></NavBar1>
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start"></main>
    </div>
  );
}
