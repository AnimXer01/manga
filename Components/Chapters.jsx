"use client";
import Link from "next/link";

const Chapters = ({ mangaId, chapters }) => {
  if (chapters?.length === 0) {
    return (
      <div className="mx-auto my-2 text-center text-lg font-bold">
        No Chapters Found.
      </div>
    );
  } else {
    return (
      <section className="background my-5 rounded-md">
        <header className="color-text border-b border-[#fff2] px-3 py-2 text-2xl font-bold">
          Chapters
        </header>
        <div className="color-text flex items-center gap-2 border-b border-[#fff2] px-3 py-2 text-xl font-bold">
          <Link
            href={`/manga/${mangaId}/${chapters[chapters.length - 1]?.id}`}
            className="flex w-full flex-col items-center justify-center rounded bg-purple-600 py-2 text-white hover:scale-[1.01] hover:brightness-90"
          >
            <p className="text-base font-normal">First Chapter</p>
            <span>
              Chapter {chapters[chapters.length - 1]?.attributes?.chapter}
            </span>
          </Link>
          <Link
            href={`/manga/${mangaId}/${chapters[chapters.length - 1]?.id}`}
            className="flex w-full flex-col items-center justify-center rounded bg-purple-600 py-2 text-white hover:scale-[1.01] hover:brightness-90"
          >
            <p className="text-base font-normal">Last Chapter</p>
            <span>Chapter {chapters[0]?.attributes?.chapter}</span>
          </Link>
        </div>
        <div className="scrollbar flex max-h-[60vh] w-full flex-col overflow-y-scroll pb-3 pl-3 pr-1">
          {chapters?.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/manga/${mangaId}/${chapter.id}`}
              className="group my-1 w-full rounded border border-[#fff2] px-3 py-2 hover:bg-[#fff1]"
            >
              <div className="group-hover:text-purple-500">
                Chapter {chapter.attributes.chapter}
                {chapter.attributes.title
                  ? ` - ${chapter.attributes.title}`
                  : ""}
              </div>
              <div className="flex items-center text-xs opacity-50">
                <div className="w-16">
                  {chapter?.attributes?.createdAt
                    ? new Date(
                        chapter?.attributes?.createdAt,
                      ).toLocaleDateString("en-US")
                    : "-"}
                </div>
                <div className="w-16">
                  Pages: {chapter?.attributes?.pages || "-"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
};

export default Chapters;
