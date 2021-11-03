import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
// import Card1 from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Login />
    </div>
  );
}

export default App;
