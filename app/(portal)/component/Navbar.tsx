import {
  dDate,
  dateName,
  convertEnglishDateToBangla,
  relative_image_path,
} from "../../../helper";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
const Mobilemenu = dynamic(() => import("./Mobilemenu"), {
  ssr: false,
});
import Search from "./Search";
import Login from "./Login";
import { getMenuLinks } from "../_api";

const Navbar = async () => {
  const menuLinks = await getMenuLinks().catch((err) => console.log(err));
  
  
    return (
      <>
        <div className="flex items-center justify-center p-3">
          <svg
            className="mr-1 fill-primary w-5 h-5"
            width={24}
            height={25}
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.75 3.5H19.5V2H18V3.5H6V2H4.5V3.5H2.25L1.5 4.25V22.25L2.25 23H21.75L22.5 22.25V4.25L21.75 3.5ZM21 21.5H3V8H21V21.5ZM21 6.5H3V5H21V6.5ZM6 12.5H4.5V14H6V12.5ZM4.5 15.5H6V17H4.5V15.5ZM6 18.5H4.5V20H6V18.5ZM9 12.5H10.5V14H9V12.5ZM10.5 15.5H9V17H10.5V15.5ZM9 18.5H10.5V20H9V18.5ZM10.5 9.5H9V11H10.5V9.5ZM13.5 12.5H15V14H13.5V12.5ZM15 15.5H13.5V17H15V15.5ZM13.5 18.5H15V20H13.5V18.5ZM15 9.5H13.5V11H15V9.5ZM18 12.5H19.5V14H18V12.5ZM19.5 15.5H18V17H19.5V15.5ZM18 9.5H19.5V11H18V9.5Z"
            />
          </svg>
          <p className="text-primary text-12">
            {dDate(new Date())} / {dateName(new Date())}{" "}
            {convertEnglishDateToBangla(new Date())}
          </p>
        </div>
        <nav className="sticky w-full top-0 z-50">
          <div className="bg-primary ">
            <div className="container mx-auto p-2 lg:p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link
                  href={{
                    pathname: "/",
                  }}
                  shallow
                  className="w-[50%] lg:w-full"
                >
                  <Image
                    src={relative_image_path("logo.png")}
                    className="w-[7.375em] h-[2.5em]"
                    alt="logo"
                    width={1000}
                    height={1000}
                    loading="eager"
                  />
                </Link>
              </div>
              <div className="hidden lg:block">
                <Menu menuLinks={menuLinks} />
              </div>
              <div className="flex items-center gap-4">
                <Search />
                <Login />
              </div>
              <Mobilemenu />
            </div>
          </div>
        </nav>
      </>
    );
};

export default Navbar;