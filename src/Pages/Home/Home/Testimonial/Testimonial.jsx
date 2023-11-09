import testiGroup from "../../../../assets/testi__group__1.png";

const Testimonial = () => {
    return (
        <section className=" bg-blue-gray-500 h-[550px] rounded-2xl  my-10 p-10 mb-20">
      <div className=" md:flex justify-center items-center">
      <div className="flex-1 ">
      <img className="w-full  " src={testiGroup} alt="" />
    </div>
        <div className="flex-1 text-right">
          <h4 className=" font-bold text-orange-500">OFF. RECIPE BOOK</h4>
          <h2 className="text-4xl my-5 font-bold ">
          Student FeedBack
            <br /> <span className="text-primary">offline Recipe book</span>
          </h2>

          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">   
                </div>
                <h3 className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
                  Food Tester and Reviewers
                </h3>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base-content  font-bold leading-relaxed text-inherit antialiased">
               What sets Offline Recipe Books apart is the offline functionality. Being able to access recipes without internet is a game-changer, especially when I am in areas with poor connectivity. It is the perfect companion for my culinary adventures. - [SWADEB SHARMA]
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
    );
};

export default Testimonial;