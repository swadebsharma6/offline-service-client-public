import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BookingTable from "./BookingTable";

const MySchedule = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://offline-service-server-side.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);
  // console.log(booking);

  return (
    <section className="p-6">
    <Helmet><title>OFF.R| DashBoard |My Schedule</title></Helmet>
      <div className="h-1/2 mb-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          My Bookings:
        </h2>
        <section>
          {/*table*/}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Service</th>
                <th>Date</th>
                <th>Price</th>
                <th>Email</th>
              </tr>
            </thead>
              <tbody>
              {
                booking.map((service, idx )=> <BookingTable
                    idx={idx}
                    key={service._id}
                    service={service}
                    ></BookingTable>)
            }
              </tbody>
              
            </table>
          </div>
        </section>
      </div>
      <div className="h-1/2 ">
        <h2 className="text-2xl font-bold text-primary text-center">My Pending Works:</h2>
        <div className="text-center">
        <ul className="steps steps-vertical">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
        </div>
      </div>
    </section>
  );
};

export default MySchedule;
