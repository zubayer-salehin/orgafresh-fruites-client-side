import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddItem from './pages/AddNewItem/AddItem';
import FruiteDetail from './pages/FruiteDeliver&Restock/FruiteDeliver&Restock';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login&Register/Login/Login';
import Register from './pages/Login&Register/Register/Register';
import RequireAuth from './pages/Login&Register/RequireAuth/RequireAuth';
import ManageItem from './pages/ManageItem/ManageItem';
import MyItem from './pages/MyItem/MyItem';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import ScrollToTop from './ScrollToTop';
import { useEffect, useState } from 'react';
import Loading from './pages/Shared/Loading/Loading';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1500])
  }, [])

  return (loading ? <Loading loadingStatus="true"></Loading> :
    <div>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><FruiteDetail></FruiteDetail></RequireAuth>}></Route>
        <Route path='/manageItem' element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/myitem' element={<RequireAuth><MyItem></MyItem></RequireAuth>}></Route>
        <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
