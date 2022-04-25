import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar';
import Menu from '../src/components/Menu';

function App() {
  return (
    <section className="App">
      <div>
        <NavBar/>
        <Menu/>
      </div>
    </section>
  );
}

export default App;
