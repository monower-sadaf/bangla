export const revalidate = 3600;
export const metadata = {
  title: "বাংলা - Home",
  description: "Enhancement of Bangla Language Project",
  openGraph: {
    title: "বাংলা",
    description: "Enhancement of Bangla Language Project",
    url: "https://bangla-frontend.vercel.app/(portal)/",
    siteName: "বাংলা",
    images: {
      url: "https://bangla-frontend.vercel.app/logo.png",
      width: 800,
      height: 600,
    },
  },
};
import Herosection from "./component/Home/Herosection";
import Servicesection from "./component/Home/Servicesection";
import Statsection from "./component/Home/Statsection";
import Appandnews from "./component/Home/Appandnews";
// import CounterSection from "./component/CounterSection/CounterSection";
import NewServiceCard from "./component/NewServiceCard/NewServiceCard";
import UpdatedHeroSection from "./component/UpdatedHeroSection/UpdatedHeroSection";
const Home = (): JSX.Element => {
  return (
    <>
      {/* <Herosection /> */}
      <UpdatedHeroSection/>
      {/* <CounterSection/> */}
      <NewServiceCard/>
      {/* <Servicesection /> */}
      {/* <Statsection /> */}
      {/* <Appandnews /> */}
    </>
  );
};
export default Home;