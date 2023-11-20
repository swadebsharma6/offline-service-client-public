import { Link } from 'react-router-dom';
import Img from '../../assets/Error/undraw_page_not_found_re_e9o6.svg';

const ErrorPage = () => {
    return (
        <div className='h-screen max-w-6xl mx-auto'>
            <img className='w-full' src={Img} alt="" />
            <div className='text-center mt-9'>
                <Link to='/'><button className='text-xl text-primary btn-link'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;