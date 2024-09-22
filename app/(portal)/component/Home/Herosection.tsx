import Slider from "@/app/_components/Slider";
import MarqueeNotice from "./Marquee";
import React from "react";
const Herosection = (): React.JSX.Element => {
  const sliders = [
    {
      image_url: "home_hero_banner1.jpg",
    },
    {
      image_url: "home_hero_banner2.jpg",
    },
    {
      image_url: "home_hero_banner3.jpg",
    },
  ];
    return (
      <>
        <Slider sliders={sliders} />
        {/* <MarqueeNotice items={"test notice"} /> */}
      </>
    );
};
export default Herosection;