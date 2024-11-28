"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import SearchField from "../components/ui/TextField";

export default function Header() {
  const [search, setSearch] = useState(false);
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
        width={200}
        height={50}
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
      <SearchField onClick={() => setSearch(true)} search={search} />
    </header>
  );
}
