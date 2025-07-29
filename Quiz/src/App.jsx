import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from '../nodeJs/Home';
// import Quiz from './Components/Quiz/Quiz';

function App() {
  return (
    <Router>
    
        <Route exact path="/" component={Home} /> 
       
   
    </Router>
  );
}

export default App;
