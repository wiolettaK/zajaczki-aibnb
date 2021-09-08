import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ClickCounter from "./clickCounter";
import { TextField } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
  },
}));

export default function SimplePopover(this: any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const adults = useAppSelector((state) => state.guestCounter.adults);

  const handleClick = (event:any ): void => {
 setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <TextField disabled aria-describedby={id} variant="outlined" color="primary" onClick={handleClick} defaultValue="Goście" value={adults}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
         PaperProps={{
           style: { width: '250px' },
         }}
      >
        <Typography className={classes.typography} >
           <ClickCounter />
            </Typography>
      </Popover>
    </div>
  );
}