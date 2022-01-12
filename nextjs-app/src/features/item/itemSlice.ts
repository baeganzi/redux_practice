import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
	list: [],
};

export const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {},
	extraReducers: () => {
		// const res = await fetch("http://localhost:3065/api/items");
		// const posts = await res.json();
		// return {
		// 	props: { posts },
		// };
	},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = itemsSlice.actions;

export default itemsSlice.reducer;
