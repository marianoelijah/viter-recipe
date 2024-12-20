import { useQuery } from "@tanstack/react-query";
import { queryData } from "../helpers/queryData";

<<<<<<< HEAD
=======

>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
// Queries hook
const useQueryData = (endpoint, method, key = "", fd = {}, id = null) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: () => queryData(endpoint, method, fd),

<<<<<<< HEAD
=======

>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
    // retry: false,
    // refetchOnWindowFocus: true,
    // cacheTime: 200,
  });
};

<<<<<<< HEAD
export default useQueryData;
=======

export default useQueryData;
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
