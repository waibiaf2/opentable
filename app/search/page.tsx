import React from 'react';
import Link from "next/link";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/search/components/Header";
import SearchSidebar from "@/app/search/components/SearchSidebar";
import RestaurantCard from "@/app/search/components/RestaurantCard";

const Search = () => {
	return (
		<>
			<Header/>
			<div className="flex py-4 m-auto w-2/3 justify-between items-start">
				<SearchSidebar/>
				<div className="w-5/6">
					<RestaurantCard/>
				</div>
			</div>
		</>
	);
};

export default Search;
