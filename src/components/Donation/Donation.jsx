import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
import ErrorPage from "../ErrorPage/ErrorPage";

const Donation = () => {

    const [donationItems, setDonationItems] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        (JSON.parse(localStorage.getItem('donation'))) !== null && setDonationItems((JSON.parse(localStorage.getItem('donation'))))
    }, [])

    const handleShowAll = () => {
        setDataLength(donationItems.length)
    }

    return (
        <div className="lg:max-w-7xl lg:mx-auto">
            <div className='mb-10 mt-20 mx-12 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    donationItems.length !== 0 && donationItems.slice(0, dataLength).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
            <div>
                {
                    donationItems.length === 0 && <ErrorPage></ErrorPage>
                }
            </div>
            <div className={donationItems.length === dataLength || donationItems.length < 5 ? `hidden` : 'flex justify-center'}>
                <button className="bg-green-600 text-white p-2 rounded-md" onClick={handleShowAll}>Show All</button>
            </div>
        </div>
    );
};

export default Donation;