import logo from './logo.svg';
import './App.scss';
import { handleClick } from './hooks/test'
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <button onClick={handleClick}>Test Request</button>
      <h1>EZLFG</h1>
    </main>
  );
}


export default App;
