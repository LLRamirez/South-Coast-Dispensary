import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar';
import Menu from '../src/components/Menu';
import PolicySection from './components/PolicySection';

function App() {
  return (
    <section className="App">
      <div>
        <NavBar/>
        <Menu/>
        <PolicySection/>
      </div>
    </section>
  );
}

export default App;
