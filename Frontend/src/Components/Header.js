import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/Context'

const Header = () => {
    const {isLoggedIn,user} = useContext(CartContext);
    const name = user.name;
     
    
  return (
    <div>
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img
                    src="data:image/jpeg;base64,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"
                    className="mr-3 h-12"
                    alt="Logo"
                />
            </Link>
            <div className="flex items-center lg:order-2">
            
            {
                isLoggedIn ? (
                    <>
                    <NavLink
                        to="/logout"
                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        LOGOUT
                    </NavLink> 
                
                    <h2>{name}</h2>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/registration"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign up
                        </NavLink>
                        
                        
                        <NavLink
                            to="/login"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Login
                        </NavLink>
                    
                    </>
                )
            }
        
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/cart"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            CART
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/wishlist"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        WISHLIST
                    </NavLink>
                </li>
                <li>
                <NavLink
                to="/product"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    PRODUCT
                </NavLink>
            </li>
                <li>
                <NavLink
                to="/contact"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    CONTACT US
                </NavLink>
            </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    </div>
  )
}

export default Header
