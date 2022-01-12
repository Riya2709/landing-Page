import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Carasoule from "./component/Carasoule"
import Desc from "./component/Desc";
import Modal from './component/Modal';

function App() {
  return (
    <>
    <Navbar/>
    <Carasoule />
    <Desc/>
    <Modal/>
    </>
  );
}

export default App;
