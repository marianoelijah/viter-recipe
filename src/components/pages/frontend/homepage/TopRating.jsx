import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'
import { Link } from 'react-router-dom'

const TopRating = () => {
  return (
    <section className='py-24 md:py-24 bg-dark -translate-y-2'>
      <div className='container'>
        <h2 className='text-white md:text-4xl '>
            Top Rated Recipes
        </h2>

        <div className="grid grid-container-top gap-3 md:grid-cols-3">
        {Array.from(Array(6).keys()).map((key) => (
          <div className={`grid-items relative h-full w-full bg-black group grid-name-${key} overflow-hidden`}
          key={key}
          >
           <img 
           src={`${imgPath}/banner-pasta.webp`} 
           alt="" 
           className='object-cover h-full md:h-64 transition-all group-hover:opacity-70 group-hover:scale-[1.5] group-hover:rotate-[10deg]'
           />
              <div className='absolute -bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all'>
                <ul className='text-sm flex gap-4 items-center'>
                   <li>30mins</li>
                    <li>4 servings</li>
                </ul>
                 <h4 className='mb-2 font-light'>
                    Sinigang na Isda
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

export default TopRating
