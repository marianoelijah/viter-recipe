import React from 'react'
import Headings from '../Headings'
import Footnote from '../Footnote'
import { imgPath } from '@/components/helpers/functions-general'
import { Clock, Dot, HandPlatter, Utensils } from 'lucide-react'

const Single = () => {
  return (
    <>
       <Headings />
       <section className='bg-dark text-white'>
           <div className='container'>
             <div className=''>
              <img src={`${imgPath}/banner-pasta.webp`} 
              alt="" 
              className='h-[500px] w-full object-cover'
              />

              <div className='text-center py-10'>
                  <h1>Chicken Adobo</h1>
                    <ul className='flex gap-5 mb-5 justify-center'>
                        <li className='flex gap-2 items-center'> 
                            <Clock/> 30mins 
                        </li>
    
                        <li className='flex gap-2 items-center'> 
                            <Utensils/> 4servings
                        </li>
    
                        <li className='flex gap-2 items-center'> 
                            <HandPlatter/> Chicken
                        </li>
                    </ul>
                      <p className='max-w-[600px] mx-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Praesentium, quidem labore! Amet officiis qui velit!
                      </p>

                      <div className="grid grid-cols-[1.5fr_3fr] gap-10 max-w-[900px] mx-auto mt-10 text-left">
                        <div>
                            <h4>Ingredients</h4>
                            {Array.from(Array(8).keys()).map((key) => (
                              <div className="flex gap-2">
                              <Dot />
                              <ul
                                className="grid grid-cols-[.3fr,_1fr] mb-2 basis-full"
                                key={key}
                              >
                                <li>
                                  <span>1</span> Cup
                                </li>
                                <li>Sugar</li>
                              </ul>
                            </div>
                            ))}
                            
                        </div>

                        <div className='wrapper-instruction'>
                            <h4>Instructions</h4>

                            <h5>Step 1 - Clean the chicken</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, soluta.</p>

                            <h5>Step 2 - Clean the chicken</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, soluta.</p>

                            <h5>Step 3 - Clean the chicken</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, soluta.</p>
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
