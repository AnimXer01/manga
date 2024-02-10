import { fetchAllChapters, fetchMangaInfo } from "../../../../API/request";
import MangaInfo from "../../../../Components/MangaInfo";

const page = async ({ params }) => {
  const manga = await fetchMangaInfo(params.id);
  const chaptersLength = (await fetchAllChapters(params.id)).length;
  return (
    <>
      <div className="fixed left-0 top-0 z-20 h-screen w-screen bg-[#0008]"></div>
      <MangaInfo manga={manga} modal={true} chaptersCount={chaptersLength} />
    </>
  );
};

export default page;
