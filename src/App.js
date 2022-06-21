import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllServices from './components/AllServices/AllServices';
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails';
import Appoinment from './components/Appoinment/Appoinment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import YourAppoinment from './components/Appoinment/YourAppoinment/YourAppoinment';
import AllBlogs from './components/Blogs/AllBlogs/AllBlogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header key={1}></Header>

      <Routes>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/services' element={<AllServices></AllServices>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/appoinment' element={<PrivateRoute><Appoinment></Appoinment></PrivateRoute>}></Route>
        <Route path='/appoinmentfor/:serviceName' element={<PrivateRoute><Appoinment></Appoinment></PrivateRoute>}></Route>
        <Route path='/blogs' element={<AllBlogs></AllBlogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/yourappoinment/:service/:date/:time/:phone/:msg' element={<YourAppoinment></YourAppoinment>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
