import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movie/movieSlice";
import MovieCard from "../components/MovieCard"
import Slider from "react-slick"

const MovieListing = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies, renderShows = "";

    renderMovies = 
    movies.Response === "True" ? (    
        movies.Search.map((movie, index) => 
            <MovieCard key={index} data={movie}/>
         ,
        //  console.log("MC",movies)
         )
    ):(
        <div className="movies-error">
            <h3>{movies.Error}
            </h3>
            </div>
            );

    renderShows = 
    shows.Response === "True" ? (    
        shows.Search.map((movie, index) => 
            <MovieCard key={index} data={movie}/>
         ,
        //  console.log("MC",movies)
         )
    ):(
        <div className="shows-error">
            <h3>{shows.Error}
            </h3>
            </div>
            );
    // console.log("MovieListing",movies);
    return (
    <div className="relative h-screen">
        <div className="">
            <h1 className="z-10 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                Movies
              </h1>
            <div >
                <Slider {...settings} className="relative w-11/12 left-[4.16%]" >
                    {renderMovies}
                    </Slider>
                {/* {console.log("ML",renderMovies)} */}
            </div>
            </div>
            <div className="relative top-10">
            <h1 className="text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                Series
              </h1>
            <div>
                <Slider {...settings} className="relative w-11/12 left-[4.16%]">
                    {renderShows}
                    </Slider>
                {/* {console.log("ML",renderShows)} */}
            </div>
            </div>
        </div>
  );
};

export default MovieListing;

    // <div className="movie-wrapper">
    //     <div className="movie-list">
    //         <h1 className="w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
    //             Movies
    //           </h1>
    //         <div className="movie-container">
    //             <Slider {...settings} className="slider">
    //                 {renderMovies}
    //                 </Slider>
    //             {console.log("ML",renderMovies)}
    //         </div>
    //         </div>
    //         <div className="shows-list">
    //         <h1 className="w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
    //             Series
    //           </h1>
    //         <div className="show-container">
    //             <Slider {...settings}>
    //                 {renderShows}
    //                 </Slider>
    //             {console.log("ML",renderShows)}
    //         </div>
    //         </div>
    //     </div>