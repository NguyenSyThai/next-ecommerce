"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pagination = ({ currentPage, hasNext, hasPrev }: PaginationProps) => {
  const pathname = usePathname();
  const searchPrams = useSearchParams();
  const { replace } = useRouter();
  const createPageUrl = (pageNumber: number) => {};

  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-main text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-main text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
