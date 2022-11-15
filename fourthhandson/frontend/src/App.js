import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Login from './Components/Login'
import RegistrationForm from './Components/RegistrationForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <RegistrationForm /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='Login' element={<Login />} />
          <Route path='/RegistrationForm' element={<RegistrationForm/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
