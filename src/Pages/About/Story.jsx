import storyImg from '../../assets/images/banner/recipe.jpg';

const Story = () => {
    return (
        <section className="mb-20">
            <div className=" md:flex">
            <div>
            <h4 className="text-4xl font-bold mr-6">Our Story</h4>
           </div>
             <div className="md:flex flex-1 gap-4">
                <p className="flex-1 font-bold text-lg">Offline Recipe Books was born out of a shared love for good food and the desire to overcome the limitations of unreliable internet connectivity. As a team of passionate home cooks, we have experienced the frustration of trying to access recipes while camping, traveling, or simply in areas with spotty Wi-Fi. This led us to create a solution that ensures you can explore and cook your favorite dishes, no matter where you are.</p>
                <p className="flex-1 font-bold text-lg">Features and Benefits:
                With Offline Recipe Books, you can:
                
                    Access a diverse collection of mouthwatering recipes, even when offline.
                     Personalize your digital cookbook by saving and organizing your favorite recipes.
                      Search for recipes by keywords, categories, and ingredients with ease.
                    Follow step-by-step instructions and cooking tips from experts and fellow food enthusiasts
                      Create shopping lists and meal plans to streamline your cooking experience.
                
                </p>
             </div>
            </div>
            <div>
              <img className='rounded-full' src={storyImg} alt="" />
            </div>
        </section>
    );
};

export default Story;