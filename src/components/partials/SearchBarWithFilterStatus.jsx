import React from "react";
import { FaList, FaSearch } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { setError, setIsSearch, setMessage } from "../store/storeAction";

const SearchBarWithFilterStatus = ({
  search,
  dispatch,
  store,
  result,
  isFetching,
  setOnSearch,
  onSearch,
  statusFilter,
  setStatusFilter,
  setIsFilter,
}) => {
  const handleChange = (e) => {
    if (e.target.value === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = search.current.value;

    if (val === " " || val === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
      dispatch(setError(true));
      dispatch(setMessage("Search keyword cannot be space only or blank."));
    } else {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(true));
    }
  };
  const handleChangeStatus = (e, setStatusFilter) => {
    search.current.value = "";
    setStatusFilter(e.target.value);
    setIsFilter(false);
    if (e.target.value !== "") {
      setIsFilter(true);
    }
  };

  const resultCount = result?.pages[0]?.total
    ? result?.pages[0]?.total
    : result?.pages[0]?.count;

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="search-box flex  items-center gap-4"
    >
      <div className="flex w-full mt-3 items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => handleChangeStatus(e, setStatusFilter)}
            className="bg-secondary border border-line rounded-md outline-none placeholder:opacity-30 placeholder:text-sm w-fit h-[34px] cursor-pointer"
          >
            <optgroup label="Select a Status">
              <option value="">All</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </optgroup>
          </select>
          <p className="leading-none flex items-center gap-2">
            <FaList /> <span>{isFetching ? "Searching..." : resultCount}</span>
          </p>
        </div>
        <div className="search relative">
          <input
            id="search"
            type="search"
            placeholder="Search here . . ."
            ref={search}
            onChange={(e) => handleChange(e)}
            className="p-1.5 bg-secondary border border-line rounded-md outline-none pl-8 placeholder:opacity-30 placeholder:text-sm w-[250px] block focus:border-accent"
          />
          <div className="search-icon absolute top-3 left-2">
            <MdOutlineSearch />
          </div>
        </div>
      </div>
      {/* {store.isSearch && (
        <p className="leading-none flex items-center gap-2">
          <FaList />{" "}
          <span>{isFetching ? "Searching..." : result?.pages[0].count}</span>
        </p>
      )} */}
    </form>
  );
};

<<<<<<< HEAD
export default SearchBarWithFilterStatus;
=======
export default SearchBarWithFilterStatus;
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
