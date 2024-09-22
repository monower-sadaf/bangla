'use client';
import Link from "next/link";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";
import { type MenuType } from "@/types/MenuType";
const Menu = ({ menuLinks }: { menuLinks: MenuType[] }) => {
  const router = usePathname();
  return (
    <>
      <ul className="flex flex-col lg:flex-row gap-8 px-2 lg:items-center text-14 [&>li]:border-b [&>li]:border-gray-500 [&>li]:lg:border-none [&>li]:pb-1 [&>li]:lg:pb-0 [&>li>a]:text-black [&>li>a]:lg:text-white [&>li>a]:transition-all [&>li>a]:duration-500">
        {menuLinks?.map((item: any, index: number) => {
          return (
            <li key={index}>
              {item?.subLinks ? (
                <Dropdown title={item?.title} subLinks={item?.subLinks} />
              ) : (
                <Link
                  href={{ pathname: item?.url }}
                  shallow
                  className={`hover:text-red-400 ${
                    router == item?.url ? "bg-green-600 p-1.5 rounded" : ""
                  }`}
                >
                  {item?.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
