import { TablePagination, styled } from "@mui/material";

export const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  "& .MuiTablePagination-selectLabel": {
    color: "grey",
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTablePagination-toolbar": {
      paddingTop: theme.spacing(2),
      flexDirection: "column",
    },
  },
}));
