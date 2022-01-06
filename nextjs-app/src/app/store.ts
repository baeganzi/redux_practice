import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";
import clockReducer from "@/features/clock/clockSlice";
import { createWrapper } from "next-redux-wrapper";
const rootReducer = combineReducers({
	counter: counterReducer,
	clock: clockReducer,
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== "production",
	});
};
export const store = makeStore();
// export const store = configureStore({
// 	reducer: {
// 		counter: counterReducer,
// 	},
// });
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
