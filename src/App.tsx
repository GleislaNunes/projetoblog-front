// App.tsx
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App;
