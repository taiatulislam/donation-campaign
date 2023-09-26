import bannerImage from '../../assets/images/banner.jpg'

const BannerBg = () => {
    return (
        <div className='absolute top-0 z-[-1] w-full' style={{
            backgroundImage: `url(${bannerImage})`,
            height: `500px`,
            backgroundPosition: `center`,
            opacity: `10%`
        }}>
        </div>
    );
};

export default BannerBg;