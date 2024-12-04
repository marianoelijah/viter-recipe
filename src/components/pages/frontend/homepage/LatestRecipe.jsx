
import { imgPath } from '@/components/helpers/functions-general';
import React from 'react'
import { Link } from 'react-router-dom';

const LatestRecipe = () => {
  return (
     <section className='py-24 md:py-24 bg-dark'>
        <div className='container'>
            <h2 className='text-white text-2xl md:text-4xl'>
                Latest Recipes
            </h2>

            <div className="grid grid-container gap-3 md:grid-cols-3 ">
            {Array.from(Array(6).keys()).map((key) => (
              <div className={`grid-items relative h-full w-full bg-black group grid-name-${key} 
              overflow-hidden`}
              key={key}
              >
               <img 
               src={`${imgPath}/banner-pasta.webp`} 
               alt="" 
               className='group-hover:opacity-70 group-hover:scale-[1.5] md:h-64 group-hover:rotate-[10deg] h-full object-cover transition-all'
               />
                  <div className='absolute md:-bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all'>
                    <ul className='text-sm flex gap-4 items-center'>
                       <li>30mins</li>
                       <li>4 servings</li>
                    </ul>
                     <h4 className='mb-2 font-light text-base md:text-lg '>
                       Special Freshly Baked Carbonara
                     </h4>
            
                    <Link to="/" className="font-bold">
                      View Recipe
                    </Link>
                  </div>
                 </div>
            ))}

            </div>
        </div>
     </section>
  )
}

export default LatestRecipe;
