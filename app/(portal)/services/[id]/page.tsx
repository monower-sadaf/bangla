// export const revalidate = 3600;
import Details from "../../component/ServiceDetails/Details";
import { getFeaturesByServiceId, getSingleService } from "../../_api";
const Home = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const service = await getSingleService(id).catch((err) => console.log(err));
  const feature = await getFeaturesByServiceId(id);
//   console.log("", id); 
//   const service = await getSingleService(id).catch((err) => console.log(err));
//   console.log("portal : ", service,"id",id);

  return (
    <Details
      // id={id}
      service={service}
      features={feature?.data}
    />
  );
};
export default Home;
