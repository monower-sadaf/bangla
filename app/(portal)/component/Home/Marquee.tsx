
import Marquee from "react-fast-marquee";
type Props = {
  items: string;
};

const MarqueeNotice = ({ items }: Props) => {
  return (
    <div className="border-b container mx-auto mb-5">
      <div className="flex items-center px-4 py-2 ">
        <>
          <p className="text-15 lg:text-20 font-medium w-[20%] md:w-[7%] border-r text-notice text-primary">
            নোটিশ
          </p>

          <Marquee
            className="text-15 lg:text-20"
            speed={30}
            delay={1}
            pauseOnHover={true}
          >
            <div className="mr-4">{items}</div>
          </Marquee>
        </>
      </div>
    </div>
  );
};
export default MarqueeNotice;
