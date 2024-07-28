import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { API_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filterredListOfRestaurants, setFilterredListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let tempListOfRestaurants
        const data = await fetch(API_URL)
        const json = await data.json()
        tempListOfRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurants(tempListOfRestaurants)
        setFilterredListOfRestaurants(tempListOfRestaurants)
    }

    // if (listOfRestaurants.length === 0) {
    //     return (
    //         // <div className='shimmer-container'>
    //         <div className='shimmer-container'>
    //             <Shimmer />
    //             <Shimmer />
    //             <Shimmer />
    //             <Shimmer />
    //             <Shimmer />
    //             <Shimmer />
    //             <Shimmer />
    //             <Shimmer />
    //         </div>
    //     )
    // }

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