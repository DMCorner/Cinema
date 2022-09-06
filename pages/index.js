import {useEffect} from 'react';
import MovieListing from '../components/MovieListing'

import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movie/movieSlice';
import Popup from "../components/Popup"
import { useState } from 'react';
import Header from '../components/Header';


const Home = () => {
	const dispatch = useDispatch();
	const movieText = "Star"
	const showText = "Friends"
	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText));
		dispatch(fetchAsyncShows(showText));
	}, [dispatch]);

	return (
		<div className='relative justify-center'>
			<h1 className="place-content-center text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                Home
              </h1>
			<MovieListing className=''/>
		</div>
	)
}



const index = () => {
	// const [buttonPopup, setButtonPopup] = useState(false);
	// const [timedPopup, setTimedPopup] = useState(false)
	

	// useEffect(() => {
	// 	setTimeout(() => {
	// 	setTimedPopup(true);
	// }, 3000);
	// }, [])
	return (
		<div>
			<Header/>
			{/* <button onClick= {() => setButtonPopup(true)}>Open Popup</button>
			<Popup trigger={buttonPopup} setTrigger={setButtonPopup}><h3>My Popup</h3></Popup>
			<Popup trigger={timedPopup} setTrigger={setTimedPopup}></Popup> */}
			<Home/>
		</div>
	);
};

export default index;