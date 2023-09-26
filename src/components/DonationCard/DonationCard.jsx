import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {

    const { image, category, title, cardBg, buttonBg, textColor, price } = donation;

    return (

        <div className='flex flex-col md:flex-row rounded-lg pb-3 md:pb-0' style={{ backgroundColor: cardBg }}>
            <div>
                <img src={image} alt="" className='mx-auto rounded-b-lg' />
            </div>
            <div className='ml-6 mt-6 m'>
                <span style={{ backgroundColor: buttonBg, color: textColor }} className='p-2 text-sm font-medium rounded-md'>{category}</span>
                <h2 className='text-xl mt-2'>{title}</h2>
                <h3 style={{ color: textColor }}>${price}</h3>
                <button style={{ backgroundColor: textColor }} className='text-white p-2 rounded-lg mt-5'>View Details</button>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object
}

export default DonationCard;