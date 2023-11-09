import { Link } from "react-router-dom";
import './Community.css';
import Contact from "./Contact";
import Form from "./Form";


const Community = () => {
    return (
        <section className="mb-20 bg-gradient-to-r from-cyan-100 to-blue-200 rounded-md p-6">
        <div className=" flex justify-center items-center community-bg">
            <div className="text-end">
            <h3 className="text-4xl font-bold  mb-3">Lets Cooks Together &
            <br />
            <span className="text-5xl text-secondary"> CheckOut The Best Test </span>!</h3>
            <Link to='/login' className="text-center"><button className="btn btn-primary">Sign Up---</button></Link>
            </div>
        </div>  
        <Contact></Contact>
        <Form></Form>
        </section>
    );
};

export default Community;