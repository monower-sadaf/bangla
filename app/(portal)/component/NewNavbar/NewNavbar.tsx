import { relative_image_path } from "@/helper/index";
import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import LogoImage from "@/public/images/logo.png";


const NewNavbar = async () => {
  

  return (
    <>
      <nav className=" w-full sticky top-0 left-0 z-50 flex justify-end pe-[75px] bg-white">
        
        <div className="bg-white flex items-center justify-between w-[50%]">
          <div className=" py-2">
            <Link
              href={{
                pathname: "/",
              }}
              shallow
              className="w-full flex items-center justify-center"
            >
              <Image
                src={LogoImage}
                className="w-[70px] h-[70px]"
                alt="logo"
                width={1000}
                height={1000}
                loading="eager"
              />
            </Link>
          </div>
          <li className="relative p-4 lg:px-8 flex items-center justify-end space-x-1 group">
            <a className="text-slate-800 hover:text-slate-900 cursor-pointer" >
              Get Services
            </a>

            <button className="shrink-0 p-1 transform transition-transform duration-300 group-hover:rotate-180">
              <svg
                className="w-3 h-3 fill-slate-500"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
              </svg>
            </button>

            <ul className="absolute top-[80%] left-0 mt-2 min-w-[160px] bg-white border border-slate-200 p-2 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
              <li>
                <a
                  className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                  href="#login"
                >
                  <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                    <span><CiUser className="w-4 h-4"/></span>
                  </div>
                  <span className="whitespace-nowrap">Sign In</span>
                </a>
              </li>

              <li>
                <a
                  className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                  href="#profile"
                >
                  <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                    <svg
                      className="fill-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                    >
                      <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM2 6a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4Z" />
                    </svg>
                  </div>
                  <span className="whitespace-nowrap">Our Services</span>
                </a>
              </li>
            </ul>
          </li>
        </div>
      </nav>
    </>
  );
};

export default NewNavbar;
