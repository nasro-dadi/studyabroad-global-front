import useStore from "@/store";
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { MenuProps, StyledSelect } from "./select-styles";

export const SortSelect: React.FC = () => {
  const { setSort, sort } = useStore();
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as string;
    setSort(newValue);
  };

  return (
    <FormControl size="small" sx={{ width: 220 }}>
      <InputLabel id="select-label">Sort</InputLabel>
      <StyledSelect
        label="Sort"
        id="simple-select"
        labelId="select-label"
        value={sort}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="new">Newest</MenuItem>
        <MenuItem value="old">Oldest</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default SortSelect;
