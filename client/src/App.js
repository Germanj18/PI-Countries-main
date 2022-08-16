import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateActivity from './components/CreateActivity';
import Detail from './components/Details';


function App() {
  return (
    <BrowserRouter>
       <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
         <Route exact path= '/activities' component={CreateActivity}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/country/:id' component={Detail}/>
        
        
      </Switch>
    </div>
    </BrowserRouter>
   );
}

export default App;
