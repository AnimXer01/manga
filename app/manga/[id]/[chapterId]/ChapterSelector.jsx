"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ChapterSelector = ({ chapters, chapterId, mangaId }) => {
  const router = useRouter();
  const [currentChapter, setCurrentChapter] = useState(chapterId || "");
  const [nextChapter, setNextChapter] = useState(null);
  const [prevChapter, setPrevChapter] = useState(null);

  useEffect(() => {
    setCurrentChapter(chapterId || "");
    chapters?.map((chapter, index) => {
      if (chapter.id === chapterId) {
        if (index !== 0) {
          setNextChapter(index - 1);
        }
        if (index + 1 !== chapters.length) {
          setPrevChapter(index + 1);
        }
      }
    });
  }, [chapterId, chapters]);

  const handleSelect = (event) => {
    const selectedChapterId = event.target.value;
    router.push(`/manga/${mangaId}/${selectedChapterId}`);
  };

  const handleButton = (index) => {
    router.push(`/manga/${mangaId}/${chapters[index].id}`);
  };

  return (
    <div className="flex items-center justify-around text-sm md:text-base">
      <select
        onChange={handleSelect}
        value={currentChapter}
        title="chapter-selector"
        name="chapter-selector"
        className="color-text text-align-left min-w-40 rounded-md border border-[#fff2] bg-transparent px-1 py-1.5"
      >
        {chapters?.map((chapter) => (
          <option value={chapter.id} key={chapter.id} className="text-black">
            Chapter {chapter.attributes.chapter}
          </option>
        ))}
      </select>
      <div>
        {prevChapter !== null ? (
          <button
            className="mx-1 min-w-10 rounded-3xl bg-purple-700 px-5 py-1 font-normal"
            onClick={() => handleButton(prevChapter)}
          >
            Prev
          </button>
        ) : (
          <button
            className="mx-1 min-w-10 rounded-3xl bg-[#fff1] px-5 py-1 font-normal"
            disabled
          >
            Prev
          </button>
        )}
        {nextChapter !== null ? (
          <button
            className="mx-1 min-w-10 rounded-3xl bg-purple-700 px-5 py-1 font-normal"
            onClick={() => handleButton(nextChapter)}
          >
            Next
          </button>
        ) : (
          <button
            className="mx-1 min-w-10 rounded-3xl bg-[#fff1] px-5 py-1 font-normal"
            disabled
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ChapterSelector;
