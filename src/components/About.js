import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"

class About extends React.Component {

    constructor(props) { super(props) }

    componentDidMount() { }

    render() {
        const user = {
            name: {
                first: "John",
                last: "Doe"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/45.jpg"
            },
            location: {
                city: "Panaji",
                country: "India"
            },
            email: 'shajid@gmail.com'
        }

        return (
            <div className="about-us-container">
                <div className="about-us-header">
                    <h1 className="bg-green-700 text-center py-28 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Page</h1>
                </div>
                <div className="text-center py-12 px-24 text-black text-lg">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi tincidunt ultricies.
                        Nulla facilisi. Morbi ut nunc nec odio aliquet ultricies. Nullam nec est et nisl luctus vehicula.
                        Donec auctor, nunc id ultricies ultricies, justo nisl ultricies nunc, non ultricies libero magna
                        nec purus. Sed vel turpis ut lacus tincidunt vehicula. Donec nec orci nec odio ultricies ultricies.
                        Nullam nec est et nisl luctus vehicula. Donec auctor, nunc id ultricies ultricies, justo nisl ultricies</p>
                </div>
                <h2 className="text-center text-2xl font-bold text-gray-700 mt-4 mb-2 bg-green-300 py-12">Our Team</h2>
                <div>
                    Logged In User:
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h2 className="font-bold">{loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
                <div className="our-team flex flex-wrap justify-around p-10">
                    <UserClass user={user} />
                    <User />
                    <UserClass user={user} />
                    <User />
                </div>
            </div>
        )
    }
}

export default About