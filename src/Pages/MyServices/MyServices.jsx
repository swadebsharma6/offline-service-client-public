import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DashHeader from "../../LayOut/DashHeader";
import banner from '../../assets/images/banner/banner-2.jpg';
import NewService from "./Tools/NewService/NewService";

const MyServices = () => {

  const [newServices, setNewServices] = useState([]);

  useEffect(()=>{
    const url = `http://localhost:5000/news-services`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      setNewServices(data)
    })
  },[]);

  
  const handleDeleteService = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/news-services/${id}`,{
            method: "DELETE"
          })
          .then(res =>res.json())
          .then(data =>{
            console.log(data)
            if(data.deletedCount >0){
                 Swal.fire({
                 title: "Deleted!",
                  text: "Your file has deleted Successfully.",
                   icon: "success"
                });
                const remaining = newServices.filter(service => service._id !== id);
                setNewServices(remaining);
            }
          })
        }
      });
}

    return (
        <section>
        <DashHeader photo={banner} title={'Manage Service'}></DashHeader>
          <div>
          
            {
              newServices.map(service => <NewService
                key={service._id}
                service={service}
                handleDeleteService={handleDeleteService}
                ></NewService> )
            }
          </div>
        </section>
    );
};

export default MyServices;