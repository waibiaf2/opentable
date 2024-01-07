import React, {Fragment} from 'react';
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavBar";
import Title from "@/app/restaurant/[slug]/components/Title";
import Ratings from "@/app/restaurant/[slug]/components/Ratings";
import Description from "@/app/restaurant/[slug]/components/Description";
import Images from "@/app/restaurant/[slug]/components/Images";
import Reviews from "@/app/restaurant/[slug]/components/Reviews";
import ReservationCard from "@/app/restaurant/[slug]/components/ReservationCard";
import {Metadata} from "next";


export const metadata: Metadata = {
	title: "Millstone Grill(Toronto)",
	description: "The search page of the OpenTables system"
}


const RestaurantDetails = () => {
	return (
		<>
			<div className="bg-white w-[70%] rounded p-3 shadow">
				<RestaurantNavBar/>
				<Title/>
				<Ratings/>
				<Description/>
				<Images/>
				<Reviews/>
			</div>
			<div className="w-[27%] relative text-reg">
				<ReservationCard/>
			</div>
		</>
	);
};

export default RestaurantDetails;
