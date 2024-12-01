import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "search",
})<{ search: boolean }>(({ theme, search }) => ({
  "& .MuiOutlinedInput-root": {
    width: search ? "323px" : "489px",
    [theme.breakpoints.down("sm")]: {
      width: search ? "200px" : "300px",
    },
    height: search ? "40px" : "56px",
    borderRadius: "4px",
    "& fieldset": {
      borderWidth: "2px",
    },
  },
}));
