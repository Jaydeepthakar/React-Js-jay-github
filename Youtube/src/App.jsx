import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Music from './Music';
import All from './All';
import Gaming from './Gaming';
import LoFi from './Lofi';
import Live from './Live';
import TSeries from './Tseries';
import Comedy from './Comady';
import NewToYou from './Newtoyou';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Nav />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/music" element={<Music />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/lofi" element={<LoFi />} />
        <Route path="/live" element={<Live />} />
        <Route path="/t-series" element={<TSeries />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/new-to-you" element={<NewToYou />} />
      </Routes>
    </Router>
  );
}

export default App;
