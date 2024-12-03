import { imgPath } from '@/components/helpers/functions-general'
import { ArrowRight, ChartBarStacked, Clock, HandPlatter, Sliders, Utensils, UtensilsCrossed } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

const BannerSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
      };

  return (
     <section className=''>
        <Slider {...settings}>
            {Array.from(Array(5).keys()).map((key) => (
                <div className='w-full h-[calc(100vh-96.06px)] relative' key={key}>
                <img src={`${imgPath}/banner-pasta.webp`}
                 alt="" 
                 className='w-full h-[110%] object-cover'
                 />
    
                 <div className='tint  w-full h-[110%] bg-black absolute top-0 left-0 bg-opacity-40'></div>
                   <div className='absolute top-1/2  left-[calc((100%-1200px)/2)] p-4 text-white max-w-[500px]
                   -translate-y-1/2'>
                     <h2 className='text-5xl '>Freshly Baked Carbonara</h2>
                      <ul className='flex gap-5 mb-5'>
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
    
                      <p className='mb-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Eum assumenda veritatis delectus repellendus rerum, sunt 
                        earum inventore illo itaque culpa eaque dolorem, suscipit ratione. 
                        Quidem iste laboriosam assumenda reiciendis facere!
                      </p>
    
                      <Link to="/" className='flex gap-3 group items-center hover:text-accent transition-all font-bold'>
                      View Full Recipe
                      <ArrowRight size={18}
                       className='opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-accent'/>
                      </Link>
                   </div>
                </div>
            ))}
          
        </Slider>
       
        

       
     </section>
  )
}

export default BannerSlider
