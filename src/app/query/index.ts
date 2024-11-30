import { useQuery } from "@tanstack/react-query";
import { searchService } from "../service";

interface SearchServiceParams {
  q: string;
  page: number;
  limit: number;
  sort: string;
}

const useSearchQuery = ({ q, page, limit, sort }: SearchServiceParams) => {
  return useQuery({
    queryKey: ["search", q, page, limit, sort],
    queryFn: () => searchService({ q, page, limit, sort }),
  });
};

export default useSearchQuery;
