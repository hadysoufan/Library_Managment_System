import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomeScreen from '../src/components/MainScreen/HomeScreen.component';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>



  )
}

export default App;
