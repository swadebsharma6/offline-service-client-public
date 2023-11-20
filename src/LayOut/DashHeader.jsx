import { Typography } from "@material-tailwind/react";


const DashHeader = ({photo, title}) => {
    return (
        <section className='md:h-[250px]'>
        <div className="relative h-full w-full ">
        <img
          src={photo}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40 ">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-3xl lg:text-5xl"
            >
              {title}
            </Typography>
           
           
          </div>
        </div>
      </div>
        </section>
    );
};

export default DashHeader;