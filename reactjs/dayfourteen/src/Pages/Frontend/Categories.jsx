import React from "react";
import { useQuery } from "@tanstack/react-query";
    
import { Link } from 'react-router-dom'
function CAtegories() {
    const { isPending, error, data } = useQuery({
    queryKey: ['category'],
    queryFn: () =>
      fetch(`https://ecommerce.bhandarishishir.com.np/api/category/`).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return <>
  <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Product Categories</h1>
            <p className="text-gray-600 mt-2">Browse our wide range of product categories</p>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {
            data.map((items)=>{
                return  <Link to={`/singleCategoryProduct/${items.id}`} key={items.id} className="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src={items.image} 
                         alt="Electronics" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                            <i data-lucide="smartphone" className="w-16 h-16 mx-auto mb-4"></i>
                            <h3 className="text-2xl font-bold">{items.name}</h3>
                        </div>
                    </div>
                </div>
               
            </Link>
            })
           }

           
        </div>

        <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Collections</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">New Arrivals</h3>
                    <p className="mb-6">Discover the latest products across all categories</p>
                    <a href="products.html?filter=new" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        Shop New Arrivals
                    </a>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Sale Items</h3>
                    <p className="mb-6">Save big on selected products with up to 50% off</p>
                    <a href="products.html?filter=sale" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                        Shop Sale Items
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>;
}

export default CAtegories;
