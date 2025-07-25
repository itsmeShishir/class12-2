// import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
// import ApiFetch from "../../learn/CustomHook/ApiFetch";
import { useQuery } from "@tanstack/react-query";
function ProductsPage() {

    // const [data, SetData] = useState([]);
    // const [loading, SetLoading] = useState(true);
    // const [error, SetError] = useState(false);
    // useEffect(() => {
    //    const FetchApiData = async() =>{
    //        try{
    //         const res = await fetch("https://ecommerce.bhandarishishir.com.np/api/product/")
    //         const data = await res.json()
    //         SetLoading(false)
    //         SetData(data)
    //        }catch(e){
    //         console.log(e.message);
    //         SetError(true)
    //        }
    //    }
    //    FetchApiData()
    // })
    // if(loading){
    //     return <h1>Loading...</h1>
    // }
    // if(error){
    //     return <h1>Something went wrong</h1>
    // }

    const { isPending, error, data } = useQuery({
    queryKey: ['productsData'],
    queryFn: () =>
      fetch('https://ecommerce.bhandarishishir.com.np/api/product/').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return <>
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                        <input type="text" placeholder="Search products..." 
                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">Electronics (45)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">Fashion (32)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">Home & Garden (28)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">Sports (19)</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="radio" name="price" className="text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">Under $50</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="price" className="text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">$50 - $100</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="price" className="text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">$100 - $500</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="price" className="text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">Over $500</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <div className="ml-2 flex text-yellow-400">
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                </div>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <div className="ml-2 flex text-yellow-400">
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" className="w-4 h-4"></i>
                                </div>
                                <span className="ml-1 text-sm text-gray-600">& up</span>
                            </label>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Apply Filters
                    </button>
                </div>
            </div>

            <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-gray-600">
                        Showing 1-12 of 48 products
                    </div>
                    <div className="flex items-center space-x-4">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" >
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                            <option>Best Rating</option>
                        </select>
                        <div className="flex border border-gray-300 rounded-lg">
                            <button className="p-2 bg-blue-600 text-white rounded-l-lg">
                                <i data-lucide="grid-3x3" className="w-4 h-4"></i>
                            </button>
                            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-r-lg">
                                <i data-lucide="list" className="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { data.map((items)=>{
                        return <div key={items.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                        <div className="relative">
                            <img src={items.image}
                                 alt="Wireless Headphones" className="w-full h-48 object-cover" />
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">25% OFF</div>
                            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                                <i data-lucide="heart" className="w-4 h-4 text-gray-600"></i>
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">{items.title}</h3>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400">
                                    <CiStar  className="w-4 h-4 fill-current"></CiStar>
                                    <CiStar  className="w-4 h-4 fill-current"></CiStar>
                                    <CiStar  className="w-4 h-4 fill-current"></CiStar>
                                    <CiStar  className="w-4 h-4 fill-current"></CiStar>
                                    <CiStar  className="w-4 h-4 fill-current"></CiStar>
                                </div>
                                <span className="text-sm text-gray-500 ml-2">(124)</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-sm text-gray-500 ml-2">${items.price}</span>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Link to={`/singleProduct/${items.id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</Link>
                                <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                    <FaCartArrowDown  className="w-4 h-4"></FaCartArrowDown>
                                </button>
                            </div>
                        </div>
                    </div>
                    }) }
                </div>

                <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                        <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                            <i data-lucide="chevron-left" className="w-4 h-4"></i>
                        </button>
                        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                        <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                        <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                        <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">4</button>
                        <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                            <i data-lucide="chevron-right" className="w-4 h-4"></i>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  </>;
}

export default ProductsPage;
