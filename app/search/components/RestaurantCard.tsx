import React from 'react';
import Link from "next/link";
import {Cuisine, PRICE, Location} from "@prisma/client";
import Price from "@/app/components/Price";
import Image from "next/image";
import Stars from "@/app/components/Stars";
import {Review} from ".prisma/client";

interface Restaurant {
	name: string,
	cuisine: Cuisine,
	slug:string,
	price: PRICE
	main_image: string,
	location: Location,
	reviews: Review[]
}

const RestaurantCard = ({restaurant}:{restaurant: Restaurant}) => {
	const {
		name,
		cuisine,
		slug,
		price,
		main_image,
		location,
		reviews
	} = restaurant;
	return (
		<div className="border-b flex pb-5 [&:not(:first-child)]:mt-4">
			<div className="w-44" >
				<Image
					src={main_image}
					alt={''}
					width={100}
					height={0}
					className="h-fit w-full rounded"
				/>
			</div>
		
			<div className="pl-5">
				<h2 className="text-3xl capitalize">{name}</h2>
				<div className="flex items-start">
					<div className="flex mb-2">
						<Stars reviews={reviews}/>
					</div>
					<p className="ml-2 text-sm">Awesome</p>
				</div>
				<div className="mb-9">
					<div className="font-light flex text-reg">
						<p className="mr-4"><Price price={price}/></p>
						<p className="mr-4 capitalize">{cuisine.name}</p>
						<p className="mr-4 capitalize">{location.name}</p>
					</div>
				</div>
				<div className="text-red-600">
					<Link href={`restaurant/${slug}`}>View more information</Link>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
