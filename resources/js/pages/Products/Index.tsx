import React from 'react';
import { usePage } from '@inertiajs/react';
import Layout from '@/layouts/app-layout'; // make sure this points to your layout
import { Product } from '@/types'; // adjust the path to your Product type

const Index: React.FC = () => {
  const { products } = usePage().props as { products: { data: Product[] } };
  const productArray = products.data || [];

  return (
    <Layout>
      <div className="flex flex-col items-center max-w-6xl mx-auto px-6 py-12 space-y-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-500 dark:text-indigo-400 mb-4 sm:mb-0">
            Our Handmade Products
          </h1>
        </div>

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productArray.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition p-4 flex flex-col"
              >
                <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image_url || '/logo.svg'}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{product.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">{product.description}</p>
                <button className="mt-auto bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700 transition mt-4">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Index;
