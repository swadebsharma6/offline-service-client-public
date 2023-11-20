import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import DashHeader from '../../LayOut/DashHeader';
import { AuthContext } from '../../Providers/AuthProvider';
import banner from '../../assets/images/banner/banner-2.jpg';


const AddServices = () => {
    const {user} = useContext(AuthContext);

    const HandleAddService =(event)=>{
        event.preventDefault();
        const form = event.target;

        const serviceName = form.name.value;
        const serviceImage = form.image.value;
        const price = form.price.value;
        const area = form.area.value;
        const description = form.description.value;

        const service ={
            serviceName,
            serviceImage,
            userName :user.displayName,
            userEmail :user.email,
            price,
            area,
            description
        }

     
        fetch(`http://localhost:5000/news-services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Added Successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  form.reset();
            }
        })

    }

    return (
        <section className=''>
        <Helmet><title>OFF.R| DashBoard |AddProduct</title></Helmet>
         <DashHeader photo={banner} title={'ADD SERVICE'}></DashHeader>
           <div>
           <form onSubmit={HandleAddService} className="card-body">
         <div className='md:flex gap-4'>
         <div className="form-control flex-1">
         <label className="label">
           <span className="label-text">Service Name</span>
         </label>
         <input type="text" name='name' placeholder="Service Name" className="input input-bordered" required />
       </div>
       <div className="form-control flex-1">
         <label className="label">
           <span className="label-text">Photo Service</span>
         </label>
         <input type="url" name='image' placeholder="Photo" className="input input-bordered" required />
       </div>
         </div>
         <div className='md:flex gap-4'>
         <div className="form-control flex-1">
         <label className="label">
           <span className="label-text">User Name</span>
         </label>
         <input type="text" name='userName' defaultValue={user?.displayName} placeholder="Name" readOnly className="input input-bordered" required />
       </div>
       <div className="form-control flex-1">
         <label className="label">
           <span className="label-text">User Email</span>
         </label>
         <input type="email" name='email' defaultValue={user?.email} placeholder="Email" readOnly className="input input-bordered" required />
       </div>
         </div>
         <div className='md:flex gap-4'>
         <div className="form-control flex-1">
         <label className="label">
           <span className="label-text">Price</span>
         </label>
         <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
       </div>
       <div className="form-control flex-1">
         <label className="label">
           <span className="label-text">Service Area</span>
         </label>
         <input type="text" name='area' placeholder="Service Area" className="input input-bordered" required />
       </div>
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name='description' className="textarea textarea-info" placeholder="Description"></textarea>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Add Service</button>
        </div>
      </form>
           </div>
        </section>
    );
};

export default AddServices;