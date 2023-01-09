import { useState, useEffect } from 'react';
import './App.css';
import ImageList from './components/ImageList';

function App() {
	const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
	const PIXABAY_API_URL = 'https://pixabay.com/api/';

	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');

	const onInputChange = e => setTerm(e.target.value);

	const onSearchSubmit = async e => {
		e.preventDefault();
		const response = await fetch(
			`${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo`
		);
		const img = await response.json();
		setImages(img);
	};

	return (
		<div className='container mx-auto w-full box-border'>
			<form onSubmit={onSearchSubmit}>
				<input
					autoFocus
					id='search-images'
					type='text'
					value={term}
					onChange={onInputChange}
					className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text focus:outline-none'
				/>
				<button
					className='bg-sky-500 text-white px-5 py-2 mt-5 ml-2 rounded-full'
					type='submit'
				>
					Search
				</button>
			</form>
			<p className='text-sm text-gray-500 m-1 ml-5'>
				{term !== ''
					? `${images.total} image results for ${term}`
					: null}
			</p>
			<ImageList images={images} term={term} />
		</div>
	);
}

export default App;
