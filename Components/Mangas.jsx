import Link from "next/link";
import React from "react";
import MangaFeed from "./MangaFeed";

const Mangas = () => {
  return (
    <div className="background h-full w-full rounded">
      <header className="flex items-center justify-between border-b border-[#fff2] px-2 py-1 md:py-2">
        <p className="text-md md:text-lg">Latest</p>
        <Link
          href="#"
          className="rounded bg-purple-500 px-2 py-1 text-xs text-white md:text-sm"
        >
          View All
        </Link>
      </header>
      {/* Manga Feed */}
      <div className="flex h-auto w-full flex-wrap gap-3 p-5">
        <MangaFeed />
      </div>
    </div>
  );
};

export default Mangas;
