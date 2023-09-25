import PropTypes from 'prop-types';

const Card = ({ card }) => {

    const { image, category, title, cardBg, buttonBg, textColor } = card;

    return (
        <div style={{ backgroundColor: cardBg, color: textColor }} className={`rounded-lg pb-3`}>
            <img src={image} alt="category image" className='mb-4' />
            <div className='pl-4'>
                <span style={{ backgroundColor: buttonBg }} className={`p-2 text-sm font-medium rounded-md`}>{category}</span>
                <h4 className='mt-2 text-[20px] font-medium'>{title}</h4>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;