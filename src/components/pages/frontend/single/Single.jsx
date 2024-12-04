import React from 'react'
import Headings from '../Headings'
import Footnote from '../Footnote'
import { imgPath } from '@/components/helpers/functions-general'
import { Clock, Dot, HandPlatter, Utensils } from 'lucide-react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import useQueryData from '@/components/custom-hook/useQueryData'

const Single = () => {
  const { slug } = useParams();

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe"
  );

  const getSingleRecipe = () => 
    result?.data.filter( 
      (item) => item.recipe_title === slug.replaceAll("-", " ")
    );

    return (
    <>
       <Headings />
       <section className='bg-dark text-white'>
           <div className='container'>
             <div className='py-25'>
              <img 
              src={`${imgPath}/${
                getSingleRecipe() !== undefined &&
                getSingleRecipe()[0].recipe_image}`}
              alt="" 
              className='h-[500px] w-full object-cover'
              />

              <div className='text-center py-10'>
                  <h1>
                     {getSingleRecipe() !== undefined &&
                      getSingleRecipe().recipe_title}
                  </h1>

                    <ul className='flex gap-5 mb-5 justify-center'>
                        <li className='flex gap-2 items-center'> 
                            <Clock/> {" "}
                            {getSingleRecipe() !== undefined &&
                             getSingleRecipe().recipe_prep_time}
                             mins
                        </li>
    
                        <li className='flex gap-2 items-center'> 
                            <Utensils/> {" "}
                            {getSingleRecipe() !== undefined &&
                             getSingleRecipe().recipe_serving} {" "}
                             servings
                        </li>
    
                        <li className='flex gap-2 items-center'> 
                            <HandPlatter/> {" "}
                            {getSingleRecipe() !== undefined &&
                             getSingleRecipe().recipe_category} {" "}
                        </li>
                    </ul>
                      <p className='max-w-[600px] mx-auto'>
                      {getSingleRecipe() !== undefined &&
                      getSingleRecipe().recipe_description}
                      </p>

                      <div className="grid grid-cols-[1.5fr_3fr] gap-10 max-w-[900px] mx-auto mt-10 text-left">
                        <div>
                            <h4>Ingredients</h4>
                            {getSingleRecipe() !== undefined &&
                      JSON.parse(getSingleRecipe()[0].recipe_ingredients).map(
                      (item, key) => (
                        <div className="flex gap-2" key={key}>
                          <Dot />
                          <ul className="grid grid-cols-[.6fr,_1fr] mb-2 basis-full">
                            <li>
                              <span>{item.amount}</span> {item.unit}
                            </li>
                            <li>{item.ingredients}</li>
                          </ul>
                        </div>
                      )
                    )}
                        </div>

                        <div className='wrapper-instruction'>
                            <h4>Instructions</h4>
                            <Markdown>
                              {getSingleRecipe() !== undefined &&
                              getSingleRecipe().recipe_instructons}
                            </Markdown>
                            
                        </div>
                    </div>
                </div>
             </div>            
           </div>
       </section>

       <Footnote />
    </>
  )
}

export default Single
