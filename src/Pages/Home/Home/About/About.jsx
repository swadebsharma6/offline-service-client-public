import img from '../../../../assets/about.jpg';

const About = () => {
    return (
        <section className='mb-14'>
        <h3 className='text-primary text-2xl text-center  mb-4 font-bold underline'>About Us</h3>
        <div>
        <div className='md:flex items-center justify-center sm:py-3'>
        <div className='flex-1 ml-6'>
        
        <h4 className='text-2xl mb-4 font-bold text-primary'>Why your  need to</h4>
        <h2 className="text-xl md:text-5xl text-secondary font-bold text-center mb-6">Off-Recipe Book </h2>
        <p className="font-bold mb-5">Welcome to Offline Recipe Books, your culinary companion in the digital age. Our mission is simple: to bring the world of cooking to your fingertips, whether you are in the heart of the city or off the grid in the great outdoors.</p>
        <p className="font-bold mb-4">Offline Recipe Books was born out of a shared love for good food and the desire to overcome the limitations of unreliable internet connectivity. As a team of passionate home cooks, we have experienced the frustration of trying to access recipes while camping, traveling, or simply in areas with spotty Wi-Fi. This led us to create a solution that ensures you can explore and cook your favorite dishes, no matter where you are.</p>
        <div className='mt-4'>
            <p className='font-bold'>We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she</p>
        </div>
       </div>
        <div className='flex-1'>
          <img className='rounded-md' src={img} alt="About Image" />
        </div>
        </div>
     </div>
        </section>
    );
};

export default About;