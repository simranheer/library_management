"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching products from NestJS backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real app, you would fetch from your NestJS API
        // const response = await fetch('http://localhost:3000/api/products');
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockProducts = [
          { id: 1, name: 'Premium Headphones', price: 199.99, category: 'Electronics' },
          { id: 2, name: 'Wireless Keyboard', price: 89.99, category: 'Electronics' },
          { id: 3, name: 'Organic Cotton T-Shirt', price: 29.99, category: 'Clothing' },
          { id: 4, name: 'Stainless Steel Water Bottle', price: 24.99, category: 'Accessories' },
          { id: 5, name: 'Fitness Tracker', price: 79.99, category: 'Electronics' },
          { id: 6, name: 'Leather Wallet', price: 49.99, category: 'Accessories' },
        ];
        
        setProducts(mockProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ShopNest - Home</title>
        <meta name="description" content="Your one-stop shop for everything" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
                Welcome to ShopNest
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 animate-fadeIn delay-100">
                Discover amazing products at unbeatable prices
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fadeIn delay-200">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <span className="text-gray-500">Product Image</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.category}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to transform your shopping experience?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who shop with us every day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Browse Products
              </button>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 border border-indigo-600">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopNest</h3>
              <p className="text-gray-400">Your one-stop shop for everything you need.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on new products and offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r hover:bg-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ShopNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}