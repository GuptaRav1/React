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
            <div className='flex py-9 justify-between'>
                <div>
                    <input className="px-2 border-solid border-2 border-green-700 py-2 w-60 rounded-lg mr-4" type="text" placeholder="Seach Here..." value={searchText} onChange={e => setSearchText(e.target.value)} />
                    <button className="px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg"
                        onClick={() => {
                            newFilterredList = listOfRestaurants.
                                filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                            setFilterredListOfRestaurants(newFilterredList)
                        }}>
                        search
                    </button>
                </div>
                <div>
                    <label>
                        User Name:
                        <input className="px-2 mx-2 border-solid border-2 border-green-700 py-2 w-60 rounded-lg mr-4" value={loggedInUser} type="text" placeholder="Enter User Name" onChange={(e) => { setUserName(e.target.value) }} />
                    </label>
                </div>
                <button className="px-4 py-2 cursor-pointer bg-green-700 text-white rounded-lg" onClick={() => {
                    const newFilterredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                    setFilterredListOfRestaurants(newFilterredList)
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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