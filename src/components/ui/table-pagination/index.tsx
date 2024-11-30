"use client";

import useStore from "@/store";
import { TablePaginationProps } from "@mui/material";
import { StyledTablePagination } from "./table-pagination-styles";

type CustomTablePaginationProps = Omit<
  TablePaginationProps,
  "count" | "onPageChange" | "page" | "rowsPerPage" | "onRowsPerPageChange"
> & {
  totalItems: number;
};

export const CustomTablePagination: React.FC<CustomTablePaginationProps> = ({
  totalItems,
  ...props
}) => {
  const { page, rowsPerPage, setPage, setRowsPerPage } = useStore();

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <StyledTablePagination
      component="div"
      count={totalItems}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5, 10, 25, 50]}
      {...props}
    />
  );
};

export default CustomTablePagination;
