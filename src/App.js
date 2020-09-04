import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

// Components : 
import Header from './components/Header/Header.component.jsx';
// Pages : 
import Home  from './pages/home/Home.page.jsx';

function App() {
  return (
      
       <Router>
         <div className="app">
          <Switch>
             <Route path='/checkout' >
                 <Header/>
                 <h1>checkout</h1>
             </Route>
             <Route path='/login' >
                 <h1>login Page</h1>
             </Route>
             {/* defaut Route choud be last*/}
             <Route path='/' >
                <Header/>
                <Home />
             </Route>
          </Switch>
        </div>
       </Router>

  );

}

export default App;
