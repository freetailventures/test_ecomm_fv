import React from 'react';

    const Hero = () => {
      return (
        <section id="hero" className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <img src="https://www.hebhac.com/wp-content/uploads/biotique.jpg" alt="Biotique Logo" className="mx-auto mb-8 w-48 h-48" />
            <h1 className="text-4xl font-bold mb-4 text-d23369">Unlock Insights with 42Signals</h1>
            <p className="text-lg mb-8 text-black">Track product listings, prices, discounts, and more across Amazon, Flipkart, Blinkit, Zepto, and Instamart.</p>
            <a href="#benefits" className="bg-d23369 text-white px-6 py-3 rounded-full hover:bg-3a6e8f">Learn More</a>
          </div>
        </section>
      );
    };

    export default Hero;
