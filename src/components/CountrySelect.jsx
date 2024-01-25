import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect({ options, setCountry, val }) {
  return (
    <Autocomplete
      disablePortal
      freeSolo
      id="auto-complete-country"
      options={options}
      value={val || ""}
      sx={{ width: 300 }}
      onChange={(_, selectedOption) => {
        if (selectedOption) {
          setCountry(selectedOption.code);
        }
      }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
}

CountrySelect.propTypes = {
  options: PropTypes.string,
  setCountry: PropTypes.func,
  val: PropTypes.string,
};
