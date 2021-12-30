import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop'
import Review from './Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <div>
     <Header></Header>
     <Router>
       <Switch>
        <Route path="/shop">
         <Shop></Shop>
         </Route>

         {/* <Route path="/product/shop">
         <Shop></Shop>
         </Route> */}
            
          <Route path="/review">
             <Review></Review>
          </Route>

          <Route path="/inventory">
           <Inventory></Inventory>
          </Route>

          <Route exact path="/">
          <Shop></Shop>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/:productKey">
           <ProductDetails></ProductDetails>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

       </Switch>

     </Router>

    </div>
  );
}

export default App;
