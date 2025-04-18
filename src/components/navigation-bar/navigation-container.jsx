import React from "react";
import { InputSeach } from "./input-search";
import { DropdownLink } from "./dropdown-link";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm border-b border-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Ecommerce</Link>
      </div>
      <div className="flex gap-2">
        <InputSeach />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <DropdownLink />
          </ul>
        </div>
      </div>
    </div>
  );
};
