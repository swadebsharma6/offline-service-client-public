import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import DashNav from "./DashNav";


const DashBoard = () => {
    return (
        <section className="max-w-6xl mx-auto">
        <Header></Header>
            <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full md:col-span-3 border bg-blue-gray-200 md:h-[200px] rounded-xl">
            <DashNav></DashNav>
            </div>
            <div className="col-span-full md:col-span-9 border bg-brown-200">
            <Outlet></Outlet>
            </div>
            </div>
        </section>
    );
};

export default DashBoard;