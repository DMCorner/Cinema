import Slider from "react-slick"

const listOfFavourites = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    const favouriteFilms =
 [
{
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'
},
{
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    Poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
},
{
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
    Title: 'The Northman',
    Year: "2022",
    Poster: "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg"
},
{
    Title: "Fight Club",
    Year: "1999",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
},
{
    Title: "Akira",
    Year: "1988",
    Poster: "https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_SX300.jpg"
},
    {
    Title: "The Thing",
    Year: "1982",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}, 
{
    Title: "Terminator 2: Judgement Day",
    Year: "1991",
    Poster: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
},
{
    Title: "The Iron Giant",
    Year: "1999",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjIxNDU2Njk0OV5BMl5BanBnXkFtZTgwODc3Njc3NjE@._V1_SX300.jpg"
},
 {
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}]
    return (
        <Slider {...settings} className="relative w-11/12 left-[4.16%]">
        <div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[0].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[0].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[0].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div>
    <div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[1].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[1].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[1].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div><div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[2].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[2].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[2].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div><div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[3].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[3].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[3].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div><div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[4].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[4].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[4].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div><div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[5].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[5].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[5].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div><div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[6].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[6].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[6].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div><div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[7].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[7].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[7].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div>
    <div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[8].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[8].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[8].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div>
    <div className="relative h-full w-screen top-10 z-50">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:translate-x-20 hover:scale-110 font-bold transition-all duration-100">
          <div  className="relative bg-gradient-to-t from-red-800 via-transparent hover:bg-red-800 transition-all duration-500 h-80 w-60 p-6 text-stone-500 rounded-t-lg">
            <img src={favouriteFilms[9].Poster} alt="Image not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-red-800 text-center w-60 h-10 ">{favouriteFilms[9].Title}</h4>
              <p className="bg-gradient-to-b from-red-800 via-transparent text-center w-60 h-10 rounded-b-lg">{favouriteFilms[9].Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div>
    </Slider>
    )    
}


export default listOfFavourites