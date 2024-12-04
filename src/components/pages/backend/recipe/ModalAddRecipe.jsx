import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, Minus, Plus, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/storeAction";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { imgPath } from "@/components/helpers/functions-general";
const ModalAddRecipe = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();


  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v2/upload-photo");


  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/recipe/${itemEdit.recipe_aid}` : `/v2/recipe`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["recipe"],
      });


      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });


  const handleClose = () => dispatch(setIsAdd(false));



  const initVal = {
    recipe_title: itemEdit ? itemEdit.recipe_title : "",
    recipe_category: itemEdit ? itemEdit.recipe_category : "",
    recipe_level: itemEdit ? itemEdit.recipe_level : "",
    recipe_serving: itemEdit ? itemEdit.recipe_serving : "",
    recipe_prep_time: itemEdit ? itemEdit.recipe_prep_time : "",
    recipe_description: itemEdit ? itemEdit.recipe_description : "",
    recipe_instruction: itemEdit ? itemEdit.recipe_instruction : "",


    recipe_title_old: itemEdit ? itemEdit.recipe_title : "",


    recipe_ingredients: itemEdit
      ? JSON.parse(itemEdit.recipe_ingredients)
      : [{ ingredients: "", amount: "", unit: "" }],
  };
  const yupSchema = Yup.object({
    recipe_title: Yup.string().required("required"),
    recipe_category: Yup.string().required("required"),
    recipe_level: Yup.string().required("required"),
    recipe_serving: Yup.string().required("required"),
    recipe_prep_time: Yup.string().required("required"),
    recipe_description: Yup.string().required("required"),
    recipe_instruction: Yup.string().required("required"),
  });


  return (
    <ModalWrapper>
      <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1300px] w-full rounded-md border border-line">
        <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2 ">
          <span className="text-body">Add Recipe</span>
          <button className="ml-auto" onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-4 ">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate({
                ...values,
                recipe_image:
                  (itemEdit?.recipe_image === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && itemEdit?.recipe_image !== photo?.name)
                    ? photo?.name || ""
                    : itemEdit?.recipe_image || "",
              });
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="grid grid-cols-[1fr,_1.5fr,_1.5fr] gap-5">
                    <div className="info">
                      <h3 className="mb-0">Information</h3>
                      <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                        {itemEdit === null && photo === null ? (
                          <div className="w-full  rounded-md flex justify-center items-center flex-col h-full">
                            <ImagePlusIcon
                              size={50}
                              strokeWidth={1}
                              className="opacity-20 group-hover:opacity-50 transition-opacity"
                            />
                            <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                              Upload Photo
                            </small>
                          </div>
                        ) : (
                          <img
                            src={
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : imgPath + "/" + itemEdit?.recipe_image // check db
                            }
                            alt="Recipe photo"
                            className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${
                              mutation.isPending
                                ? "opacity-40 pointer-events-none"
                                : ""
                            }`}
                          />
                        )}


                        <InputPhotoUpload
                          name="photo"
                          type="file"
                          id="photo"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${
                            mutation.isPending ? "pointer-events-none" : ""
                          }`}
                        />
                      </div>
                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="recipe_title"
                        />
                      </div>


                      <div className="input-wrap">
                        <InputSelect label="Category" name="recipe_category">
                          <option value="" hidden>
                            Select Category
                          </option>
                          <option value="chicken">Chicken</option>
                          <option value="beef">Beef</option>
                          <option value="pasta">Pasta</option>
                        </InputSelect>
                      </div>
                      <div className="input-wrap">
                        <InputSelect label="Level" name="recipe_level">
                          <option value="" hidden>
                            Select Level
                          </option>
                          <option value="easy">Easy</option>
                          <option value="moderate">Moderate</option>
                          <option value="difficult">Difficult</option>
                        </InputSelect>
                      </div>


                      <div className="input-wrap">
                        <InputText
                          label="Serving"
                          type="text"
                          name="recipe_serving"
                        />
                      </div>


                      <div className="input-wrap">
                        <InputText
                          label="Prep Time"
                          type="text"
                          name="recipe_prep_time"
                        />
                      </div>
                    </div>


                    <div className="ingredient">
                      <FieldArray
                        name="recipe_ingredients"
                        render={({ push, remove }) => (
                          <div className="input-wrap">
                            <div className="flex justify-between items-center">
                              <h3 className="mb-0">Ingredients</h3>
                              <button
                                className="bg-alert  p-1 px-2 text-sm rounded-md"
                                type="button"
                                onClick={() =>
                                  push({
                                    ingredients: "",
                                    amount: "",
                                    unit: "",
                                  })
                                }
                              >
                                Add
                              </button>
                            </div>


                            <div className="overflow-y-auto custom-scroll max-h-[500px] h-full pr-2">
                              {props.values.recipe_ingredients.map(
                                (ingredients, index) => (
                                  <div
                                    className="grid grid-cols-[1fr,_.3fr,_.8fr_.2fr] gap-3 mt-3"
                                    key={index}
                                  >
                                    <div>
                                      <label htmlFor="">ingredients</label>
                                      <Field
                                        name={`recipe_ingredients[${index}].ingredients`}
                                      />
                                    </div>


                                    <div>
                                      <label htmlFor="">Amount</label>
                                      <Field
                                        name={`recipe_ingredients[${index}].amount`}
                                      />
                                    </div>


                                    <div>
                                      <label htmlFor="">Unit</label>
                                      <Field
                                        name={`recipe_ingredients[${index}].unit`}
                                      />
                                    </div>


                                    <button
                                      className="size-[33px] bg-accent text-white rounded-md center-all self-end"
                                      onClick={() => remove(index)}
                                    >
                                      <Minus />
                                    </button>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      />
                    </div> 


                    <div className="instruction">
                      <div className="input-wrap">
                        <h3>Description</h3>
                        <InputTextArea
                          label="Description"
                          name="recipe_description"
                          className="overflow-y-auto custom-scroll p-2 !h-[120px] outline-none  w-full rounded-md bg-primary text-body border border-line resize-none mb-5"
                        />
                      </div>
                      <div className="input-wrap">
                        <h3>Instruction</h3>
                        <InputTextArea
                          label="Instruction"
                          name="recipe_instruction"
                          className="overflow-y-auto custom-scroll p-2 !h-[300px]  outline-none  w-full rounded-md bg-primary text-body border border-line resize-none"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="flex justify-end gap-3 mt-5">
                    <button className="btn btn-accent" type="submit">
                      {mutation.isPending && <SpinnerButton />}
                      {itemEdit ? "Save" : "Add"}
                    </button>
                    <button
                      className="btn btn-cancel"
                      onClick={handleClose}
                      type="reset"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};


export default ModalAddRecipe;





