import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  exact path='/' element={<News key="general"  pageSize={6} country="in" category="general" />} />
          <Route  exact path='/sports' element={<News  key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path='/entertainment' element={<News key="entertainment"  pageSize={6} country="in" category="entertainment" />} />
          <Route  exact path='/science' element={<News key="science" pageSize={6} country="in" category="science" />} />
          <Route  exact path='/technology' element={<News key="technology" pageSize={6} country="in" category="technology" />} />
          <Route exact path='/business' element={<News key="business"  pageSize={6} country="in" category="business" />} />
          <Route  exact path='/health' element={<News key="health" pageSize={6} country="in" category="health" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
