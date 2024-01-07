import React from 'react';
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavBar";
import Menu from "@/app/restaurant/[slug]/components/Menu";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Menu of Milestone Grill (Toronto)"
}
const RestaurantMenu = () => {
	return (
		<div className="bg-white w-[100%] rounded p-3 shadow">
			<RestaurantNavBar/>
			<Menu/>
		</div>
	);
};

export default RestaurantMenu;
