export const revalidate = 3600;

export const metadata = {
  title: "বাংলা - Forgot Password",
  description: "Enhancement of Bangla Language Project",
  /* icons: {
    icon: "/favicon.ico",
  }, */
}

import dynamic from 'next/dynamic';
const Forgotpass = dynamic(() => import('../component/Forgotpass/Forgotpass'));
import Image from 'next/image';
import { relative_image_path } from '@/helper';


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
          loading='eager'
        />
        <div className="lg:w-[60%] flex justify-center items-center pt-12 lg:pt-0">
          <Forgotpass />
        </div>
      </section>
    </>
  );
};

export default Home;