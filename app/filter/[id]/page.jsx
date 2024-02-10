"use client";
import React from "react";
import PopularMangas from "../../../Components/PopularMangas";
import { useState, useEffect } from "react";
import { fetchCoverImages, makeRequest } from "../../../API/request";

const page = () => {
  const [mangas, setMangas] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Initial Manga Load
  //   useEffect(() => {
  //     setMangas([]);
  //     makeRequest(
  //       "/manga",
  //       {
  //         limit: 60,
  //       },
  //       { updatedAt: "desc" },
  //     )
  //       .then((res) => fetchCoverImages(res?.data))
  //       .then((res) => setMangas(res));
  //   }, []);

  // Tags Load/Mount
  useEffect(() => {
    setTags([]);
    makeRequest("/manga/tag").then((res) => setTags(res?.data));
  }, []);

  const toggleTag = ({ name, id }) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.some((tag) => tag.id === id)) {
        // If the tag with the same id is already in the array, remove it
        return prevSelectedTags.filter((tag) => tag.id !== id);
      } else {
        // If the tag with the same id is not in the array, add it
        return [...prevSelectedTags, { name, id }];
      }
    });
  };

  return (
    <div className="color-text min-h-[90vh]">
      {/* Tags */}
      <div className="mx-2 my-5 flex flex-wrap justify-start gap-1.5 text-sm md:mx-24 md:text-base">
        {tags.map((tag, index) => (
          <button
            className={`rounded px-2 py-1 ${selectedTags.some((selectedTag) => selectedTag.id === tag.id) ? "bg-purple-500" : "background"}`}
            key={index}
            onClick={() =>
              toggleTag({ name: tag.attributes.name["en"], id: tag.id })
            }
          >
            {tag.attributes.name["en"]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default page;
