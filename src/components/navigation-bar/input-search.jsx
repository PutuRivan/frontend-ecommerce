import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";

export const InputSeach = () => {
  const ref = useRef();
  const navigation = useNavigate();

  const handleSearch = (event) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigation(`/search/${keyword}`);
      ref.current.value = "";
    }
  };

  return (
    <>
      <div className="relative">
        <input
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs"
          ref={ref}
          onKeyDown={handleSearch}
        />
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <FaMagnifyingGlass size={20} fill="white" />
        </button>
      </div>
    </>
  );
};
