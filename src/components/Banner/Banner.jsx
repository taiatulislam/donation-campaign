import bannerImage from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="w-full absolute top-0 z-0">
            <div style={{
                backgroundImage: `url(${bannerImage})`,
                height: `500px`,
                backgroundPosition: `center`,
                opacity: `10%`
            }}>
            </div>
            <div className='relative -mt-[300px] text-center'>
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