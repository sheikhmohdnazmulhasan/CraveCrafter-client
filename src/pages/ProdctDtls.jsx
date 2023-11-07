import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";

const ProdctDtls = () => {
    const prodct = useLoaderData();
    const [count, setCount] = useState(1);
    const product = prodct.quantity

    const handleCountNagetive = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    // const handleCountPosetive = () => {
    //     if (count < prodct.quantity) {
    //         setCount(count + 1)
    //     } else {
    //         Swal.fire('Out of stock!')
    //     }
    // }

    return (
        <div>
            <div>
                <Navbar />
                <div className="min-h-screen">
                    <section className="py-12 font-poppins">
                        <div className="max-w-6xl px-4 mx-auto">
                            <div className="flex flex-wrap mb-24 -mx-4">
                                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                    <div className="sticky top-0 overflow-hidden ">
                                        <div className="relative mb-6 lg:mb-10 lg:h-[600px]">
                                            <img className="object-contain w-full lg:h-full" src={prodct.food_img_url} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                        <div className="mb-6 ">
                                            <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide  md:text-2xl">{prodct.food_name}</h2>
                                            <div className="flex flex-wrap items-center mb-6">
                                                <ul className="flex mb-4 mr-2 lg:mb-0">
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a className="mb-4 text-xs underline hover:text-blue-600 lg:mb-0" href="#">
                                                    View the acer store
                                                </a>
                                            </div>
                                            <p className="inline-block text-2xl font-semibold ">
                                                <span>$ {prodct.price}</span>
                                                <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">$.76.00</span>
                                            </p>
                                        </div>
                                        <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                            <span className="text-base text-gray-600 dark:text-gray-400">In Stock: Yes</span> <br />
                                            <span className="text-base text-gray-600 dark:text-gray-400">Category: {prodct.food_category}</span> <br />
                                            <span className="text-base text-gray-600 dark:text-gray-400">Quantity: {prodct.quantity}</span> <br />
                                            <span className="text-base text-gray-600 dark:text-gray-400">Added By: {prodct.addedBy}</span> <br />
                                            <span className="text-base text-gray-600 dark:text-gray-400">Origin: {prodct.origin}</span> <br />
                                            <span className="text-base text-gray-600 dark:text-gray-400">Description: {prodct.description}</span> <br />
                                        </div>
                                        <div className="mb-6 "></div>
                                        <div className="flex flex-wrap items-center mb-6">
                                            <div className="mb-4 mr-4 lg:mb-0">
                                                <div className="w-28">
                                                    {/* <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                        <button className="w-20 h-full border border-l rounded-l outline-none cursor-pointer" onClick={handleCountNagetive}>
                                                            <span className="m-auto text-2xl font-thin">-</span>
                                                        </button>
                                                        <p className="flex items-center w-full font-semibold text-center border outline-none focus:outline-none text-md hover:text-black" placeholder="1" > &nbsp; &nbsp; {count}</p>
                                                        <button className="w-20 h-full border border-l rounded-r outline-none cursor-pointer" onClick={handleCountPosetive}>
                                                            <span className="m-auto text-2xl font-thin">+</span>
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                           <Link className="w-full" to={`/food/order/${prodct._id}`}> <button className="btn w-full bg-red-500 hover:bg-red-600 text-white">Order</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProdctDtls;