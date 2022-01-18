import type { NextPage } from "next";

import { wrapper } from "@/app/store";
import { useAppDispatch, useAppSelector, useInterval } from "@/app/hook";
import { getItems, selectItem } from "@/features/item/itemSlice";
import { ItemGrid } from "@/features/item/ItemGrid";
import { ItemCard } from "@/features/item/ItemCard";
import { mapItem } from "@/entities/item";
import { Box } from "@chakra-ui/react";

import Clock from "@/features/clock/Clock";
import Counter from "@/features/counter/Counter";

import { selectClock, serverRenderClock, startClock } from "@/features/clock/clockSlice";

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
			<Box maxW="7xl" mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
				<ItemGrid>
					{itemList?.map(mapItem).map((item) => (
						<ItemCard key={item.itemId} item={item} />
					))}
				</ItemGrid>
			</Box>
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
