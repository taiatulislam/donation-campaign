import { useEffect, useState } from 'react'

const Cards = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('donationCampaign.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div>
            <p>Data: {cardData.length}</p>
        </div>
    );
};

export default Cards;