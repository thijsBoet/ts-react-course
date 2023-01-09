import React from 'react';

const Image = ({ image }) => {
	return (
		<a href={image.largeImageURL}>
			<img
				src={image.webformatURL}
				alt={image.tags}
				className='p-4 rounded-lg shadow-2xl hover:shadow-inner mt-3'
				width='640'
			/>
		</a>
	);
};

export default Image;
