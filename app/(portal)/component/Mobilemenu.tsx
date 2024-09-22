'use client'

import { useState, useEffect } from "react";
import Menu from "./Menu";
import { getMenuLinks } from "../_api";

const Mobilemenu = () => {
    const [menuLinks, setMenuLinks] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      getMenuLinks().then((data) => setMenuLinks(data)).catch((err) => console.log(err));
    },[]);
    return (
      <>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <svg
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div
          className={`bg-white absolute top-[2.3rem] left-0 w-full transition-all duration-500 py-5 drop-shadow-2xl border border-gray-500 lg:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Menu menuLinks={menuLinks} />
        </div>
      </>
    );
};

export default Mobilemenu;