import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>


        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
