import React from 'react'
import { imgPath } from "@/components/helpers/functions-general";
import { Link } from "react-router-dom";

const TopRating = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container">
        <h2 className="text-white">Top Rated Recipes</h2>

<<<<<<< HEAD
        <div className="grid grid-container-top gap-3">
        {Array.from(Array(6).keys()).map((key) => (
          <div className={`grid-items relative h-full w-full bg-black group grid-name-${key} overflow-hidden`}
          key={key}
          >
           <img 
           src={`${imgPath}/chicken.jpg`} 
           alt="" 
           className='object-cover h-full transition-all group-hover:opacity-70 group-hover:scale-[1.5] group-hover:rotate-[10deg]'
           />
              <div className='absolute md:-bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all'>
                <ul className='text-sm flex gap-4 items-center'>
                   <li>30mins</li>
                    <li>4 servings</li>
                </ul>
                 <h4 className='mb-2 font-light md:text-lg'>
                   Special Chicken Ala-King
                 </h4>
        
=======
        <div className="grid grid-container-top gap-5">
          {Array.from(Array(6).keys()).map((key) => (
            <div
              className={`grid-item relative h-full w-full bg-black group grid-name-top-${key} overflow-hidden transition-all duration-200`}
              key={key}
            >
              <img
                src={`${imgPath}/Truffle-Pasta.webp`}
                alt=""
                className="h-full w-full object-cover transition-all group-hover:opacity-70 group-hover:scale-[1.3] group-hover:rotate-[10deg] duration-200"
              />
              <div className="absolute -bottom-32 opacity-0 left-5 text-white bg-dark bg-opacity-60 p-5 group-hover:bottom-5 group-hover:opacity-100 transition-all duration-300">
                <ul className="text-sm flex gap-5 items-center">
                  <li>30min</li>
                  <li>2 servings</li>
                </ul>
                <h4 className="mb-2 font-light">Truffle Pasta</h4>
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
                <Link to="/" className="font-bold">
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopRating