'use client'

import { useRef } from "react";
import Link from "next/link";


const Login = () => {
    const loginRef: any = useRef();

    const HandleLoginPanel = () => {
        loginRef.current.classList.toggle("hidden");
    }

    return (
      <>
        <button onClick={HandleLoginPanel} className="text-white flex items-center gap-2 text-14">
          <span>
            <svg
              className="fill-white w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
            </svg>
          </span>
          <span>লগইন</span>
        </button>
        <div ref={loginRef} className="absolute right-4 top-[2.3rem] lg:top-[3.8rem] bg-white flex flex-col gap-2 p-4 rounded-b-md drop-shadow-lg [&>a]:text-12 lg:[&>a]:text-15 [&>a]:text-primary [&>a]:border [&>a]:border-primary [&>a]:rounded-md [&>a]:p-2 [&>a]:flex [&>a]:items-center [&>a]:gap-2 hidden">
          <Link href={"/signin"}>
            <span>
              <svg
                className="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
              </svg>
            </span>
            <span>নাগরিক</span>
          </Link>
          <Link href={"#"}>
            <span>
              <svg
                className="fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
              </svg>
            </span>
            <span>প্রশাসনিক</span>
          </Link>
        </div>
      </>
    );
};

export default Login;