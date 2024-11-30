"use client";

import { TableBody, TableContainer, TableHead, TableRow } from "@mui/material";

import { StyledHeaderCell, StyledTable, StyledTableCell } from "./table-styles";

interface BookTableProps {
  books: {
    title: string;
    author: string;
    year: number;
    rating: number;
    firstSentence: string;
  }[];
}

export const BookTable: React.FC<BookTableProps> = ({ books }) => {
  return (
    <TableContainer>
      <StyledTable aria-label="book table">
        <TableHead>
          <TableRow>
            <StyledHeaderCell>Title</StyledHeaderCell>
            <StyledHeaderCell>Author</StyledHeaderCell>
            <StyledHeaderCell>Publish Year</StyledHeaderCell>
            <StyledHeaderCell>Rating</StyledHeaderCell>
            <StyledHeaderCell>First Sentence</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={`${book.title}-${book.author}-${index}`}>
              <StyledTableCell>
                <div
                  style={{
                    maxWidth: "148px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.title}
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    maxWidth: "148px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.author}
                </div>
              </StyledTableCell>
              <StyledTableCell>{book.year}</StyledTableCell>
              <StyledTableCell>{book.rating}</StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    maxWidth: "148px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.firstSentence}
                </div>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
