import React from 'react';
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavBar";
import Menu from "@/app/restaurant/[slug]/components/Menu";
import {Metadata} from "next";
import { PrismaClient } from '@prisma/client';

export const metadata: Metadata = {
	title: "Menu of Milestone Grill (Toronto)"
}

const prisma = new PrismaClient;

const fetchItems = async (slug:string) => {
	const restaurant = await prisma.restaurant.findUnique({
		where: {
			slug
		},
		select: {
			items: true
		}
	});
	
	if (!restaurant) {
		throw new Error();
	}
	
	return restaurant.items;
}

const RestaurantMenu = async ({params}: {params:{slug: string}}) => {
	const menu = await fetchItems(params.slug);
	// console.log(menu);
	return (
		<div className="bg-white w-[100%] rounded p-3 shadow">
			<RestaurantNavBar slug={params.slug}/>
			<Menu menu={menu}/>
		</div>
	);
};

export default RestaurantMenu;
