"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const PopularMangas = ({ mangas }) => {
  const [toggle, setToggle] = useState(true);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed([]);
    if (toggle) {
      setDisplayed(mangas?.popular);
    } else {
      setDisplayed(mangas?.topRated);
    }
  }, [toggle]);

  const handleToggle = (toggle) => {
    setToggle(toggle);
  };

  return (
    <div className="background color-text h-max w-full overflow-hidden rounded-md">
      <header key="header" className="flex border-b-[1px] border-[#fff1]">
        <button
          className={`px-3  py-2 ${toggle ? "text-purple-500" : ""}`}
          onClick={() => handleToggle(true)}
        >
          Popular
        </button>
        <button
          className={`px-3 py-2 ${!toggle ? "text-purple-500" : ""}`}
          onClick={() => handleToggle(false)}
        >
          Top Rated
        </button>
      </header>
      {/* Mangas */}
      {displayed?.manga?.map((manga, index) => {
        return (
          <div
            key={index}
            className={`flex gap-2 p-2 ${
              index === 0 ? "" : "border-t border-[#fff1]"
            }`}
          >
            <Link
              key={index}
              href={`/manga/${manga?.id}`}
              className="flex items-center justify-center"
            >
              <img
                className="h-auto w-20 max-w-20 place-self-center rounded object-cover"
                src={manga?.cover}
              />
            </Link>
            <div className="flex flex-col justify-around">
              <Link
                href={`/manga/${manga?.id}`}
                key={manga?.attributes.title["en"]}
                className="line-clamp-2 text-base hover:text-purple-500"
              >
                {manga?.attributes.title["en"] ||
                  manga?.attributes.title["ja-ro"]}
              </Link>
              <div className="flex gap-1 text-sm">
                <p className="opacity-75">Genres:</p>
                <div className="flex h-12 flex-wrap gap-1 overflow-hidden whitespace-nowrap break-all opacity-100">
                  {manga?.attributes?.tags?.map((tag, index) => {
                    if (index <= 5) {
                      return (
                        <Link
                          key={index}
                          href="#"
                          className="hover:text-purple-500"
                        >
                          {tag.attributes.name["en"]}
                          {index !== 5 && ","}
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-xs opacity-75 md:text-sm">
                  {toggle ? "Follows:" : "Rating:"}
                </p>
                <p className="text-xs md:text-sm">
                  {toggle
                    ? displayed?.stats[index].follows
                    : displayed?.stats[index]?.rating?.average.toFixed(2)}
                </p>
                {!toggle && (
                  <img
                    src="/images/star.png"
                    alt="rating"
                    className="aspect-auto w-5 translate-y-[-1px]"
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularMangas;
