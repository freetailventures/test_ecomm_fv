import React from 'react';

    const Header = () => {
      return (
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">42Signals</div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#hero" className="hover:underline">Home</a></li>
                <li><a href="#benefits" className="hover:underline">Benefits</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };

    export default Header;
