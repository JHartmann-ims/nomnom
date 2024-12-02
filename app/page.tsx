import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="h-screen snap-start bg-[#1b1b18] grid gap-2 grid-cols-2 grid-rows-1">
        <div className="">
          test
        </div>
        <div>
          test12
        </div>
      </section>

      <section className="h-screen snap-start relative flex items-center justify-center bg-amber-400">
        <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
        <h1 className="relative text-4xl font-bold text-white">ghurt</h1>
      </section>
    </div>
  );
}
