import { useLoaderData } from "react-router-dom";


const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <h2>All Services comes here</h2>
        </div>
    );
};

export default Services;