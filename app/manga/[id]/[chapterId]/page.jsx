import Link from "next/link";
import {
  fetchAllChapters,
  fetchMangaInfo,
  getChapterImages,
} from "../../../../API/request";
import ChapterSelector from "./ChapterSelector";

const page = async ({ params }) => {
  const chapters = await fetchAllChapters(params.id);
  const mangaTitle = (await fetchMangaInfo(params.id))?.attributes?.title["en"];
  const chapter = chapters?.filter((chap) => chap.id === params.chapterId);
  const chapterImages = await getChapterImages(params.chapterId);
  return (
    <div className="min-h-[90vh] py-10 text-center font-bold text-white">
      <div>
        <h1 className="text-2xl">{mangaTitle}</h1>
        <h1 className="text-xl">Chapter {chapter[0]?.attributes?.chapter}</h1>
        <div className="flex items-center justify-center gap-1 text-xs font-normal opacity-80 ">
          <p>All chapters are found in</p>
          <Link
            href={`/manga/${params.id}`}
            className="text-sm font-bold hover:text-purple-500"
          >
            {mangaTitle}
          </Link>
        </div>
        <div className="mx-auto my-2 flex w-3/5 flex-wrap items-center justify-center gap-1">
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-indigo-700 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-facebook-f"></i>
            Facebook
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-blue-500 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-green-500 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Whatsapp
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-indigo-500 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-discord"></i>
            Discord
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-red-700 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-pinterest"></i>
            Pinterest
          </Link>
        </div>
        <ChapterSelector
          chapters={chapters}
          mangaId={params.id}
          chapterId={params.chapterId}
        />
        <div className="mx-auto my-5 w-full md:w-4/5">
          {chapterImages?.chapter["dataSaver"].map(
            (image, index) =>
              image && (
                <img
                  alt={image}
                  className="mx-auto"
                  src={`https://uploads.mangadex.org/data-saver/${chapterImages?.chapter?.hash}/${image}`}
                  key={index}
                />
              ),
          )}
        </div>
        <ChapterSelector
          chapters={chapters}
          mangaId={params.id}
          chapterId={params.chapterId}
        />
      </div>
    </div>
  );
};

export default page;
