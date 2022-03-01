import React from 'react';
import DownloadSection from './components/DownloadSection';
import Header from "./components/Header";
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <DownloadSection />
    </div>
  );
}

export default App;
