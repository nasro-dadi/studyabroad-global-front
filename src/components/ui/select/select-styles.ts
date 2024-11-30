import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSelect = styled(Select)(({ theme }) => ({
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    borderWidth: "2px",
  },
}));

export const MenuProps = {
  PaperProps: {
    style: {
      marginTop: "6px",
    },
  },
};
