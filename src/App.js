
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import login from './pages/login/login';
import register from './pages/register/register';

function App() {
  return (
   <BrowserRouter>
   <switch>
     <Route exact path="/">
       <Redirect to="/login"/>
     </Route>
          <Route path={'/login'} component={login} />
     <Route path={'/register'} component={register} />
     <Route path={'/home'} component={Home} />
   </switch>
     </BrowserRouter>
    );
  }
  export default App