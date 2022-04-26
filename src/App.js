import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar';
import Menu from '../src/components/Menu';
import PolicySection from './components/PolicySection';
import StorePhotoGallery from './components/StorePhotoGallery';
import Footer from './components/Footer';

function App() {
  return (
    <section className="App">
      <NavBar/>
      <div className="px-8 pb-8">
        
        <StorePhotoGallery/>
        <Menu/>
        <PolicySection/>
        <Footer/>
      </div>
    </section>
  );
}

export default App;
