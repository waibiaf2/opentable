import React from 'react';
import Link from "next/link";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/restaurant/[slug]/components/Header";
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavBar";
import Title from "@/app/restaurant/[slug]/components/Title";
import Ratings from "@/app/restaurant/[slug]/components/Ratings";
import Description from "@/app/restaurant/[slug]/components/Description";
import Images from "@/app/restaurant/[slug]/components/Images";
import ReviewCard from "@/app/restaurant/[slug]/components/ReviewCard";
import Reviews from "@/app/restaurant/[slug]/components/Reviews";
import ReservationCard from "@/app/restaurant/[slug]/components/ReservationCard";

const RestaurantDetails = () => {
	return (
		<main className="bg-gray-100 min-h-screen w-screen">
			<main className="max-w-screen-2xl m-auto bg-white">
				<NavBar/>
				<Header/>
				<div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
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
				</div>
			</main>
		</main>
	);
};

export default RestaurantDetails;
