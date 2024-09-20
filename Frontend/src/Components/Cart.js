import React, { useContext } from 'react';
import { CartContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);

  async function pay(e) {
    e.preventDefault();
    try {
      const { data: { key } } = await axios.get('http://localhost:3000/api/payment/key');
      const { data: { order } } = await axios.post('http://localhost:3000/api/payment/check', { total });
      const options = {
        key,
        amount: order.amount,
        currency: 'INR',
        name: 'Shivam',
        description: 'test tutorial for razorpay',
        image: 'https://example.com/your_logo',
        order_id: order.id,
        callback_url: 'http://localhost:3000/api/payment/verification',
        prefill: {
          name: 'Shivam',
          email: 'shivam@gmail.com',
          contact: '7903123459'
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#3399cc'
        }
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.log(err.msg);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center py-10">
      <div className="mx-auto flex max-w-3xl flex-col space-y-6 bg-white p-6 shadow-xl rounded-lg">
        <h2 className="text-4xl font-bold text-center text-blue-600">Your Cart</h2>

        {/* Empty cart handling */}
        {cart.items.length === 0 ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-700">Oops! Your Cart is Empty</h3>
            <p className="mt-3 text-lg text-gray-500">Looks like you haven’t added anything yet.</p>
            <Link
              to="/"
              className="mt-6 inline-block rounded-md bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-500 transition-all duration-200 ease-in-out"
            >
              Start Shopping
            </Link>
            <div className="mt-8">
              <img
                src="https://th.bing.com/th/id/OIP.s5WDa4Cj8Zpt-19zNsfNbwAAAA?w=212&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Empty Cart"
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
            {/* Items in cart */}
            <ul className="flex flex-col divide-y divide-gray-200">
              {cart.items.map((item) => (
                <li key={item.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none sm:h-32 sm:w-32"
                      src="https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1548&amp;q=80"
                      alt={item.name}
                    />
                    <div className="flex w-full flex-col justify-between pb-4">
                      <div className="flex w-full justify-between space-x-2 pb-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item.name}</h3>
                          <p className="text-sm">Orange</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">${item.price}</p>
                        </div>
                      </div>
                      <div className="flex divide-x text-sm">
                        <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0">
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
                            className="lucide lucide-trash"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                          <span>Remove</span>
                        </button>
                        <button type="button" className="flex items-center space-x-2 px-2 py-1">
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
                            className="lucide lucide-heart"
                          >
                            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                          </svg>
                          <span>Add to favorites</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-right">
              <p className="text-lg font-semibold">Total amount: <span className="text-2xl">${total}</span></p>
            </div>
            <div className="flex justify-end space-x-4">
              <Link
                to="/"
                className="rounded-md border border-blue-600 px-3 py-2 text-blue-600 font-semibold shadow hover:bg-blue-50 transition-all duration-200"
              >
                Back to shop
              </Link>
              <button
                onClick={pay}
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-white font-semibold hover:bg-blue-500 transition-all duration-200"
              >
                PAY NOW
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
