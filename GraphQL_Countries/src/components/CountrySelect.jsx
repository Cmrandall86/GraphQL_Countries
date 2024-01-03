import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect({ options, setCountry, val }) {
  return (
    <Autocomplete
      disablePortal
      freeSolo
      id="combo-box-demo"
      options={options}
      value={val || ""}
      sx={{ width: 300 }}
      onChange={(event, selectedOption) => {
        if (selectedOption) {
          setCountry(selectedOption.code);
        }
      }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
}
