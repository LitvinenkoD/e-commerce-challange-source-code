
import './App.scss';
import Header from './components/Header';
import PromoStrip from './components/PromoStrip';
import Hero from './components/Hero';
import WheelsGrid from './components/WheelsGrid';
import TextInsert from './components/TextInsert';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <PromoStrip/>
      <Hero/>
      <TextInsert imagebg={false}/>
      <WheelsGrid/>
      <TextInsert imagebg={true}/>
      <Footer/>
    </div>
  );
}

export default App;
