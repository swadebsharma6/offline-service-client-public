import { Link } from "react-router-dom";


const NewService = ({service, handleDeleteService}) => {

    const {_id, serviceName,serviceImage, price,userEmail, userName, area } = service;
    // console.log(service)

    return (
        <section className="p-5">
        <div className=" md:flex bg-base-100 my-5">
        <div className="flex-1"><img className="h-[300px] w-full" src={serviceImage} alt="Movie"/></div>
        <div className="card-body flex-1">
          <div className="flex justify-between">
          <h2 className="card-title text-purple-500">{serviceName}</h2>
          <h2 className="card-title text-purple-500">$ {price}</h2>
          </div>
          <div>
          <h4 className="font-bold">{userName}</h4>
          <h4 className=""> {userEmail}</h4>
          </div>
          <p className="font-bold">Location: {area}</p>
          <div className="text-end">
             <Link to={`/dashboard/update/${_id}`}><button className="btn btn-primary mr-8">Update</button></Link>
            <button onClick={()=>handleDeleteService(_id)} className="btn btn-warning">Delete</button>
          </div>
        </div>
      </div>
        </section>
    );
};

export default NewService;

