import React from 'react';
import Link from "next/link";
import {RestaurantCardType} from "@/app/page";
import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";

const RestaurantCard = ({restaurant}: {restaurant: RestaurantCardType} ) => {
	const {
		name,
		main_image,
		cuisine,
		location,
		price,
		slug,
		reviews
	} = restaurant;

	return (
		<Link href={`/restaurant/${slug}`}>
			<div
				className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
			>
				<img
					src={main_image}
					alt=""
					className="w-full h-36"
				/>
				<div className="p-1">
					<h3 className="font-bold text-2xl mb-2">{name}</h3>
					<div className="flex items-start">
						<div className="flex mb-2">
							<Stars reviews={restaurant.reviews}/>
						</div>
						<p className="ml-2">{`${reviews.length} review${reviews.length === 1? '': 's'}`}</p>
					</div>
					<div className="flex text-reg font-light capitalize">
						<p className=" mr-3">{cuisine.name}</p>
						<Price price={price}/>
						<p>{location.name}</p>
					</div>
					<p className="text-sm mt-1 font-bold">Booked 3 times today</p>
				</div>
			</div>
		</Link>
	);
};

export default RestaurantCard;
