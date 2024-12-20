import { queryData } from "./queryData";

export const queryDataInfinite = (
  urlSearch,
  urlList,
  isSearch = false,
  searchData = {}
) => {
  return queryData(
    isSearch ? urlSearch : urlList,
    isSearch ? "post" : "get",
    searchData
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
