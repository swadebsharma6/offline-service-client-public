import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id,serviceName,serviceImg, description,serviceProviderName,price} = service;
    
    return (
        <section className="my-3">
        <div className="relative flex w-full max-w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={serviceImg}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
          S.Provider Name : {serviceProviderName}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
           {serviceName}
          </h4>
          <p className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
           {price}
          </p>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
          <div className="text-end" >
          <Link to={`/details/${_id}`}><button className="btn btn-outline border-0 border-b-4 btn-primary ">View Details</button></Link>
          </div>
        </div>
      </div>
        </section>
    );
};

export default ServiceCard;