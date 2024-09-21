import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>


  );
}

export default App;

function Card() {
  return (
    <div className='cardContent'>
      Card
    </div>
  )
}