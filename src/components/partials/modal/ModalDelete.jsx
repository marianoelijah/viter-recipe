import { queryData } from "@/components/helpers/queryData";
<<<<<<< HEAD

=======
import { setIsDelete } from "@/store/storeAction";
import { StoreContext } from "@/store/storeContext";
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
import {
  useMutation,
  useMutationState,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrFormClose } from "react-icons/gr";
import ButtonSpinner from "../spinner/ButtonSpinner";
import { MdDelete } from "react-icons/md";
<<<<<<< HEAD
import { StoreContext } from "@/components/store/storeContext";
=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d

const ModalDelete = ({ setIsDelete, mysqlApiDelete, queryKey, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsDelete(false));

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiDelete, "delete", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      dispatch(setIsDelete(false));

      if (!data.success) {
        // dispatch(setError(true));
        // dispatch(setMessage(data.error));
        console.log("May error!");
      } else {
        setIsDelete(false);
        console.log("Naysuu!");
        // dispatch(setSuccess(true));
        // dispatch(setMessage(successMsg));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      item: item,
    });
  };
  return (
    <div className=" fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[999]">
      <div
        className=" backdrop bg-black/80 h-full w-full absolute top-0 left-0 z-[-1]"
        onClick={handleClose}
      ></div>
      <div className="max-w-[450px] w-full bg-white rounded-md">
        <div className="flex items-center justify-between p-4  ">
          <div></div>
          <h2 className="translate-y-2">
            <MdDelete size={35} className="" />
          </h2>
          <button onClick={handleClose}>
            <GrFormClose size={25} />
          </button>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-sm">Are you sure you want to delete {item}?</h3>
          <div className="flex justify-center mt-5 gap-2">
            <button
              className="inline-block rounded-md w-full px-5 py-2 bg-[#9f1659] text-white"
              onClick={handleYes}
            >
              {mutation.isPending ? <ButtonSpinner /> : "Delete"}
            </button>
            <button
              className="inline-block rounded-md w-full px-5 py-2 bg-gray-200 text-gray-800"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ModalDelete;
=======
export default ModalDelete;
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
