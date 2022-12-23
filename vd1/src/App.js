import React from 'react'
import TopMenu from './Component/TopMenu';
import Header from './Component/Header';
import ContentSection from './Component/ContentSection';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <TopMenu/>
      <Header/>
      <ContentSection title = "For those about to rock..." img = "./css/assets/img/01.jpg" lg2="order-lg-2" lg1 = "order-lg-1"/>
      <ContentSection title = "We salute you!" img = "./css/assets/img/02.jpg"/>
      <ContentSection title = "Let there be rock!" img = "./css/assets/img/03.jpg" lg2="order-lg-2" lg1 = "order-lg-1"/>
      <Footer/>
    </div>
  );
}

export default App;
