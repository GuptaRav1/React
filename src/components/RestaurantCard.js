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
        <div className='res-card'>
            <img src={CDN_URL + cloudinaryImageId} alt='res-logo' />
            <h3>{name}</h3>
            <h5 className='food-type'>{cuisines.join(', ')}</h5>
            <h5 className='res-rating'>{avgRating} stars</h5>
            <h5 className='delivery-time'>{sla.deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard