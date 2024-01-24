import React from 'react';
import {Review} from ".prisma/client";
import {calculateReviewRatingAverage} from "@/utils/calculateREviewRatingAverage";
import Stars from "@/app/components/Stars";

const Ratings = ({reviews}: {reviews: Review[]}) => {
	const rating = calculateReviewRatingAverage(reviews)
	return (
		<div className="flex items-end">
			<div className="ratings mt-2 flex items-center">
				<p className="flex mb-2"><Stars reviews={reviews}/></p>
				<p className="text-reg ml-3">
					<span className="italic">Rating:</span>
					{rating}
				</p>
			</div>
			<div>
				<p className="text-reg ml-4">
					{reviews.length} Review{reviews.length === 1 ? '' : 's'}
				</p>
			</div>
		</div>
	);
};

export default Ratings;
