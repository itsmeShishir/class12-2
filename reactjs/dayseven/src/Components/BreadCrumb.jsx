import React from "react";

function BreadCrumb() {
  return <>
  <nav class="bg-white py-4 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center space-x-2 text-sm">
                <a href="index.html" class="text-gray-500 hover:text-blue-600">Home</a>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
                <span class="text-gray-900">Shopping Cart</span>
            </div>
        </div>
    </nav>
    </>;
}

export default BreadCrumb;
