
import React from "react";
import  Link  from "next/link";
import Image from "next/image"



const MovieCard = (props) => {
  const { data } = props;
  console.log("moviecard",data.Poster)
  return (
        <div className="relative h-full w-screen top-10">
      {/* <Link href={`/${data.imdbID}`}> */}
        <div className="z-50 h-1/2 hover:-translate-y-10 font-bold transition-all duration-100">
          <div  className="relative bg-blue-900 h-80 w-60 p-6 text-stone-500 rounded-t-lg shadow-2xl">
            <img src={data.Poster} alt="Not found" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <div className="">
              <h4 className="bg-blue-900 text-center w-60 h-10 ">{data.Title}</h4>
              <p className="bg-blue-900 text-center w-60 h-10 rounded-b-lg">{data.Year}</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div>
  );
};

export default MovieCard;



//         <div className="inline-grid w-screen">
//       {/* <Link to={`/movie/${data.imdbID}`}> */}
//         <div className="inline-grid w-screen">
//           <div  className="inline-grid h-96 w-1/6 p-6">
//             <img src={data.Poster} alt={data.Title} width={5}/>
//           </div>
//           <div>
//             <div classname="w-1/6" >
//               <h4>{data.Title}</h4>
//               <p>{data.Year}</p>
//             </div>
//           </div>
//         </div>
//         {/* </Link> */}
//     </div>
//   );
// };

    // <div className="card-item">
    //   {/* <Link to={`/movie/${data.imdbID}`}> */}
    //     <div className="card-inner">
    //       <div className="card-top">
    //         <img src={data.Poster} alt={data.Title}/>
    //       </div>
    //       <div className="card-bottom">
    //         <div className="card-info">
    //           <h4>{data.Title}</h4>
    //           <p>{data.Year}</p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* </Link> */}
    // </div>