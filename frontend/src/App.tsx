import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/NavBar/Navbar';

const App = () => {
  return (
    <>
    
      <Navbar />
    
      <ToastContainer  position="top-center" />
        <Outlet />
    </>
  );
};

export default App;