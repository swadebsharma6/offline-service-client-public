import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import ExtraBanner from "../../../../components/ExtraBanner/ExtraBanner";

const ServiceDetails = () => {
  const service = useLoaderData();
  
  const {
    _id,
    serviceName,
    serviceImg,
    description,
    serviceProviderName,
    providerPhoto,
    price,
  } = service;
 

  

  return (
    <section className="mb-20">
    <Helmet><title>OFF.R| Service |Details</title></Helmet>
      <ExtraBanner
        photo={serviceImg}
        title={`Details of: ${serviceName}`}
      ></ExtraBanner>
      <div className="">
        <div className="hero md:h-[700px]  bg-brown-200 bg-opacity-40 rounded-b-3xl">
          <div className="hero-content flex-col lg:flex-row lg:px-20">
            <div> 
            <img src={serviceImg} className="max-w-lg rounded-lg shadow-2xl"/>
           </div>
            <div className="lg:mr-6">
              <h1 className="md:text-3xl font-bold">{serviceName}</h1>
              <p className="md:text-xl font-bold">{price}</p>
              <p className="py-6">
                {description}
              </p>
              <div className="flex items-center mb-6">
              <div className="avatar">
              <div className="w-14 mask mask-squircle">
                <img src={providerPhoto} />
              </div>
             </div>
            <h4 className="text-xl font-bold">{serviceProviderName}</h4>
            </div>
              <div className="text-end">
                <Link to={`/purchase/${_id}`}><button className="btn border-0 btn-outline border-b-4 btn-secondary">Book Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
