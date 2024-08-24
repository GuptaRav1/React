import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login')
    const online = useOnlineStatus()
    const { loggedInUser } = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className='flex items-center justify-between px-8 py-4 shadow-lg bg-amber-400'>
            <div className='overflow-hidden w-28 rounded-xl'>
                <img alt='' src={'../assets/logo.png'} />
            </div>
            <div>
                <ul className='flex justify-betwee'>
                    <li className='px-4 py-2 mr-2 text-white bg-green-700 rounded-lg cursor-pointer'>Online: {online ? '🟢' : '🔴'}</li>
                    <li className='px-4 py-2 mr-2 text-white bg-green-700 rounded-lg cursor-pointer'><Link to={'/grocery'}>Grocery</Link></li>
                    <li className='px-4 py-2 mr-2 text-white bg-green-700 rounded-lg cursor-pointer'><Link to={'/'}>Home</Link></li>
                    <li className='px-4 py-2 mr-2 text-white bg-green-700 rounded-lg cursor-pointer'><Link to={'/about'}>About</Link></li>
                    <li className='px-4 py-2 mr-2 text-white bg-green-700 rounded-lg cursor-pointer'><Link to={'/contact'}>Contact</Link></li>
                    <li className='px-4 py-2 mr-2 font-bold text-white bg-green-700 rounded-lg cursor-pointer'><Link to={'/cart'}>Cart - ({cartItems.length} items)</Link></li>
                    <li className='px-4 py-2 mr-2 text-white bg-green-700 rounded-lg cursor-pointer' onClick={() => { setLoginBtn('Logout') }}>{loginBtn}</li>
                    <li className='px-4 py-2 mr-2 font-bold text-white bg-green-700 rounded-lg cursor-pointer'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header