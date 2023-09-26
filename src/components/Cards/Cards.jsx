import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('donationCampaign.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div className='px-12 lg:max-w-7xl mx-auto mt-[250px] mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    cardData.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;