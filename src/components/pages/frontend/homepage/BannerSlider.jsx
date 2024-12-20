import { imgPath } from "@/components/helpers/functions-general";
import {
  ArrowRightIcon,
  ChartBarStacked,
  Clock,
  HandPlatter,
  Utensils,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

<<<<<<< HEAD
const BannerSlider = ({ result }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
      };
=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d

const BannerSlider = ({result}) => {
  


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
<<<<<<< HEAD
     <section className=''>
        <Slider {...settings}>
            {result?.data.map(( item, key ) => (
               <div className='w-full h-[calc(100vh-96.06px)] relative' key={key}>
               <img 
               src={`${imgPath}/${item.recipe_image}`}
                alt="" 
                className='w-full h-[110%] object-cover'
                />
   
                <div className='tint  w-full h-[110%] bg-black absolute top-0 left-0 bg-opacity-40'></div>
                  <div className='absolute top-1/2  left-[calc((100%-1200px)/2)] p-4 text-white max-w-[500px]
                  -translate-y-1/2'>
                    <h2 className='text-5xl'>{item.recipe_title}</h2>
                     <ul className='flex gap-5 mb-5'>
                       <li className='flex gap-2 items-center'> 
                           <Clock/> {item.recipe_prep_time} 
                       </li>
   
                       <li className='flex gap-2 items-center'> 
                           <Utensils/>  {item.recipe_serving} serving
                       </li>
   
                       <li className='flex gap-2 items-center'> 
                           <HandPlatter/> {item.recipe_category} 
                       </li>
                     </ul>
   
                     <p className='mb-5'>
                     {item.recipe_description} 
                     </p>
   
                     <Link to={`/recipe/single/${item.recipe_title.replaceAll(" ", "-")}`}
                     className='flex gap-3 group items-center hover:text-accent transition-all font-bold'>
                       View Full Recipe
                     <ArrowRight 
                     size={18}
                      className='opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-accent'/>
                     </Link>
                  </div>
               </div>
            ))}
               
           
          
        </Slider>
       
        
=======
    <section>
      <Slider {...settings}>
        {result?.data.map((item, key) => (
          <div className="w-full h-[calc(100vh-88px)] relative" key={key}>
            <img
              src={`${imgPath}/${item.recipe_image}`}
              alt=""
              className="w-full h-[110%] object-cover"
            />
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d

            <div className="tint w-full h-[110%] bg-black bg-opacity-60 absolute top-0"></div>
            <div
              className="absolute top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white max-w-[500px]
        -translate-y-1/2"
            >
              <h2 className="text-5xl">{item.recipe_title}</h2>
              <ul className="flex gap-5 mb-5">
                <li className="flex gap-2 items-center">
                  <Clock />
                  {item.recipe_prep_time}
                </li>
                <li className="flex gap-2 items-center">
                  <Utensils /> {item.recipe_serving} servings
                </li>
                <li className="flex gap-2 items-center">
                  <HandPlatter />
                  {item.recipe_category}
                </li>
              </ul>
              <p className="mb-5">{item.recipe_description}</p>

              <Link
                to={`/recipe/single/${item.recipe_title.replaceAll(" ", "-")}`}
                className="flex gap-3 items-center hover:text-orange group transition-all font-bold"
              >
                View Full Recipe{" "}
                <ArrowRightIcon
                  size={18}
                  className="opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-orange "
                />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;