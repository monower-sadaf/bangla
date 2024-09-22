'use client'

import { useRef } from "react";

const Search = () => {
    const search = useRef();

    const ToggleSearch = () => {
        search.current.classList.toggle("hidden");
    }


    return (
      <>
        <button onClick={ToggleSearch}>
          <svg
            className="fill-white w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
        <div ref={search} className="absolute right-0 top-[2.3rem] lg:top-14 hidden">
          <form
            action="#"
            className="bg-white p-2 border border-primary rounded-md flex gap-1 items-center lg:mr-10 2xl:mr-0"
          >
            <label htmlFor="search">
              <svg
                className="fill-primary w-3 h-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </label>
            <input
              className="outline-none text-14"
              type="text"
              id="search"
              placeholder="অনুসন্ধান করুন"
            />
          </form>
        </div>
      </>
    );
};

export default Search;