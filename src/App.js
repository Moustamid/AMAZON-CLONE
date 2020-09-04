import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

// Components : 

import Header from './components/Header/Header.component.jsx';

function App() {
  return (
      
       <Router>
         <div className="app">
          <Switch>
             <Route path='/checkout' >
                 <h1>checkout</h1>
             </Route>
             <Route path='/login' >
                 <h1>login Page</h1>
             </Route>
             {/* defaut Route choud be last*/}
             <Route path='/' >
                <Header/>
                <h1>HOME PAGE</h1>
             </Route>
          </Switch>
        </div>
       </Router>

  );

}

export default App;
