import React, {Fragment} from 'react';
import Header from "./components/Header";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: {
		template: '%s | OpenTables',
		default: 'Restaurant',
	},
	description: 'A restaurant reservation system',
}

const RestaurantLayout = (
	{
		children,
		params
		
	}:{
		children: React.ReactNode;
		params: {slug: string}
	}
) => {
	return (
		<Fragment>
			<Header name={params.slug}/>
			<div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
				{children}
			</div>
		</Fragment>
	);
};

export default RestaurantLayout;
