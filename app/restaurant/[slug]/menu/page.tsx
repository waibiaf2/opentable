import React from 'react';
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavBar";
import Menu from "@/app/restaurant/[slug]/components/Menu";

const RestaurantMenu = () => {
	return (
		<div className="bg-white w-[100%] rounded p-3 shadow">
			<RestaurantNavBar/>
			<Menu/>
		</div>
	);
};

export default RestaurantMenu;
