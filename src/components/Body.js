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
        <div className='body'>
            <div className='filter'>
                <div className="seacr-bar">
                    <input type="text" placeholder="Seach Here..." value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}>
                    </input>
                    <button className="search-btn" onClick={() => {
                        newFilterredList = listOfRestaurants.
                            filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                        setFilterredListOfRestaurants(newFilterredList)
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const newFilterredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                    setFilterredListOfRestaurants(newFilterredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
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