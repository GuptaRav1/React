import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'
import useRestaurantCards from "../utils/useRestaurantCards"

const Body = () => {

    const { listOfRestaurants, filterredListOfRestaurants, setFilterredListOfRestaurants } = useRestaurantCards()
    const [searchText, setSearchText] = useState('')
    const online = useOnlineStatus()

    if (!online) {
        return <h1>You are offline</h1>
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='px-8'>
            <div className='flex py-9 justify-between'>
                <div className="seacr-bar">
                    <input className="px-2 border-solid border-2 border-green-700 py-2 w-60 rounded-lg mr-4" type="text" placeholder="Seach Here..." value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}>
                    </input>
                    <button className="px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg" onClick={() => {
                        newFilterredList = listOfRestaurants.
                            filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                        setFilterredListOfRestaurants(newFilterredList)
                    }}>search</button>
                </div>
                <button className="px-4 py-2 cursor-pointer bg-green-700 text-white rounded-lg" onClick={() => {
                    const newFilterredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                    setFilterredListOfRestaurants(newFilterredList)
                }}>Top Rated Restaurants</button>
            </div>

            <div className='res-container flex flex-wrap justify-between'>
                {
                    filterredListOfRestaurants.map((restaurant) => {
                        return (
                            <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body