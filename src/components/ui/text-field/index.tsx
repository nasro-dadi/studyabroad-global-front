"use client";

import useStore from "@/store";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import React from "react";
import { StyledTextField } from "./text-field-styles";

const SearchField: React.FC = () => {
  const { q, setQ } = useStore();
  const [inputValue, setInputValue] = React.useState(q);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue) {
      setQ(inputValue);
    }
  };

  const handleSearchClick = () => {
    setQ(inputValue);
  };

  const inputProps = {
    endAdornment: (
      <InputAdornment
        position="end"
        onClick={handleSearchClick}
        sx={{ cursor: "pointer" }}
      >
        <SearchIcon />
      </InputAdornment>
    ),
  };

  return (
    <StyledTextField
      variant="outlined"
      size={q ? "small" : "medium"}
      label="Search"
      slotProps={{ input: inputProps }}
      search={!!q}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchField;
