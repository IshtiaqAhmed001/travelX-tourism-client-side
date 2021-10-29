import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Destinations from './components/Destinations/Destinations';
import Register from './components/Register/Register';
import DealDetails from './components/DealDetails/DealDetails';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/destinations">
              <Destinations></Destinations>
            </Route>
            <PrivateRoute path="/deals/details/:id">
              <DealDetails></DealDetails>
            </PrivateRoute>
            <Route path="/deals">
              <Deals></Deals>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;
