"use client";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import React from "react";
import { StyledTextField } from "./TextFieldStyles";

interface SearchFieldProps {
  onClick: () => void;
  search: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({ onClick, search }) => {
  const inputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <SearchIcon />
      </InputAdornment>
    ),
  };

  return (
    <StyledTextField
      variant="outlined"
      size={search ? "small" : "medium"}
      label="Search"
      slotProps={{ input: inputProps }}
      onClick={onClick}
      search={search}
    />
  );
};

export default SearchField;
