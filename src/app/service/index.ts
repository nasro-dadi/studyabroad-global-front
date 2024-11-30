interface SearchServiceParams {
  q: string;
  page: number;
  limit: number;
  sort: string;
}

export const searchService = async ({
  q,
  page,
  limit,
  sort,
}: SearchServiceParams) => {
  try {
    if (!q) {
      return {
        books: [],
        total: 0,
      };
    }
    const params = new URLSearchParams({
      q,
      page: page.toString(),
      limit: limit.toString(),
      sort: sort === "default" ? "" : sort,
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/search?${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch {
    throw new Error("Something went wrong! Please try again");
  }
};
