import { Link } from "react-router-dom";
import './Community.css';
import Contact from "./Contact";
import Form from "./Form";


const Community = () => {
    return (
        <section className="mb-20 rounded-md p-6">
        <div className=" flex justify-center items-center community-bg">
            <div className="text-end">
            <h3 className="text-4xl font-bold  mb-3">Lets Cooks Together &
            <br />
            <span > CheckOut The Best Test </span>!</h3>
            <Link to='/login' className="text-center"><button className="btn btn-primary">Sign Up---</button></Link>
            </div>
        </div>  
        <div className="bg-blue-gray-300 p-6 rounded-b-xl">
        <Contact></Contact>
        <Form></Form>
        </div>
        </section>
    );
};

export default Community;