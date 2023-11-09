import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {recipeName, imageLink} = recipe;
    return (
        <div className='m-6'>
        <div className="shadow-xl rounded-b-xl image-full">
        <figure><img className='w-full h-[350px]' src={imageLink} alt="Recipe Image" /></figure>
        <div className="card-body">
          <h2 className="card-title">{recipeName}</h2>
        </div>
      </div>
        </div>
    );
};

export default Recipe;

Recipe.propTypes = {
    recipe: PropTypes.node,
   
}