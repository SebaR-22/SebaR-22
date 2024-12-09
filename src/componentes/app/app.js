import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdivinanzaContainer from './components/AdivinanzaContainer/AdivinanzaContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AdivinanzaContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
