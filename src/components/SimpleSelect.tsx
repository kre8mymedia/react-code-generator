import * as React from 'react';

import {
    FormControl,
    Select,
    InputLabel,
    MenuItem
} from "@mui/material";

interface Props {
  label: string;
  items: any[];
  value: any;
  setItem: any;
  disabled?: boolean;
}

export default function SimpleSelect({ disabled, label, items, value, setItem }: Props) {

  const handleChange = (event: any) => {
    setItem(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: '100%', maxWidth: '100%' }}>
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        variant="outlined"
        value={value}
        label={label}
        disabled={disabled ? true : false}
        onChange={handleChange}
      >
        {items.map((item: any) => (
            <MenuItem key={item.key} value={item.key}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
