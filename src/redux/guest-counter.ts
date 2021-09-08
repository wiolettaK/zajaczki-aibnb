import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GuestCounterState {
  adults: number;
  children: number;
}

const initialState: GuestCounterState = {
    adults: 0,
    children: 0
}

interface GuestType {
    guestType: 'adults' | 'children',
    actionType: 'increment' | 'decrement'
}

export const guestCounterSlice = createSlice({
  name: 'guestCounter',
  initialState,
  reducers: {
    incrementAdults: (state) => {
      state.adults += 1;
    },
    decrementAdults: (state) => {
      state.adults -= 1;
    },
    inny: (state, action: PayloadAction<GuestType>) => {
        if (action.payload.guestType === 'adults') {
            console.log('super');
            state.adults += 1;
        }
    }
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  }
});

// Action creators are generated for each case reducer function
export const { incrementAdults, decrementAdults } = guestCounterSlice.actions;

export default guestCounterSlice.reducer;
