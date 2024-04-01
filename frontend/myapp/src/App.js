import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booktable from './bookfetch';
import MyFormComponent from './bookinsert';
import { ToastContainer }  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* <Booktable/> */}
{/* <MyFormComponent/> */}
<ToastContainer />
<BrowserRouter>
      <Routes>
        <Route exact path="/fetchbook" element={<Booktable />} />
        <Route exact path="/insertbook" element={<MyFormComponent />} />
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
