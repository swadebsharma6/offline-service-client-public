import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleService from "./SingleService";


const PopularService = () => {

    const [services, setServices] = useState([]);

    const url = `https://offline-service-server-side.vercel.app/all-services`
    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data => setServices(data.slice(0,3)))
    },[url])
   
    return (
        <section className="mb-20">
        <div className="max-w-2xl text-center mx-auto mb-6">
        <h2 className="text-2xl font-bold mb-6 text-primary underline">Popular Services</h2>
        <p className="text-center font-bold">Welcome to OFF.Recipe Book, where we bring the joy of cooking to your fingertips, no matter where you are. Our mission is to make cooking and meal planning a delightful experience for food lovers of all levels.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            services.map(service => <SingleService
                key={service._id}
                service={service}
                ></SingleService>)
        }
        </div>
        <div className="text-end mt-6">
        <Link to='/services'>
        <button className="btn border-0 border-b-4 btn-outline  btn-secondary">See More Services</button>
        </Link>
        </div>
        </section>
    );
};

export default PopularService;