import errorImage from '../../assets/images/error.png'

export default function ErrorPage() {

    return (
        <div className="text-center mt-20">
            <img src={errorImage} alt="No Content" className='mx-auto' />
            <h1 className="text-4xl font-bold text-red-600 mb-5">Oops!</h1>
            <p className="text-3xl font-semibold">Sorry, No content available.</p>
        </div>
    );
}