import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

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
                    <h1>About Page</h1>
                </div>
                <div className="about-us-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi tincidunt ultricies.
                        Nulla facilisi. Morbi ut nunc nec odio aliquet ultricies. Nullam nec est et nisl luctus vehicula.
                        Donec auctor, nunc id ultricies ultricies, justo nisl ultricies nunc, non ultricies libero magna
                        nec purus. Sed vel turpis ut lacus tincidunt vehicula. Donec nec orci nec odio ultricies ultricies.
                        Nullam nec est et nisl luctus vehicula. Donec auctor, nunc id ultricies ultricies, justo nisl ultricies</p>
                </div>
                <h2>Our Team</h2>
                <div className="our-team">
                    <UserClass user={user} />
                    <User />
                    <UserClass user={user} />
                    <User />
                </div>
            </div>
        )
    }
}

// const About = () => {
//     const user = {
//         name: {
//             first: "John",
//             last: "Doe"
//         },
//         picture: {
//             large: "https://randomuser.me/api/portraits/women/45.jpg"
//         },
//         location: {
//             city: "Panaji",
//             country: "India"
//         },
//         email: 'shajid@gmail.com'
//     }
//     return (
//         <div className="about-us-container">
//             <div className="about-us-header">
//                 <h1>About Page</h1>
//             </div>
//             <div className="about-us-content">
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi tincidunt ultricies.
//                     Nulla facilisi. Morbi ut nunc nec odio aliquet ultricies. Nullam nec est et nisl luctus vehicula.
//                     Donec auctor, nunc id ultricies ultricies, justo nisl ultricies nunc, non ultricies libero magna
//                     nec purus. Sed vel turpis ut lacus tincidunt vehicula. Donec nec orci nec odio ultricies ultricies.
//                     Nullam nec est et nisl luctus vehicula. Donec auctor, nunc id ultricies ultricies, justo nisl ultricies</p>
//             </div>
//             <h2>Our Team</h2>
//             <div className="our-team">
//                 <UserClass user={user} />
//                 <User />
//                 <UserClass user={user} />
//                 <User />
//             </div>
//         </div>
//     )
// }

export default About