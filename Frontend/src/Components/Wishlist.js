import React from 'react';
import { CartContext } from '../Context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const cart = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-4xl flex flex-col space-y-6 p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-4xl font-bold text-center text-blue-600">Your Wishlist</h2>
        <p className="mt-2 text-center text-gray-600">
          Here are the items you have saved. Ready to purchase your favorite picks?
        </p>

        {/* Empty wishlist handling */}
        {cart.wishlist.length === 0 ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-700">Your Wishlist is Empty</h3>
            <p className="mt-3 text-lg text-gray-500">
              You haven't added any items yet. Start shopping now!
            </p>
            <Link
              to="/"
              className="mt-6 inline-block rounded-md bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-500 transition-all duration-200"
            >
              Explore Products
            </Link>
            <div className="mt-8">
              <img
                src="https://th.bing.com/th/id/OIP.25_acG6bAVMlOw7t1OVH9AHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Empty Wishlist"
                className="mx-auto h-60 rounded-lg shadow-md"
              />
            </div>

            {/* Recommended Products Section */}
            <div className="mt-12 text-left">
              <h4 className="text-xl font-semibold text-gray-800">Recommended for You</h4>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Product 1 */}
                <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <img
                    src="https://1.bp.blogspot.com/-SFtPMMFyhGo/XX9qzAXOEtI/AAAAAAAAAUw/N2J8sKBZ2eIbFw-6GVPZEXVWD9yldepZgCLcBGAsYHQ/s1600/Creative-product-photography.jpg"
                    alt="Recommended Product 1"
                    className="h-40 w-full object-cover rounded mb-3"
                  />
                  <p className="text-lg font-medium">Product 1</p>
                  <p className="text-sm text-gray-500">$49.99</p>
                  <Link to="/" className="block mt-2 text-blue-600 hover:underline">
                    View Details
                  </Link>
                </div>

                {/* Product 2 */}
                <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <img
                    src="https://th.bing.com/th/id/OIP.vUQnAz3rvYrn9k3LW_BJlQHaHa?w=626&h=626&rs=1&pid=ImgDetMain"
                    alt="Recommended Product 2"
                    className="h-40 w-full object-cover rounded mb-3"
                  />
                  <p className="text-lg font-medium">Product 2</p>
                  <p className="text-sm text-gray-500">$59.99</p>
                  <Link to="/" className="block mt-2 text-blue-600 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Wishlist items */}
            <ul className="flex flex-col divide-y divide-gray-200">
              {cart.wishlist.map((item) => (
                <li key={item.name} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-4">
                    <img
                      className="h-20 w-20 flex-shrink-0 rounded object-contain sm:h-32 sm:w-32"
                      src="https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1548&amp;q=80"
                      alt={item.name}
                    />
                    <div className="flex w-full flex-col justify-between">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-semibold leading-snug">{item.name}</h3>
                        <p className="text-lg font-semibold">${item.price}</p>
                      </div>
                      <p className="text-sm text-gray-500">Color: Orange</p>
                      <div className="mt-2 flex space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-red-500 hover:text-red-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash mr-1"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                          Remove
                        </button>
                        <button
                          type="button"
                          className="flex items-center text-sm text-blue-600 hover:text-blue-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-heart mr-1"
                          >
                            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                          </svg>
                          Add to Favorites
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end space-x-4">
              <Link
                to="/"
                className="rounded-md bg-blue-600 px-3 py-2 text-white font-semibold shadow hover:bg-blue-500 transition-all duration-200"
              >
                Back to Shop
              </Link>
              <button
                onClick={() => {
                  cart.setWishlist([]);
                }}
                className="rounded-md bg-red-600 px-3 py-2 text-white font-semibold shadow hover:bg-red-500 transition-all duration-200"
              >
                Clear Wishlist
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
