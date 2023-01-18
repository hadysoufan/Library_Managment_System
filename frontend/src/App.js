import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../src/components/MainScreen/HomeScreen.component';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
