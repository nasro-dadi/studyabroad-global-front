"use client";
import SortSelect from "@/components/ui/select";
import { BookTable } from "@/components/ui/table";
import TablePagination from "@/components/ui/table-pagination";
import useStore from "@/store";
import Loading from "../loader";

import useSearchQuery from "../query";

export default function Home() {
  const { q, page, rowsPerPage, sort } = useStore();

  const { data, isLoading, isError } = useSearchQuery({
    q,
    page,
    limit: rowsPerPage,
    sort,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-[320px] ">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center pt-[320px]  ">
        <p className="text-center max-w-[126px] text-gray font-medium text-sm">
          Something went wrong! Please try again
        </p>
      </div>
    );
  }

  if (!q) {
    return null;
  }
  const { books, total } = data;
  if (books.length === 0) {
    return (
      <div className="flex justify-center items-center pt-[320px]  ">
        <p className="text-center max-w-[126px] text-gray font-medium text-sm">
          No books found! Pleast try again
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col  px-[24px]">
      <div className="self-end">
        <SortSelect />
      </div>
      <div className="pt-[24px]">
        <BookTable books={books} />
      </div>
      <div>
        <TablePagination totalItems={total} />
      </div>
    </div>
  );
}
