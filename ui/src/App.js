import './App.css';
import Homepage from './Pages/Homepage';
import History from './Pages/History';
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter,Routes,Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
