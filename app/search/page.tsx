import React from 'react';
import Header from "@/app/search/components/Header";
import SearchSidebar from "@/app/search/components/SearchSidebar";
import RestaurantCard from "@/app/search/components/RestaurantCard";
import {PRICE, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

interface SearchParams {
	city?: string,
	cuisine?: string,
	price?: PRICE
}

const fetchRestaurantsByCity = async (searchParams: SearchParams) => {
	const selectOptions = {
		id: true,
		name: true,
		cuisine: true,
		slug: true,
		price: true,
		main_image: true,
		location: true,
		reviews: true
	}
	
	const where: any = {};
	
	if (searchParams.city) {
		where.location = {
			name: {
				equals: searchParams.city.toLowerCase(),
			}
		}
	}
	
	if (searchParams.cuisine) {
		where.cuisine = {
			name: {
				equals: searchParams.cuisine.toLowerCase(),
			}
		}
	}
	
	if (searchParams.price) {
		where.price = {
			equals: searchParams.price,
		}
	}
	if (!searchParams) return prisma.restaurant.findMany({select: selectOptions});
	
	return prisma.restaurant.findMany({
		where,
		select: selectOptions
	});
}


const fetchLocations = async () => {
	return prisma.location.findMany();
}

const fetchCuisine = async () => {
	return prisma.cuisine.findMany();
}

const Search = async (
	{
		searchParams
	}: {
		searchParams: SearchParams
	}
) => {
	const restaurants = await fetchRestaurantsByCity(searchParams);
	const locations = await fetchLocations();
	const cuisines = await fetchCuisine();
	
	console.log(restaurants);
	
	return (
		<>
			<Header/>
			<div className="flex py-4 m-auto w-2/3 justify-between items-start">
				<SearchSidebar
					locations={locations}
					cuisines={cuisines}
					searchParams={searchParams}
				/>
				<div className="w-5/6 ml-5">
					{
						restaurants.length ? (
							<>
								{
									restaurants.map(
										restaurant => (
											<RestaurantCard
												key={restaurant.id}
												restaurant={restaurant}
											/>
										)
									)
								}
							</>
						) : (
							<p>Sorry, we found no restaurants in this area.</p>
						)
					}
				</div>
			</div>
		</>
	);
};

export default Search;
