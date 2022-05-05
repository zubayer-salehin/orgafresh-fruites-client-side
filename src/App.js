import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './pages/AddNewItem/AddItem';
import Blog from './pages/Blog/Blog';
import FruiteDetail from './pages/FruiteDeliver&Restock/FruiteDeliver&Restock';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login&Register/Login/Login';
import Register from './pages/Login&Register/Register/Register';
import RequireAuth from './pages/Login&Register/RequireAuth/RequireAuth';
import ManageItem from './pages/ManageItem/ManageItem';
import MyItem from './pages/MyItem/MyItem';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><FruiteDetail></FruiteDetail></RequireAuth>}></Route>
        <Route path='/manageItem' element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/myitem' element={<RequireAuth><MyItem></MyItem></RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
