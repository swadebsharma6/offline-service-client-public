import { Button, Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import img1 from '../../../../assets/images/banner/banner-1.jpg';
import img2 from '../../../../assets/images/banner/banner-2.jpg';
import img3 from '../../../../assets/images/banner/banner-3.jpg';
import img4 from '../../../../assets/images/banner/banner-4.jpg';


const Banner = () => {
    return (
        <section className="h-[700px] mb-20">
        <Carousel className="rounded-xl">
        <div className="relative h-full w-full">
          <img
            src={img3}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h4"
                color="white"
                className="mb-4 text-xl md:text-xl lg:text-xl"
              >
                Cooking Classes
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-3xl lg:text-5xl"
              >
                The ART of <br />
                Cooking...
              </Typography>
              <Typography
                variant="h6"
                color="white"
                className="mb-12 opacity-80"
              >
              Meet your new kitchen sidekick! Enjoy access to a treasure trove of recipes on or offline. Delicious cooking at your fingertips, anytime, anywhere
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white" variant="text" className="btn-primary">
                  Explore
                </Button>
                <Link to='/login'> <Button size="lg" color="white" variant="text" className="btn-secondary rounded-full ">
                Book A Class 
              </Button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={img2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 text-xl md:text-xl lg:text-xl"
              >
                OFF.Recipe Book
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-3xl lg:text-5xl"
              >
              Effortless Recipe Search and Meal Planning
              </Typography>
              <Typography
                variant="p"
                color="white"
                className="mb-12 opacity-80"
              >
              No more struggling with spotty Wi-Fi in the kitchen. Our app ensures your recipes are always accessible, whether you are cooking in the heart of the city or the great outdoors.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg"  color="white" variant="text" className="btn-primary">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={img1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h4"
                color="white"
                className="mb-4 text-xl md:text-xl lg:text-xl"
              >
                Cooking Classes
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-3xl lg:text-5xl"
              >
                The ART of <br />
                Cooking...
              </Typography>
              <Typography
                variant="h6"
                color="white"
                className="mb-12 opacity-80"
              >
              Meet your new kitchen sidekick! Enjoy access to a treasure trove of recipes on or offline. Delicious cooking at your fingertips, anytime, anywhere
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white" variant="text" className="btn-primary">
                  Explore
                </Button>
                <Link to='/login'> <Button size="lg" color="white" variant="text" className="btn-secondary rounded-full ">
                Book A Class 
              </Button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={img4}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 text-xl md:text-xl lg:text-xl"
              >
                OFF.Recipe Book
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-3xl lg:text-5xl"
              >
              Effortless Recipe Search and Meal Planning
              </Typography>
              <Typography
                variant="p"
                color="white"
                className="mb-12 opacity-80"
              >
              No more struggling with spotty Wi-Fi in the kitchen. Our app ensures your recipes are always accessible, whether you are cooking in the heart of the city or the great outdoors.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg"  color="white" variant="text" className="btn-primary">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel> 
        </section>
    );
};

export default Banner;
