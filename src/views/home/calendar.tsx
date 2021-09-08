import { IconButton, TextField } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import RangePicker from "react-range-picker";
import { DateRange } from "react-date-range";

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import "./home.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Calendar() {
  const [values, setState] = useState({
    checkInDate: "",
    checkOutDate: "",
  });

  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const onDateChanges = (date, date2) => {
    console.log(" Wiola date is ", values.checkInDate, values.checkOutDate);
    console.log(" date is ", date, date2);
    setState((prevState) => {
      return {
        ...prevState,
        checkInDate: date?.toDateString().slice(0, 10),
        checkOutDate: date2?.toDateString().slice(0, 10),
      };
    });

    console.log(" Wiola date is ", values.checkInDate, values.checkOutDate);
  };

  function handleClr(e: any) {
    setDateState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]
    );
    setState((prevState) => {
      return {
        ...prevState,
        checkInDate: "",
        checkOutDate: "",
      };
    });

    e.stopPropagation();
  }

  const today = new Date();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event:any ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-calendar-popover' : undefined;

  const handleDates = (dates) => {
    console.log(dates)
    setDateState(dates);
    setState((prevState) => {
      return {
        ...prevState,
        checkInDate: dates[0].startDate?.toDateString().slice(0, 10),
        checkOutDate: dates[0].endDate?.toDateString().slice(0, 10),
      };
    });
  }

  return (
    <div>
      {/* <DateRange ranges={dateState} onChange={item => setDateState([item.selection])} minDate={today} /> */}
      <TextField
        disabled
        aria-describedby={id}
        variant="outlined"
        color="primary"
        onClick={handleClick}
        defaultValue="Dates"
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: { width: "400px" },
        }}
      >
        <Typography>
          <DateRange
            ranges={dateState}
            onChange={(item) => handleDates([item.selection])}
            minDate={today}
          />
        </Typography>
      </Popover>
    </div>
  );
}

export default Calendar;

/*

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
      */
