import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import HomePage from './components/Home/Home';
import LoginPage from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './pages/Dashboard';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
