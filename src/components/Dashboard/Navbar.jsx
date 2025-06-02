import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Images } from '../../assets/assets'
import { useWishList } from '../../contexts/WishListContext'
const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const { role, navigate, logout, user } = useAuth();
  const { wishListCount } = useWishList();
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-15 py-4 border-b border-gray-300 bg-white relative transition-all">

            <a href="#">
                <img className="h-9" src={Images.logo} alt="logo" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                {(role != "User") && <NavLink className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80" to="/admin/rental">Rental Inventory</NavLink>}
                {(role != "User") && <NavLink className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80" to="/admin/calendar">Rental Calendar</NavLink>}
                {(role != "User") && <NavLink className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80" to="/admin/maintenance">Maintenance Record</NavLink>}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/equipments">All Equipments</NavLink>


                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div onClick={()=>navigate("/wishList")} className="relative cursor-pointer">
                    <img src={Images.WishList_icon} className='w-8 h-8' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">{wishListCount}</button>
                </div>

               {!user ? (<button onClick={()=> navigate("/login")} className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>):(
                    <div className='relative group'>
                        <img src={Images.profile_icon} className='w-10' alt='' />
                        <span>{role}</span>
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer' onClick={logout}>Logout</li>
                        </ul>
                    </div>
                )
                }
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>
                <button 
                    className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
                >
                    Login
                </button>
            </div>

        </nav>
  )
}

export default Navbar