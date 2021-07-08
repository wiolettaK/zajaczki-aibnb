import { IconButton, TextField } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import RangePicker from "react-range-picker";
import "./home.scss";


function Calendar() {

  const [values, setState] = useState({
    checkInDate: "",
    checkOutDate: ""
  });
  const onDateChanges = (date, date2) => {
    console.log(" Wiola date is ", values.checkInDate, values.checkOutDate)
    console.log(" date is ", date, date2);
    setState(prevState => {
      return {
        ...prevState,
        checkInDate: date?.toDateString().slice(0, 10),
        checkOutDate: date2?.toDateString().slice(0, 10)
      };
    });

    console.log(" Wiola date is ", values.checkInDate, values.checkOutDate);
  };

  function handleClr(e: any) {
    setState(prevState => {
      return {
        ...prevState,
        checkInDate: "",
        checkOutDate: ""
      };
    });
         }

  return (
    <div>
      <RangePicker
        closeOnSelect
        onDateSelected={onDateChanges}
        placeholder={({ startDate, endDate }) => (
          <TextField
            disabled
            variant="outlined"
            color="primary"
            value={
              !values.checkInDate
                ? "Pick a date"
                : values.checkInDate + " to " + values.checkOutDate
            }
            InputProps={{
              endAdornment: (
                <IconButton onClick={(e: any) => handleClr(e)}>
                  <ClearIcon />
                </IconButton>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default Calendar