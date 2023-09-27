import { useEffect, useState } from 'react';
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {

    const [cardData, setCardData] = useState([]);

    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch('donationCampaign.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div>
            <Banner setCategory={setCategory}></Banner>
            <Cards cardData={cardData} category={category}></Cards>
        </div>
    );
};

export default Home;