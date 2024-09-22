export const revalidate = 3600;
export const metadata = {
  title: "বাংলা - Signup",
  description: "Enhancement of Bangla Language Project",
  openGraph: {
    title: "বাংলা - Signup",
    description: "Enhancement of Bangla Language Project",
    url: "https://bangla-frontend.vercel.app/(portal)/signup",
    siteName: "বাংলা",
    images: {
      url: "https://bangla-frontend.vercel.app/logo.png",
      width: 800,
      height: 600,
    },
  },
};

import Signup from "../component/Signup/Signup";
import { relative_image_path } from "@/helper";
import Image from "next/image";

const Home = async () => {
  return (
    <>
      <section className="min-h-[85vh] container mx-auto px-2 lg:px-4 flex flex-col-reverse lg:flex-row">
        <Image
          className="lg:w-[40%] lg:h-[85vh]"
          src={relative_image_path("login.png")}
          width={1000}
          height={1000}
          alt="Bangla"
          loading="eager"
        />
        <div className="lg:w-[60%] flex justify-center items-center pt-12 lg:pt-0">
          <Signup />
        </div>
      </section>
    </>
  );
};

export default Home;