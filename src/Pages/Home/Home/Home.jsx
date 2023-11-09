import Footer from "../../../components/Footer/Footer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Community from "./Community/Community";
import Marque from "./Marque/Marque";
import SampleRecipe from "./SampleRecipe/SampleRecipe";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    
    return (
        <section>
             <Banner></Banner>
             <About></About>
             <SampleRecipe></SampleRecipe>
             <Community></Community>
             <Marque></Marque>
             <Testimonial></Testimonial>
             <Footer></Footer>
        </section>
    );
};

export default Home;