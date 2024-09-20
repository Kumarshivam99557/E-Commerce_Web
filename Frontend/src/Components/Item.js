import React, { useContext } from 'react';
import { CartContext } from '../Context/Context';

const Item = (props) => {
    const cart = useContext(CartContext);
  
    return (
        <div>
            <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
                <div className="overflow-hidden">
                    <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
                        <div className="items-start justify-between lg:flex lg:space-x-8">
                            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                                <div className="w-full xl:flex xl:flex-row-reverse">
                                    <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                                        <div className="relative flex items-center justify-center">
                                            <img
                                                alt="Product gallery 1"
                                                src="https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1548&amp;q=80"
                                                width="650"
                                                height="590"
                                                className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                                            />
                                        </div>
                                        <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-white"
                                            >
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-white"
                                            >
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 xl:flex-col">
                                        <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                                            <img
                                                alt="Product 0"
                                                src="https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=924&amp;q=80"
                                                decoding="async"
                                                loading="lazy"
                                                className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                                            />
                                        </div>
                                        <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                                            <img
                                                alt="Product 1"
                                                src="https://images.unsplash.com/photo-1580902394743-1394a7ec93d2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                                                decoding="async"
                                                loading="lazy"
                                                className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                                            />
                                        </div>
                                        <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                                            <img
                                                alt="Product 2"
                                                src="https://images.unsplash.com/photo-1580902394767-81b0facc0894?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                                                decoding="async"
                                                loading="lazy"
                                                className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                                <div className="pb-5">
                                    <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                                        {props.name}
                                    </h2>
                                    <p className="mt-4 font-semibold"> ${props.price}</p>
                                </div>
                                <div className="mb-2 pt-0.5">
                                    <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                                        available in:
                                    </h4>
                                    <ul className="flex flex-wrap space-x-2">
                                        <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                                            8 UK
                                        </li>
                                        <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                                            9 UK
                                        </li>
                                        <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                                            10 UK
                                        </li>
                                    </ul>
                                </div>
                                <div className="pb-2"></div>
                                <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                                    <button
                                        onClick={() => {
                                            cart.setItem([...cart.items,{name: props.name, price: props.price}]);
                                        }}
                                        type="button"
                                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Add To Cart
                                    </button>
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <button
                                            onClick={() => {
                                                cart.setWishlist([...cart.wishlist,{name: props.name, price: props.price}]);
                                            }}
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
                                                className="mr-3"
                                            >
                                                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                                            </svg>
                                            <span className="block">Wishlist</span>
                                        </button>
                                        <div className="relative">
                                            <button
                                                type="button"
                                                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
                                                    className="mr-3"
                                                >
                                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                                    <polyline points="16 6 12 2 8 6"></polyline>
                                                    <line x1="12" y1="2" x2="12" y2="15"></line>
                                                </svg>
                                                <span className="block">Share</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 xl:pt-8">
                                    <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                                        Product Details:
                                    </h3>
                                    <p className="text-sm">
                                        A chip (often just chip, or crisp in British and Irish English)
                                        may be a thin slice of potato that has been either deep fried or
                                        baked until crunchy. theyre commonly served as a snack, side dish,
                                        or appetizer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
