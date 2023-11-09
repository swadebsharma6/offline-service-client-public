import Footer from "../../components/Footer/Footer";
import Community from "../Home/Home/Community/Community";
import AboutUs from "./AboutUs";
import Story from "./Story";
import Video from "./Video";


const About = () => {
    return (
        <section>
           <AboutUs></AboutUs>
           <Video></Video>
           <Story></Story>
           <Community></Community>
           <Footer></Footer>
        </section>
    );
};

export default About;