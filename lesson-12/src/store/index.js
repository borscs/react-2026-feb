import {configureStore, createSlice} from "@reduxjs/toolkit";
import CounterReducers from "./counter"
import AuthReducers from "./auth";
// const initialState = {
// 	counter: 0,
// 	showCounter: true
// };
//
// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'INCREMENT') {
// 		return{
// 			...state,
// 			counter: state.counter + 1,
// 		};
// 	}
//
// 	if(action.type === 'INCREASE') {
// 		return{
// 			...state,
// 			counter: state.counter + action.amount,
// 		};
// 	}
//
// 	if(action.type === 'DECREMENT') {
// 		return{
// 			...state,
// 			counter: state.counter - 1,
// 		};
// 	}
//
// 	if(action.type === 'TOGGLE') {
// 		console.log('toggle');
// 		return{
// 			...state,
// 			showCounter: !state.showCounter,
// 		};
// 	}
//
// 	return state;
// };
//
// const store = createStore(counterReducer);
//
// export default store;





const store = configureStore({
	reducer: {counter: CounterReducers, auth: AuthReducers}
});


export default store;




