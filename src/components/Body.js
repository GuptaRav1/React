import RestaurantCard, { withHighDeliveryTime } from "./RestaurantCard"
import { useContext, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'
import useRestaurantCards from "../utils/useRestaurantCards"
import UserContext from "../utils/UserContext"

const Body = () => {

    const { listOfRestaurants, filterredListOfRestaurants, setFilterredListOfRestaurants } = useRestaurantCards()
    const [searchText, setSearchText] = useState('')
    const online = useOnlineStatus()
    const RestaurantCardWithHighDeliveryTime = withHighDeliveryTime(RestaurantCard)

    const { loggedInUser, setUserName } = useContext(UserContext)


    if (!online) return <h1>You are offline</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='px-8'>
            <div className='flex justify-between py-9'>
                <div>
                    <input className="px-2 py-2 mr-4 border-2 border-green-700 border-solid rounded-lg w-60" data-testid='searchInput' type="text" placeholder="Seach Here..." value={searchText} onChange={e => setSearchText(e.target.value)} />
                    <button className="px-4 py-2 mr-2 text-white bg-green-700 rounded-lg cursor-pointer"
                        onClick={() => {
                            const newFilterredList = listOfRestaurants.
                                filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                            setFilterredListOfRestaurants(newFilterredList)
                        }}>
                        search
                    </button>
                </div>
                <div>
                    <label>
                        User Name:
                        <input className="px-2 py-2 mx-2 mr-4 border-2 border-green-700 border-solid rounded-lg w-60" value={loggedInUser} type="text" placeholder="Enter User Name" onChange={(e) => { setUserName(e.target.value) }} />
                    </label>
                </div>
                <button className="px-4 py-2 text-white bg-green-700 rounded-lg cursor-pointer" onClick={() => {
                    const newFilterredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                    setFilterredListOfRestaurants(newFilterredList)
                }}>Top Rated Restaurants</button>
            </div>

            <div className="grid grid-cols-1 gap-5 res-container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    filterredListOfRestaurants.map((restaurant) => {
                        return (
                            <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                                {
                                    restaurant.info.sla.deliveryTime > 30 ?
                                        <RestaurantCardWithHighDeliveryTime resData={restaurant} /> :
                                        <RestaurantCard resData={restaurant} />
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body