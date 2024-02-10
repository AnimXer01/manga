import FeaturedManga from "../Components/FeaturedManga";
import MangaCarousel from "../Components/MangaCarousel";
import Mangas from "../Components/Mangas";
import PopularMangas from "../Components/PopularMangas";
import { Carousel, fetchTopMangas } from "../API/request";

const page = async () => {
  const mangas = await Carousel();
  const popular = await fetchTopMangas();
  return (
    // Chapters And Top Manga Divider
    <div className="color-text mx-auto grid max-w-screen-2xl grid-cols-1 gap-2 px-5 py-5 md:gap-5 md:px-16 md:py-16 lg:grid-cols-[70%,30%]">
      {/* Left */}
      <div className="flex w-full flex-col gap-5  ">
        {/* Showcase Manga */}
        <div className="grid gap-2 md:grid-cols-[74%,25%]">
          {/* Top Mangas Carousel */}
          <MangaCarousel key="manga-carousel" mangas={mangas} />
          {/* Top Manga Showcase */}
          <FeaturedManga key="manga-featured" />
        </div>

        {/* Mangas */}
        <Mangas key="manga-feed" />
      </div>
      {/* Right */}
      <PopularMangas key="manga-popular" mangas={popular} />
    </div>
  );
};

export default page;
