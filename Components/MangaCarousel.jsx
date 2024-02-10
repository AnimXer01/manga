"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MangaCarousel = ({ mangas }) => {
  const contentTypeBg = {
    safe: "bg-[green]",
    suggestive: "bg-[#AC87C5]",
    pornographic: "bg-[crimson]",
    erotica: "bg-[#FF004D]",
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const startInterval = () => {
      intervalId = setInterval(() => {
        if (carouselRef.current) {
          const nextScrollLeft =
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth;
          const maxScrollLeft =
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

          if (nextScrollLeft < maxScrollLeft) {
            carouselRef.current.scrollTo({
              left: nextScrollLeft,
              behavior: "smooth",
            });
          } else {
            carouselRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          }
        }
      }, 10000);
    };

    const handleScroll = () => {
      clearInterval(intervalId);
      startInterval();
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    startInterval();

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
      clearInterval(intervalId);
    };
  }, [carouselRef]);

  return (
    <div
      className="showcase scrollbar-hidden relative flex h-[200px] w-full snap-x snap-mandatory items-start overflow-x-auto overflow-y-hidden rounded-md bg-cover bg-center bg-no-repeat transition-all md:h-[250px] md:rounded-r-none"
      ref={carouselRef}
    >
      {mangas.map((manga, index) => {
        return (
          <div
            key={index}
            className="grid h-full w-full flex-shrink-0 snap-start grid-cols-[70%,30%] items-center gap-1 px-2 backdrop-blur-sm backdrop-brightness-50 transition-all md:grid-cols-[75%,25%] md:px-5"
          >
            <img
              src={manga?.cover}
              alt="background"
              className="absolute top-0 z-0 h-auto w-full bg-no-repeat object-contain object-center brightness-[.3]"
            />
            <div className="z-10 w-full self-start md:self-center">
              <div className="flex items-center p-2">
                <div>
                  <h1
                    className="h-8 overflow-hidden text-lg text-white md:text-2xl"
                    title={
                      manga?.attributes.title["en"]
                        ? manga?.attributes.title["en"]
                        : manga?.attributes.title["ja-ro"]
                    }
                  >
                    {manga?.attributes.title["en"]
                      ? manga?.attributes.title["en"]
                      : manga?.attributes.title["ja-ro"]}
                  </h1>
                  <h2 className="flex gap-1 text-xs uppercase text-white md:text-sm">
                    <p
                      className={`w-min rounded bg-[#fff5] px-1 py-[2px] text-xs`}
                    >
                      {manga?.type}
                    </p>
                    {manga?.attributes?.publicationDemographic && (
                      <p
                        className={`w-min rounded bg-[#fff5] px-1 py-[2px] text-xs`}
                      >
                        {manga?.attributes?.publicationDemographic}
                      </p>
                    )}
                    <p
                      className={`w-min rounded px-1 py-[2px] text-xs ${
                        contentTypeBg[manga?.attributes?.contentRating]
                      }`}
                    >
                      {manga?.attributes?.contentRating}
                    </p>
                  </h2>
                </div>
              </div>
              {/* Genres */}
              <div className="ml-2 flex flex-col gap-2">
                <p className="h-5 w-5/6 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-white md:text-sm">
                  {manga?.attributes?.tags?.map((tag, index) => {
                    if (index <= 5) {
                      return (
                        <Link
                          key={index}
                          href="#"
                          className="mr-1 hover:text-purple-500"
                        >
                          {tag.attributes.name["en"]}
                          {index !== 5 && ","}
                        </Link>
                      );
                    }
                  })}
                </p>
                <h5 className="text-sm font-semibold text-white md:text-base">
                  Summary
                </h5>
                <p
                  className="line-clamp-3 h-12 w-full overflow-hidden text-xs font-light text-white md:h-14 md:text-sm"
                  title={manga?.attributes.description["en"]}
                >
                  {manga?.attributes.description["en"]}
                </p>
                <p className="flex items-center gap-1 text-xs font-normal text-white md:text-sm">
                  Status:
                  <span className={`rounded text-xs uppercase md:text-sm`}>
                    {manga?.attributes?.status}
                  </span>
                </p>
              </div>
            </div>
            <Link href={`/manga/${manga?.id}`} className="pr-3 md:pr-0">
              <img
                className="relative z-10 aspect-auto rounded hover:scale-[1.03] md:w-full"
                src={manga?.cover}
                alt="manga-link"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MangaCarousel;
