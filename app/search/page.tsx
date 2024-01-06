import React from 'react';
import Link from "next/link";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/search/components/Header";
import SearchSidebar from "@/app/search/components/SearchSidebar";
import RestaurantCard from "@/app/search/components/RestaurantCard";

const Search = () => {
	return (
		<main className="bg-gray-100 min-h-screen w-screen">
			<main className="max-w-screen-2xl m-auto bg-white">
				<NavBar/>
				<Header/>
				<div className="flex py-4 m-auto w-2/3 justify-between items-start">
					<SearchSidebar/>
					<div className="w-5/6">
						<RestaurantCard/>
					</div>
				</div>
			</main>
		</main>
	
	);
};

export default Search;
