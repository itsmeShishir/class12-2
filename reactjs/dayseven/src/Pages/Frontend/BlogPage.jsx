import React from "react";

function BlogPage() {
  return <>
    <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Blog</h1>
            <p className="text-gray-600 mt-2">Stay updated with the latest trends, tips, and product insights</p>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                    <img src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Featured Post" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>Technology</span>
                        <span className="mx-2">•</span>
                        <span>January 15, 2024</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Future of Wireless Technology</h2>
                    <p className="text-gray-600 mb-6">Exploring the latest trends in wireless technology and how they impact our daily lives. From 5G networks to IoT devices, discover what's coming next.</p>
                    <a href="blog-post.html?id=1" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                        Read More
                        <i data-lucide="arrow-right" className="w-4 h-4 ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                    <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Gaming Setup" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-sm">
                        Gaming
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>January 10, 2024</span>
                        <span className="mx-2">•</span>
                        <span>7 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Choosing the Perfect Gaming Setup</h3>
                    <p className="text-gray-600 mb-4">A comprehensive guide to building the ultimate gaming experience with the right hardware and accessories.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <i data-lucide="user" className="w-4 h-4 text-gray-600"></i>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Gaming Expert</span>
                        </div>
                        <a href="blog-post.html?id=2" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Photography Equipment" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                        Photography
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>January 5, 2024</span>
                        <span className="mx-2">•</span>
                        <span>6 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Photography Equipment Essentials</h3>
                    <p className="text-gray-600 mb-4">Must-have equipment for aspiring photographers, from cameras to lenses and accessories.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <i data-lucide="user" className="w-4 h-4 text-gray-600"></i>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Photo Pro</span>
                        </div>
                        <a href="blog-post.html?id=3" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                    <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Home Decor" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-yellow-600 text-white px-2 py-1 rounded text-sm">
                        Home & Decor
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>December 28, 2023</span>
                        <span className="mx-2">•</span>
                        <span>4 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Home Decor Trends</h3>
                    <p className="text-gray-600 mb-4">Discover the latest trends in home decoration and how to create a stylish living space.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <i data-lucide="user" className="w-4 h-4 text-gray-600"></i>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Design Team</span>
                        </div>
                        <a href="blog-post.html?id=4" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                    <img src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Fitness Equipment" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
                        Fitness
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>December 20, 2023</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Fitness Equipment Guide</h3>
                    <p className="text-gray-600 mb-4">Build your perfect home gym with our comprehensive guide to fitness equipment selection.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <i data-lucide="user" className="w-4 h-4 text-gray-600"></i>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Fitness Coach</span>
                        </div>
                        <a href="blog-post.html?id=5" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                    <img src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Beauty Products" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-pink-600 text-white px-2 py-1 rounded text-sm">
                        Beauty
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>December 15, 2023</span>
                        <span className="mx-2">•</span>
                        <span>3 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Skincare Routine Essentials</h3>
                    <p className="text-gray-600 mb-4">Learn about the essential steps and products for a healthy skincare routine.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <i data-lucide="user" className="w-4 h-4 text-gray-600"></i>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Beauty Expert</span>
                        </div>
                        <a href="blog-post.html?id=6" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                    <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Books" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-2 py-1 rounded text-sm">
                        Education
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>December 10, 2023</span>
                        <span className="mx-2">•</span>
                        <span>8 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Books for Personal Growth</h3>
                    <p className="text-gray-600 mb-4">Discover our curated list of books that can transform your mindset and boost personal development.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <i data-lucide="user" className="w-4 h-4 text-gray-600"></i>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Book Reviewer</span>
                        </div>
                        <a href="blog-post.html?id=7" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
                    </div>
                </div>
            </article>
        </div>

        <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                    <i data-lucide="chevron-left" className="w-4 h-4"></i>
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                    <i data-lucide="chevron-right" className="w-4 h-4"></i>
                </button>
            </nav>
        </div>

        <div className="bg-blue-600 rounded-lg p-8 mt-16 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest blog posts and product updates</p>
            <div className="max-w-md mx-auto flex">
                <input type="email" placeholder="Enter your email" 
                       className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <button className="bg-blue-800 text-white px-6 py-3 rounded-r-lg hover:bg-blue-900 transition-colors">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  </>;
}

export default BlogPage;
