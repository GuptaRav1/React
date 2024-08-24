import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
    } = resData?.info;

    const cuisinesString = cuisines.join(', ')

    return (
        <div data-testid='resCard' className="relative flex flex-col mb-5 text-black shadow-md bg-amber-400 bg-clip-border rounded-xl">
            <div className="relative h-48 mx-4 mt-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img src={CDN_URL + cloudinaryImageId} alt="card-image" />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name.length > 20 ? name.slice(0, 20) + '...' : name}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {cuisinesString.length > 30 ? cuisinesString.slice(0, 30) + '...' : cuisinesString}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    {avgRating} stars
                </button>
            </div>
        </div>
    )
}

export const withHighDeliveryTime = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute z-10 p-2 m-1 text-white bg-red-700 rounded-lg'>High Delivery Time</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard