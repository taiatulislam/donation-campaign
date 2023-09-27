import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = ({ cardData, category }) => {

    return (
        <div className='px-12 lg:max-w-7xl mx-auto mt-[250px] mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    category !== '' ? cardData.filter(card => card.category === category).map(card => <Card key={card.id} card={card}></Card>) : cardData.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    cardData: PropTypes.array,
    category: PropTypes.string
}

export default Cards;