
import { imgPath } from '@/components/helpers/functions-general';
import React from 'react'
import { Link } from 'react-router-dom';

const LatestRecipe = ({ result }) => {
   const allRecent = result?.data.filter((item) => {
      return (
        Math.floor(
          Math.abs(new Date(item.recipe_created) - new Date()) /
            (1000 * 60 * 60 * 24)
        ) < 10
      );
    });
    
  return (
     <section className='py-24 bg-dark'>
        <div className='container'>
            <h2 className='text-white md:text-4xl'>
                Latest Recipes
            </h2>

            <div className="grid grid-container gap-3">
              {allRecent?.slice(0, 6).map(( item, key ) => (
               <div className={`grid-items relative h-full w-full bg-black group grid-name-${key} 
               overflow-hidden`}
               key={key}
               >
                <img 
                src={`${imgPath}/${item.recipe_image}`} 
                alt="" 
                className='group-hover:opacity-70 group-hover:scale-[1.5] group-hover:rotate-[10deg] h-full object-cover transition-all'
                />
                   <div className='absolute -bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all'>
                     <ul className='text-sm flex gap-4 items-center'>
                        <li>{item.recipe_prep_time}</li>
                         <li>{item.recipe_serving} serving</li>
                     </ul>
                      <h4 className='mb-2 font-light'>
                      {item.recipe_title} 
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
