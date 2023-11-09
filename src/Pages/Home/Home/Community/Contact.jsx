import { FcFeedback, FcPhone } from "react-icons/fc";
import { ImOffice } from "react-icons/im";


const Contact = () => {
    return (
        <section className="mt-4">
           <div className="grid md:grid-cols-3 gap-4">
             <div className="flex items-center p-4 border rounded-xl shadow-xl">
                <FcFeedback className="text-5xl mr-8"></FcFeedback>
                <div className="space-y-4">
                <h2 className="text-xl font-bold">Mail Address</h2>
                <p>offrecipebook@gmail.com</p>
                <p>999657856545</p>
                </div>
             </div>
             <div className="flex items-center p-4 border rounded-xl shadow-xl">
                <ImOffice className="text-5xl mr-8"></ImOffice>
                <div className="space-y-4">
                <h2 className="text-xl font-bold">Office Address</h2>
                <p>Off Recipe Book NetWork</p>
                <p>East Bourne Terrace, USA</p>
                </div>
             </div>
             <div className="flex items-center p-4 border rounded-xl shadow-xl">
                <FcPhone className="text-5xl mr-8"></FcPhone>
                <div className="space-y-4">
                <h2 className="text-xl font-bold">Phone Number</h2>
                <p>+880 123 4567 666</p>
                <p>+880 999 6578 863</p>
                </div>
             </div>
           </div> 
        </section>
    );
};

export default Contact;