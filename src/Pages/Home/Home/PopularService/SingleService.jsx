import { Link } from "react-router-dom";


const SingleService = ({service}) => {
    const {_id,serviceName,serviceImg, description,serviceProviderName,providerPhoto,price} = service;
    return (
        <section>
        <div className="w-full  bg-base-100 shadow-xl border border-deep-orange-300 rounded-b-2xl">
        <figure><img className="h-[200px] w-full" src={serviceImg} alt="Shoes" /></figure>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={providerPhoto} alt="Tailwind-CSS-Avatar-component" />
            </div>
            </div>
            <h5 className="ml-3 text-lg font-semibold">{serviceProviderName}</h5>
            </div>
          <h4 className="text-yellow-800 font-bold">{price}</h4>
          </div>
          <div>
          <h2 className="text-xl font-bold">{serviceName}</h2>
          
          
          <p>{description.slice(0,130)}....<span className="text-primary font-medium">Read More</span> </p>
          <div className="card-actions mt-4">
            <Link to={`/details/${_id}`}><button className="btn btn-primary btn-block">View Details</button></Link>
          </div>
        </div>
        </div>
      </div>
        </section>
    );
};

export default SingleService;