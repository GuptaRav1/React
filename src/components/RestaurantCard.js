import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
    } = resData?.info;

    return (
        <div class="relative flex flex-col mt-5 text-black bg-amber-400 shadow-md bg-clip-border rounded-xl w-96">
            <div
                class="relative h-64 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src={CDN_URL + cloudinaryImageId}
                    alt="card-image" />
            </div>
            <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {cuisines.join(', ')}
                </p>
            </div>
            <div class="p-6 pt-0">
                <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    {avgRating} stars
                </button>
            </div>
        </div>
    )
}

export default RestaurantCard