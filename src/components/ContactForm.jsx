import React from 'react';

    const ContactForm = () => {
      return (
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-d23369">Contact Us</h2>
            <form className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md" required />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-d23369 text-white px-6 py-3 rounded-full hover:bg-3a6e8f">Submit</button>
              </div>
            </form>
          </div>
        </section>
      );
    };

    export default ContactForm;
