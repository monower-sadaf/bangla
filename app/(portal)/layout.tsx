import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { type ChildrenType } from "@/types/ChildrenType";
import NewNavbar from "./component/NewNavbar/NewNavbar";
const Layout = ({ children }: ChildrenType): JSX.Element => (
  <>
    {/* <Navbar /> */}
    <NewNavbar/>
    {children}
    <Footer />
  </>
);
export default Layout;