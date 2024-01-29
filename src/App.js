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
        <div className='fixed w-[270px] top-10 left-1/2 md:left-60 transform -translate-x-1/2 text-[17px] mx-auto text-gray-500 font-extralight'>
          <div className=" ">
          <Link to='/'><span className='hover:font-semibold font-normal'>01 &nbsp;:&nbsp; Home &nbsp;</span>|</Link>
          <Link to='/resume'><span className='hover:font-semibold font-normal'>&nbsp; 02 &nbsp;: &nbsp;Resume &nbsp;</span></Link>  
          </div>
       </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
