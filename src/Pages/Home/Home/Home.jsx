import About from "./About/About";
import Banner from "./Banner/Banner";
import Community from "./Community/Community";
import Marque from "./Marque/Marque";


const Home = () => {
    
    return (
        <section>
             <Banner></Banner>
             <About></About>
             <Community></Community>
             <Marque></Marque>
            <h2>This is Home and user: </h2>
        </section>
    );
};

export default Home;