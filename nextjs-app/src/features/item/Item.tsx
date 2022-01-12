import React from "react";
import { Box, Image, Link, Text, Stack } from "@chakra-ui/react";

import * as store from "@/app/store";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./itemSlice";

function Items() {
	// const count = useSelector((state: AppState) => state.items.value);
	// const dispatch = useDispatch();

	return (
		<div>
			<h2>image ss</h2>
			<Box boxSize="sm">
				<Link href="https://chakra-ui.com" isExternal>
					<Image src="http://item.ssgcdn.com/61/72/26/item/1000027267261_i1_600.jpg" alt="아이템이미지" />
				</Link>
				<Stack spacing={3}>
					<Text fontSize="4xl">title - 타이틀</Text>
					<Text fontSize="2xl">subtitle - 서브타이틀</Text>
					<Text fontSize="sm">12,000원</Text>
				</Stack>
			</Box>
		</div>
	);
}

export default Items;
