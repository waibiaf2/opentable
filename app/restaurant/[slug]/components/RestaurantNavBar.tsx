'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const RestaurantNavBar = ({slug}:{slug: string}) => {
	const currentRoute = usePathname();
	
	return (
		<nav className="flex text-reg border-b">
			<Link
				href={`/restaurant/${slug}`}
				className={currentRoute===`/restaurant/${slug}`?`mr-7 border-b-2 border-red-700 pb-2`:`mr-7 pb-2`}
			>
				Overview
			</Link>
			<Link
				href={`/restaurant/${slug}/menu`}
				className={currentRoute===`/restaurant/${slug}/menu`?`mr-7 border-b-2 border-red-700 pb-2`:`mr-7 pb-2`}
			>
				Menu
			</Link>
		</nav>
	);
};

export default RestaurantNavBar;
