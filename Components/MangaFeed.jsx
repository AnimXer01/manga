import { fetchCoverImages, makeRequest, timeAgo } from "../API/request";
import Link from "next/link";

export const MangaFeed = async () => {
  const req = await makeRequest(
    "/manga",
    {
      limit: 60,
    },
    { updatedAt: "desc" },
    { cache: "no-cache" },
  );
  const mangas = await fetchCoverImages(req?.data, {
    next: { revalidate: 60 },
  });

  return mangas.map((manga, index) => (
    <Link
      key={index}
      className="group w-20 max-w-36 flex-grow overflow-hidden hover:scale-[1.01] md:w-28"
      href={`/manga/${manga.id}`}
    >
      <img
        className="z-10 mx-auto aspect-[1/1.5] max-h-52 w-full rounded object-cover"
        src={manga.cover}
        alt={manga.attributes.title["en"] || manga.attributes.title["ja-ro"]}
      />
      <p
        className="my-1 h-5 overflow-hidden text-center text-sm group-hover:text-purple-500 md:text-base"
        title={manga.attributes.title["en"] || manga.attributes.title["ja-ro"]}
      >
        {manga.attributes.title["en"] || manga.attributes.title["ja-ro"]}
      </p>
      {timeAgo(manga?.attributes?.updatedAt) !== null && (
        <p className="text-center text-xs opacity-70">
          {timeAgo(manga?.attributes?.updatedAt)}
        </p>
      )}
    </Link>
  ));
};

export default MangaFeed;
