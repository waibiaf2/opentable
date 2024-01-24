'use client'

import {Cuisine, Location, PRICE} from "@prisma/client";
import Link from "next/link";

interface SearchSidebarProps {
	locations: Location[],
	cuisines: Cuisine[]
	searchParams: {
		city?: string,
		cuisine?: string,
		price?: PRICE
	}
}

const prices = [
	{
		price: PRICE.CHEAP,
		label: "$"
	},
	{
		price: PRICE.REGULAR,
		label: "$$"
	},
	{
		price: PRICE.EXPENSIVE,
		label: "$$$"
	}
]

const SearchSidebar = (
	{
		locations,
		cuisines,
		searchParams
	}: SearchSidebarProps
) => {
	return (
		<div className="w-1/5">
			<div className="border-b pb-4 flex flex-col">
				<h1 className="mb-2 font-bold">Region</h1>
				{
					locations.map(
						location =>
							<Link
								className="
									font-light
									text-reg
									capitalize
									cursor-pointer
								"
								key={location.id}
								href={{
									pathname: "/search",
									query: {
										...searchParams,
										city: location.name
									}
								}}
							>
								{location.name}
							</Link>
					)
				}
			
			</div>
			<div className="border-b pb-4 mt-3 flex flex-col">
				<h1 className="mb-2 font-bold">Cuisine</h1>
				{
					cuisines.map(
						cuisine =>
							<Link
								className="
									font-light
									text-reg
									capitalize
									cursor-pointer
								"
								key={cuisine.id}
								href={{
									pathname: "/search",
									query: {
										...searchParams,
										cuisine: cuisine.name
									}
								}}
							>
								{cuisine.name}
							</Link>
					)
				}
			</div>
			<div className="mt-3 pb-4">
				<h1 className="mb-2">Price</h1>
				<div className="flex">
					{prices.map(({price, label})=> (
						<Link
							href={{
								pathname: "/search",
								query: {
									...searchParams,
									price: price
								}
							}}
							className="border w-full text-reg font-light rounded-l p-2 text-center">
							{label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchSidebar;
