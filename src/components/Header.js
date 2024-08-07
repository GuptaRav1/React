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
        <div className='flex shadow-lg justify-between items-center bg-amber-400 py-4 px-8'>
            <div className='w-28 rounded-xl overflow-hidden'>
                <img alt='' src={require('../assets/logo.png')} />
            </div>
            <div>
                <ul className='flex justify-betwee'>
                    <li className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg'>Online: {online ? '🟢' : '🔴'}</li>
                    <li className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg'><Link to={'/grocery'}>Grocery</Link></li>
                    <li className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg'><Link to={'/'}>Home</Link></li>
                    <li className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg'><Link to={'/about'}>About</Link></li>
                    <li className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg'><Link to={'/contact'}>Contact</Link></li>
                    <li className='font-bold px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg'>Cart - ({cartItems.length} items)</li>
                    <li className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg' onClick={() => { setLoginBtn('Logout') }}>{loginBtn}</li>
                    <li className='px-4 py-2 cursor-pointer mr-2 bg-green-700 text-white rounded-lg font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header