import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({ card }) => {

    const { id, image, category, title, cardBg, buttonBg, textColor } = card;

    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: cardBg, color: textColor }} className='rounded-lg pb-3' onClick={() => navigate(`/CardDetails/${id}`)}>
            <img src={image} alt="category image" className='mb-4 w-full h-[170px] rounded-lg' />
            <div className='pl-4'>
                <span style={{ backgroundColor: buttonBg }} className='p-2 text-sm font-medium rounded-md'>{category}</span>
                <h4 className='mt-2 text-[20px] font-medium'>{title}</h4>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;