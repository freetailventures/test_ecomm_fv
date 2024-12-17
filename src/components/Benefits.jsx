import React from 'react';

    const benefitsData = [
      {
        title: 'Product Availability Tracking',
        description: 'Monitor the availability of Biotique products in real-time across multiple platforms.',
        icon: '🔍',
      },
      {
        title: 'Price Parity',
        description: 'Ensure Biotique prices are competitive and consistent across all marketplaces.',
        icon: '💰',
      },
      {
        title: 'Discount Tracking',
        description: 'Track and analyze discounts on Biotique products to optimize your pricing strategy.',
        icon: '🎯',
      },
      {
        title: 'Price Trends Tracking',
        description: 'Stay ahead with insights into price trends and market fluctuations for Biotique products.',
        icon: '📈',
      },
      {
        title: 'Keywords Search Visibility',
        description: 'Improve Biotique product visibility by tracking keyword performance.',
        icon: '🔑',
      },
      {
        title: 'Customer Sentiments from Reviews',
        description: 'Gain insights from customer reviews to enhance Biotique product offerings.',
        icon: '🗣️',
      },
    ];

    const Benefits = () => {
      return (
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-d23369">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-d23369">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center space-x-8">
              <img src="https://www.42signals.com/wp-content/uploads/2022/09/42Signals_Logo.webp" alt="42Signals Logo" className="w-32 h-32" />
              <img src="https://www.promptcloud.com/wp-content/uploads/2022/02/prompt-cloud-logo.png" alt="Promptcloud Logo" className="w-32 h-32" />
            </div>
          </div>
        </section>
      );
    };

    export default Benefits;
