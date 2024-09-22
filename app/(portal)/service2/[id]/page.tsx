import ServiceDetailsContainer from "../../component/ServiceDetailsContainer/ServiceDetailsContainer";
const Home  = ({params: id}:any): JSX.Element => {
    /* api call here */
    return (
        <section className="min-h-screen container mx-auto px-2 lg:px-4">
            {/* <p>this is new service details page.</p> */}


            <ServiceDetailsContainer />
        </section>
    )
};

export default Home;