import Link from "next/link";
import { usePathname } from "next/navigation";


const Dropdown = ({title, subLinks}: any) => {
  const router = usePathname();
  const active = subLinks?.some((val: any, index: number, array: any) => {
    return val?.url === router
  })
 
    return (
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          className={`cursor-pointer flex items-center gap-2 lg:text-white ${ active && 'bg-green-600 p-1.5 rounded' }`}
        >
          <span>{title}</span>
          <span>
            <svg
              className="w-3 h-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box min-w-56"
        >
          {subLinks?.map((item: any, index: number) => (
            <li key={index} className="hover:text-red-500 rounded-2xl text-14">
              <Link href={item?.url}>{item?.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Dropdown;