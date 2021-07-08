import { TextField, withStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import colors from "styles/variables.module.scss";

import React from 'react'

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: colors.secondary,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.secondary,
      },
    },
  },
})(TextField);

const CityName: React.FunctionComponent<any> = (): JSX.Element => {

    const places = ['Gdańsk', 'Sopot', 'Toruń', 'Warszawa', 'Płock', 'Olsztyn'];


    return (
      <Autocomplete
        id="combo-box-demo"
        options={places}
        getOptionLabel={(option: any) => option}
        style={{ width: 300 }}
        renderInput={(params: any) => (
          <TextField {...params} placeholder="Where are you going?" variant="outlined" />
        )}
      />
    );
}

export default CityName
