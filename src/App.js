import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/resume' >
            <Resume/>
          </Route>

        </Switch>
        <div className='fixed top-10 left-40 text-[17px] text-gray-500 font-extralight'>
          <Link to='/'><span className='hover:font-semibold font-normal'>01 &nbsp;:&nbsp; Home &nbsp;</span>|</Link>
          <Link to='/resume'><span className='hover:font-semibold font-normal'>&nbsp; 02 &nbsp;: &nbsp;Resume &nbsp;</span></Link>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
