import PropTypes from 'prop-types';
import BannerBg from "../BannerBg/BannerBg";
import { useRef } from 'react';

const Banner = ({ setCategory }) => {

    const inputRef = useRef('');

    const handleSearch = () => {
        setCategory(inputRef.current.value);
    }

    return (
        <div>
            <BannerBg></BannerBg>
            <div className='text-center mt-24 relative z-[1]'>
                <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
                <div className="mt-10 ">
                    <input ref={inputRef} className="pl-4 py-[15px] w-72 lg:w-80 border-[#DEDEDE] border-[1px] rounded-l-lg focus" type="text" placeholder="Search here ..." />
                    <button className="bg-[#FF444A] text-white py-4 px-5 rounded-r-lg" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    setCategory: PropTypes.func
}

export default Banner;