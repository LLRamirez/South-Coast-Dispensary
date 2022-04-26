import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar';
import Menu from '../src/components/Menu';
import PolicySection from './components/PolicySection';
import StorePhotoGallery from './components/StorePhotoGallery';

function App() {
  return (
    <section className="App">
      <div>
        <NavBar/>
        <StorePhotoGallery/>
        <Menu/>
        <PolicySection/>
      </div>
    </section>
  );
}

export default App;
