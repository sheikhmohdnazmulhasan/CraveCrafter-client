import { BsGooglePlay, BsDoorOpen } from 'react-icons/bs';
import { AiFillApple } from 'react-icons/ai';
import { GoRocket } from 'react-icons/go';
import { BiLeaf} from 'react-icons/bi';

const Home = () => {

    return (
        <div className="w-11/12 mx-auto">
            {/* hero */}
            <div className="w-full block lg:flex">
                {/* text */}
                <div className="lg:w-1/2">
                    <h1 className="text-5xl mt-7 md:mt-10 lg:mt-20 font-mono">We Love <br />Delicious Foods!</h1>
                    <p className="mt-3 mr-4">Our platform streamlines operations, enhances customer experiences, and empowers chefs and restaurateurs with data-driven insights. Discover the future of restaurant management and dining excellence at CuisineCraft – where culinary expertise meets cutting-edge technology.</p>
                    <div className="mt-10 flex items-center gap-7">
                        <button className="btn bg-[#F34949] px-7 hover:bg-[#F34949] hover:scale-105 text-white rounded-full">Explore Menu</button>
                        <button className='hidden md:flex font-bold hover:text-red-600'><BsGooglePlay className='text-2xl hover:scale-110 transition-all hover:text-sky-400 mt-1 mr-2'/> <AiFillApple className='text-3xl hover:scale-110 transition-all hover:text-sky-300 mr-2'/><span className='mt-1'>Download App</span></button>
                    </div>
                    <div className="flex justify-center gap-10 mt-20 md:mr-10 lg:mr-16">
                        <div className=" flex hover:scale-105 transition-all hover:text-red-500 flex-col place-items-center border-r pr-10">
                            <GoRocket className='text-4xl font-light'/>
                            <p>Fast Delivery</p>
                        </div>
                        <div className=" flex hover:scale-105 transition-all hover:text-red-500 flex-col place-items-center">
                            <BiLeaf className='text-4xl'/>
                            <p>Fresh Food</p>
                        </div>
                        <div className=" flex hover:scale-105 transition-all hover:text-red-500 flex-col border-l pl-10 place-items-center">
                            <BsDoorOpen className='text-4xl'/>
                            <p>24/7 Open</p>
                        </div>
                    </div>
                </div>
                {/* img */}
                <div className="md:w-1/2 hidden lg:block">
                    <div className="h-[540px] carousel carousel-vertical">
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/2nWM6cf/hero-1.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/d78QkGt/hero-2.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/2sCWyVN/hero-3.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/2nWM6cf/hero-1.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/d78QkGt/hero-2.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/2sCWyVN/hero-3.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/2nWM6cf/hero-1.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/d78QkGt/hero-2.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/2sCWyVN/hero-3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;