export const revalidate = 3600;
export const metadata = {
  title: "বাংলা - Services",
  description: "Enhancement of Bangla Language Project",
};
import Card1 from "../../_components/Service/Card1/index";
import { ServicePage } from "../component/ServicePage/ServicePage";
import { getServices } from "../_api";
const Home = async () => {
  return (
    <>
      <ServicePage></ServicePage>
    </>
  );
};
export default Home;
