import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Benefits from './components/Benefits';
    import ContactForm from './components/ContactForm';
    import Footer from './components/Footer';
    import MatrixBackground from './components/MatrixBackground';

    const App = () => {
      return (
        <div className="min-h-screen flex flex-col relative">
          <MatrixBackground />
          <div className="relative z-10">
            <Header />
            <Hero />
            <Benefits />
            <ContactForm />
            <Footer />
          </div>
        </div>
      );
    };

    export default App;
