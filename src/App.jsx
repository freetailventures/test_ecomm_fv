import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Benefits from './components/Benefits';
    import Footer from './components/Footer';

    const App = () => {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <Hero />
          <Benefits />
          <Footer />
        </div>
      );
    };

    export default App;
