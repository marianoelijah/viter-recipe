<<<<<<< HEAD

import React from 'react'

import Headings from '../Headings'
import BannerSlider from './BannerSlider'
import LatestRecipe from './LatestRecipe'

import Footnote from '../Footnote'
import TopRating from './TopRating'
import useQueryData from '@/components/custom-hook/useQueryData'

const Homepage = () => {
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
  
  return (
    <>
       <Headings />
       <BannerSlider  result={result}/>
       <LatestRecipe  result={result}/>
       <TopRating />
       <Footnote />
      
=======
import useQueryData from '@/components/custom-hook/useQueryData';
import Footnote from '../Footnote';
import Headings from '../Headings';
import BannerSlider from './BannerSlider';
import LatestRecipe from './LatestRecipe';
import TopRating from './TopRating';

const Homepage = () => {
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
  return (
    <>
      <Headings />
      <BannerSlider result={result} />
      <LatestRecipe result={result} />
      <TopRating />
      <Footnote />
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
    </>
  );
}

export default Homepage