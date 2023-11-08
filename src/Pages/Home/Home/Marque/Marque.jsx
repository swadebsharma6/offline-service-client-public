import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <section className="rounded-lg bg-base-100 my-8">
        <Marquee pauseOnHover={true}  speed={100}>      
          <div className="h-32 p-10 border border-b-4 rounded-xl border-purple-400 mr-10">
           <div className="text-center">
           <h3 className="text-2xl font-bold">250</h3>
           <p className="font-bold">In person classes</p>
           </div>
          </div>
          <div className="h-32 p-10 border border-b-4 rounded-xl border-purple-300 mr-10">
          <div className="text-center">
          <h3 className="text-2xl font-bold">50+</h3>
          <p className="font-bold">Online classes</p>
          </div>
          </div>
          <div className="h-32 p-10 border border-b-4 rounded-xl border-purple-300 mr-10">
          <div className="text-center">
          <h3 className="text-2xl font-bold">50+</h3>
          <p className="font-bold">Online classes</p>
          </div>
          </div>
          <div className="h-32 p-10 border border-b-4 rounded-xl border-purple-400 mr-10">
          <div className="text-center">
           <h3 className="text-2xl font-bold">48 +</h3>
           <p className="font-bold">Dishes to Choose</p>
           </div>
          </div>
          <div className="h-32 p-10 border border-b-4 rounded-xl border-purple-400 mr-10">
          <div className="text-center">
          <h3 className="text-2xl font-bold">300k</h3>
          <p className="font-bold">Students</p>
          </div>
          </div>
          <div className="h-32 p-10 border border-b-4 rounded-xl border-purple-400 mr-10">
          <div className="text-center">
          <h3 className="text-2xl font-bold">300k</h3>
          <p className="font-bold">Students</p>
          </div>
          </div>
          <div className="h-32 p-10 border border-b-4 rounded-xl border-purple-400 mr-10">
          <div className="text-center">
          <h3 className="text-2xl font-bold">1.2 M</h3>
          <p className="font-bold">Subscriber</p>
          </div>
          </div>
       
      </Marquee> 
        </section>
    );
};

export default Marque;