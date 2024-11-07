import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className='body-container'>
      <Navbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
