import heroImage from '../assets/images/hero-image.png';

const Hero = () => {
    return (
        <div className="bg-purple-200 relative h-[700px]">
            <div className='max-w-7xl mx-auto flex flex-col sm:flex-row md:flex-row items-center pt-6'>
                <div className='pt-25'>
                <h1 className='text-[80px] font-extrabold leading-25'>One Step <br />Closer To Your <br /><span className='text-purple-600 leading-[100px]'>Dream Job</span></h1>
                <p className='text-[18px] font-medium mt-6 mb-6'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <div className=''>
                <img className='bottom-0 right-0 absolute' src={heroImage} alt="user image" />
            </div>
            </div>
        </div>
    );
};

export default Hero;