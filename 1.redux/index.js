//const { createStore } = require("redux");

////const store = createStore(Reducer);

//const reducer = (prevState, action) => {
//	// 새로운 state만들어주기
//	switch (action.type) {
//		case "CHANGE_COMP_A":
//			return {
//				...prevState, //얕은복사
//				compA: action.data,
//			};
//		case "CHANGE_COMP_B":
//			return {
//				...prevState, //얕은복사
//				compB: action.data,
//			};
//		default:
//			// 오타방지
//			return prevState;
//	}
//};
////const store = createStore();
////console.log(store.getstate());

//const initialState = {
//	compA: "a",
//	compB: 12,
//	compC: null,
//};

////const nextState = {
////	...initialState, // 기존내용복사
////	compA: action.data,
////};

//const store = createStore(reducer, initialState);
//store.subscribe(listener, () => {
//	//리액트 리덕스안에 존재
//	console.log("changed"); // 화면바꿔주는코드
//});

//console.log(store.getstate());

////action
////const changCompA = (data) => {
////	return {
////		// action
////		type: "CHANGE_COMP_A",
////		data,
////	};
////};

////store.dispatch({
////	type:'CHANGE_COMP_A',
////	data : 'b',
////});
//store.dispatch(changCompA(data, "b"));

//console.log(store.getstate());

const { createStore } = require("redux");

const reducer = (prevState, action) => {
	// 새로운 state 만들어주기
	switch (action.type) {
		case "CHANGE_COMP_A":
			return {
				...prevState,
				compA: action.data,
			};
		case "CHANGE_COMP_B":
			return {
				...prevState,
				compB: action.data,
			};
		case "CHANGE_COMP_C":
			return {
				...prevState,
				compC: action.data,
			};
		default:
			return prevState;
	}
};

const initialState = {
	compA: "a",
	compB: 12,
	compC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
	// react-redux 안에 들어있어요.
	console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1st", store.getState());

const changeCompA = (data) => {
	return {
		// action
		type: "CHANGE_COMP_A",
		data,
	};
};

// store.dispatch({
//   type: 'CHANGE_COMP_A',
//   data: 'b',
// });
store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());
