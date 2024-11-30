"use client";

import SearchField from "@/components/ui/text-field";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import Image from "next/image";

export default function Header() {
  const { q: search } = useStore();

  return (
    <header
      className={cn(
        "flex flex-col justify-center items-center pt-[85px] transition-all duration-300 ease-in-out",
        {
          "pt-[33px] ": search,
        },
        { "flex-row justify-between": search }
      )}
    >
      <Image
        src="/logo.svg"
        alt="Study Abroad Global"
        width={search ? 120 : 180}
        height={search ? 38 : 85}
      />
      <h1
        className={cn(
          "text-2xl font-roboto pt-[26px] pb-[77px] transition-opacity duration-300",
          {
            "opacity-0 hidden": search,
          }
        )}
      >
        Book Search Assignment
      </h1>
      <SearchField />
    </header>
  );
}
