import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NoData from "../../components/NoData/NoData";
import ServiceBanner from "./Tools/ServiceBanner";
import ServiceCard from "./Tools/ServiceCard";


const Services = () => {
    const [filterServices, setFilterServices] = useState([]);
    const loadedService = useLoaderData();

    const services =[...loadedService];

    const handleSearching = () =>{
        const value = document.getElementById('search').value;
        // console.log(value);
        const filteredServices = services.filter(service => service.serviceName.toLowerCase().includes(value.toLowerCase()));
        setFilterServices(filteredServices)
    } 
    console.log('filtered service', filterServices)

    return (
        <section>
            <ServiceBanner handleSearching={handleSearching}></ServiceBanner>
            <div>
            {
                filterServices.length === 0 &&  <NoData></NoData>
            }
                {
                    filterServices.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Services;