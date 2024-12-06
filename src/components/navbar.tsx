"use client";

import { NAVBAR_ITEMS } from "@/utils/constant";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();
  const { push } = useRouter();

  return (
    <main className="w-full flex items-center justify-between px-16 pt-8">
      <h2 className="font-bold text-xl border p-1 rounded-lg h-fit w-fit border-primary">
        K
      </h2>
      <nav className="flex items-center gap-8 justify-between text-sm bg-white/30 rounded-lg shadow-2xl backdrop-blur-[16.4px] border border-white/30 px-16 py-4">
        {NAVBAR_ITEMS.map(({ value, route }, index: number) => {
          const isActive = pathName.endsWith(route);

          return (
            <h3
              key={index}
              onClick={() => push(route)}
              className={`cursor-pointer hover:text-primary text-sm transition-all duration-500 ${
                isActive ? "text-primary " : ""
              }`}
            >
              {value}
            </h3>
          );
        })}
      </nav>
      <button className="bg-gradient-to-r text-sm from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md">
        Download CV
      </button>
    </main>
  );
}
