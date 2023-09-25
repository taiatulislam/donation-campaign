import BannerBg from "../BannerBg/BannerBg";


const Banner = () => {
    return (
        <div>
            <BannerBg></BannerBg>
            <div className='text-center mt-24 relative z-[1]'>
                <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
                <div className="mt-10 ">
                    <input className="pl-4 py-[15px] w-80 border-[#DEDEDE] border-[1px] rounded-l-lg focus" type="text" placeholder="Search here ..." />
                    <button className="bg-[#FF444A] text-white py-4 px-5 rounded-r-lg">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;