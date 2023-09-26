import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {

    const [donate, setDonate] = useState([]);

    const { id } = useParams();

    const cards = useLoaderData();

    useEffect(() => {
        const getCard = cards?.find(card => card.id === parseInt(id))
        setDonate(getCard);
    }, [id, cards])


    const handleToast = (donate) => {
        const donationArray = [];
        const donateItems = JSON.parse(localStorage.getItem('donation'));

        if (!donateItems) {
            donationArray.push(donate);
            localStorage.setItem('donation', JSON.stringify(donationArray))
            return toast.success('Donate Successful!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            donationArray.push(...donateItems, donate)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            return toast.success('Donate Successful!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className='w-full px-12 lg:max-w-7xl mx-auto mt-16 mb-10'>
            <img src={donate.image} alt="" className='w-full  rounded-xl' />

            <div className='h-[150px] bg-black opacity-70 relative -mt-[150px] rounded-lg'>
                <div>
                    <button onClick={() => handleToast(donate)} style={{ backgroundColor: `${donate.textColor}` }} className={`text-white py-4 px-5 rounded-lg ml-10 mt-16`}>Donate ${donate.price}</button>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>



            <h3 className='text-4xl font-bold mb-5 mt-10'>{donate.title}</h3>
            <p>{donate.description}</p>
        </div>
    );
};

export default CardDetails;