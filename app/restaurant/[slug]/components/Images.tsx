'use client'
import React from 'react';
import Image from "next/image";

interface ImageProps {
	images: string[],
}

const Images = ({images}: ImageProps) => {
	return (
		<div>
			<h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
				{images.length} photo{images.length>1? 's':''}
			</h1>
			
			<div className="flex flex-wrap">
				{images.map(image => (
					<Image
						width={100}
						height={100}
						className="w-56 h-44 mr-1 mb-1"
						src={image} alt={'Default image'}
					/>
				))}
			</div>
		</div>
	);
};

export default Images;
