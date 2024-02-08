import React from 'react';
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavBar";
import Title from "@/app/restaurant/[slug]/components/Title";
import Ratings from "@/app/restaurant/[slug]/components/Ratings";
import Description from "@/app/restaurant/[slug]/components/Description";
import Images from "@/app/restaurant/[slug]/components/Images";
import Reviews from "@/app/restaurant/[slug]/components/Reviews";
import ReservationCard from "@/app/restaurant/[slug]/components/ReservationCard";
import {Metadata} from "next";
import { PrismaClient } from '@prisma/client';
import {Review} from ".prisma/client";

export const metadata: Metadata = {
	title: "Millstone Grill(Toronto)",
	description: "The search page of the OpenTables system"
}

const prisma = new PrismaClient;

interface Restaurant {
	id: number,
	name: string,
	images: string[],
	description: string,
	slug: string
	reviews: Review[]
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
	const restaurant =   prisma.restaurant.findUnique({
		where: {
			slug
		},
		select: {
			id: true,
			name: true,
			description: true,
			images: true,
			slug: true,
			reviews: true
		}
	});
	
	if (!restaurant) {
		throw new Error("Cannot find restaurant");
	}
	
	// @ts-ignore
	return restaurant;
}

const RestaurantDetails = async ({params}: {params:{slug: string}}) => {
	const restaurant = await fetchRestaurantBySlug(params.slug);
	
	return (
		<>
			<div className="bg-white w-[70%] rounded p-3 shadow">
				<RestaurantNavBar slug={restaurant.slug}/>
				<Title title={restaurant.name}/>
				<Ratings reviews={restaurant.reviews}/>
				<Description description={restaurant.description}/>
				<Images images={restaurant.images}/>
				<Reviews reviews={restaurant.reviews}/>
			</div>
			<div className="w-[27%] relative text-reg">
				<ReservationCard/>
			</div>
		</>
	);
};

export default RestaurantDetails;
