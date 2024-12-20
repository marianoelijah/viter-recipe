import React from "react";
import Headings from "../Headings";
import Footnote from "../Footnote";
<<<<<<< HEAD
import { imgPath } from "../../../helpers/functions-general";
import { Clock, Dot, HandPlatter, Utensils } from "lucide-react";
import { useParams } from "react-router-dom";
import useQueryData from "../../../custom-hook/useQueryData";
=======
import { imgPath } from "@/components/helpers/functions-general";
import { Clock, Dot, Filter, HandPlatter, Utensils } from "lucide-react";
import { useParams } from "react-router-dom";
import useQueryData from "@/components/custom-hook/useQueryData";
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
import Markdown from "react-markdown";

const Single = () => {
  const { slug } = useParams();
<<<<<<< HEAD

=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
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
<<<<<<< HEAD

=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
  const getSingleRecipe = () =>
    result?.data.filter(
      (item) => item.recipe_title === slug.replaceAll("-", " ")
    );

<<<<<<< HEAD
  return (
    <>
      <Headings />
      <section className="bg-dark text-white ">
        <div className="container">
          <div className="py-24">
=======
  console.log(getSingleRecipe());

  return (
    <>
      <Headings />
      <section className="bg-dark text-white">
        <div className="container">
          <div className="py-25">
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
            <img
              src={`${imgPath}/${
                getSingleRecipe() !== undefined &&
                getSingleRecipe()[0].recipe_image
              }`}
              alt=""
<<<<<<< HEAD
              className="h-[700px] w-full object-cover mb-5"
            />

            <div className="text-center mb-2">
=======
              className="h-[500px] w-full object-cover"
            />

            <div className="text-center py-10">
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
              <h1>
                {getSingleRecipe() !== undefined &&
                  getSingleRecipe()[0].recipe_title}
              </h1>
<<<<<<< HEAD
              <ul className="flex gap-5 mb-5 justify-center">
                <li className="flex gap-2 items-center">
                  <Clock />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_prep_time}
                </li>
                <li className="flex gap-2 items-center">
                  <Utensils />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_serving}
                </li>
                <li className="flex gap-2 items-center">
                  <HandPlatter />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_category}
                </li>
              </ul>
              <p className="max-w-[500px] mx-auto">
                {getSingleRecipe() !== undefined &&
                  getSingleRecipe()[0].recipe_description}
              </p>
              <div className="text-left grid grid-cols-[1.6fr_3fr] gap-10 max-w-[900px] mx-auto mt-10">
                <div>
                  <h4>Ingredients</h4>

=======

              <ul className="flex gap-5 mb-5 justify-center">
                <li className="flex gap-2 items-center">
                  <Clock />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_prep_time}
                </li>

                <li className="flex gap-2 items-center">
                  <Utensils />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_serving}{" "}
                  Servings
                </li>

                <li className="flex gap-2 items-center">
                  <HandPlatter />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_category}
                </li>
              </ul>

              <p className="max-w-[600px] mx-auto">
                {getSingleRecipe() !== undefined &&
                  getSingleRecipe()[0].recipe_description}
              </p>

              <div className="text-left md:grid md:grid-cols-[1.5fr,_3fr] gap-10 max-w-[900px] mx-auto mt-10">
                <div>
                  <h3>Ingredients</h3>
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
                  {getSingleRecipe() !== undefined &&
                    JSON.parse(getSingleRecipe()[0].recipe_ingredients).map(
                      (item, key) => (
                        <div className="flex gap-2" key={key}>
                          <Dot />
<<<<<<< HEAD
                          <ul className="grid grid-cols-[.3fr,_1fr] mb-2 basis-full">
=======
                          <ul className="grid grid-cols-[.6fr,_1fr] mb-2 basis-full">
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
                            <li>
                              <span>{item.amount}</span> {item.unit}
                            </li>
                            <li>{item.ingredients}</li>
                          </ul>
                        </div>
                      )
                    )}
                </div>
<<<<<<< HEAD
                <div className="wrapper-instruction">
                  <h5>Instructions</h5>
=======

                <div className="wrapper-instruction">
                  <h3>Instruction</h3>
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
                  <Markdown>
                    {getSingleRecipe() !== undefined &&
                      getSingleRecipe()[0].recipe_instruction}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footnote />
    </>
  );
};

export default Single;