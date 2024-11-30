import { styled, Table, TableCell } from "@mui/material";

// Custom styled TableCell components
export const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  fontSize: 14,
  fontWeight: theme.typography.fontWeightMedium,
  width: "180px",
  height: "56px",
  minHeight: "56px",
}));

export const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  width: "180px",
  height: "52px",
  minHeight: "52px",
  padding: "16px 0 16px 16px",
}));

export const StyledTable = styled(Table)(() => ({
  maxWidth: "904px",
  margin: "auto",
}));
