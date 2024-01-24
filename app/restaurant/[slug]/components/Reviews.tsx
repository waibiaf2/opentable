import React from 'react';
import ReviewCard from "@/app/restaurant/[slug]/components/ReviewCard";
import {Review} from ".prisma/client";

const Reviews = ({reviews}:{reviews: Review[]}) => {
	return (
		<div>
			<h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
				What 100 people are saying
			</h1>
			<div>
				{
					reviews.map( review => <ReviewCard review={review}/>)
				}
			</div>
		</div>
	);
};

export default Reviews;
