import React from "react";

function Footer() {
  return <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <i data-lucide="shopping-cart" className="w-5 h-5 text-white"></i>
                        </div>
                        <span className="text-xl font-bold">EliteStore</span>
                    </div>
                    <p className="text-gray-400 mb-4">Your trusted partner for premium products and exceptional shopping experience.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i data-lucide="facebook" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i data-lucide="twitter" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i data-lucide="instagram" className="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="index.html" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="products.html" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                        <li><a href="categories.html" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
                        <li><a href="blog.html" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Contact Info</h3>
                    <div className="space-y-2 text-gray-400">
                        <p className="flex items-center"><i data-lucide="map-pin" className="w-4 h-4 mr-2"></i> 123 Store Street, City, State 12345</p>
                        <p className="flex items-center"><i data-lucide="phone" className="w-4 h-4 mr-2"></i> (555) 123-4567</p>
                        <p className="flex items-center"><i data-lucide="mail" className="w-4 h-4 mr-2"></i> info@elitestore.com</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 EliteStore. All rights reserved.</p>
            </div>
        </div>
      </footer>
  </>;
}

export default Footer;
