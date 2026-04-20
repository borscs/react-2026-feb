import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	counter: 0,
	showCounter: true
};


const counterReducer = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		increase: (state, action) => {
			state.counter += action.payload;
		},
		toggle: (state) => {
			state.showCounter = !state.showCounter;
		}
	}
});


export const counterActions = counterReducer.actions;
export default counterReducer.reducer;
