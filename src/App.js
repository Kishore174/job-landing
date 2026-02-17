import logo from './logo.svg';
import './App.css';
import Navbar from './components/Ui/Navbar';
import Home from './components/Ui/Home';
import RecentJob from './components/Ui/RecentJob';
import Footer from './components/Ui/Footer';

function App() {
  return (
    <div >
     {/* <Navbar/> */}
     <Home/>
     <RecentJob/>
     <Footer/>
         </div>
  );
}

export default App;
