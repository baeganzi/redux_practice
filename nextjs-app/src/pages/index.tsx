import type { NextPage } from "next";

import { wrapper } from "@/app/store";
import { useAppDispatch, useAppSelector, useInterval } from "@/app/hook";

import Clock from "@/features/clock/Clock";
import Counter from "@/features/counter/Counter";
import { getItems, selectItem } from "@/features/item/itemSlice";

import { selectClock, serverRenderClock, startClock } from "@/features/clock/clockSlice";
import { ChakraProvider } from "@chakra-ui/react";

import styles from "@/styles/Home.module.css";
import { ItemCard } from "@/features/item/itemCard";

const Home: NextPage = () => {
	const dispatch = useAppDispatch();
	// const { lastUpdate, light } = useAppSelector(selectClock);
	const { itemList } = useAppSelector(selectItem);

	// useInterval(() => {
	// 	dispatch(startClock());
	// }, 1000);

	return (
		// <div className={styles.container}>
		// 	<Counter />
		// 	<Clock lastUpdate={lastUpdate} light={light} />
		// 	<ChakraProvider>
		// 		<Item />
		// 	</ChakraProvider>
		// </div>
		<>
			{itemList?.map((item) => (
				<ItemCard key={item.itemId} item={item} />
			))}
		</>
	);
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	// await store.dispatch(serverRenderClock(true));
	await store.dispatch(getItems());
	return {
		props: {},
	};
});

export default Home;
