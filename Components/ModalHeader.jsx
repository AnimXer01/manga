"use client";
import { useRouter } from "next/navigation";

const ModalHeader = ({ link }) => {
  const router = useRouter();
  return (
    <div className="absolute top-0 flex w-full justify-between px-4 py-2">
      <button
        className="flex min-w-20 items-center justify-center rounded bg-purple-700 px-2 py-1"
        onClick={() => window.location.reload()}
      >
        Full Site
      </button>
      <button
        onClick={() => router.back()}
        className="min-w-20 rounded bg-purple-700 px-2 py-1 text-center"
      >
        Back
      </button>
    </div>
  );
};

export default ModalHeader;
