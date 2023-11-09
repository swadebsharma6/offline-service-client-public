import video from '../../assets/video/video (2160p).mp4';

const Video = () => {
    return (
        <div className='mb-14'>
        <video className="h-[500px] w-full rounded-lg" controls autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
        </div>
    );
};

export default Video;