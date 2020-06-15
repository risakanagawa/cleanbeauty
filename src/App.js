import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "./ScrollToTop";
import Main from "./components/main/Main";
import Nav from "./components/common/Nav";
import NavPromotion from "./components/common/Nav_Promotion";
import Footer from "./components/common/Footer";
import Concept from "./components/concept/Concept";
import FindUs from "./components/findus/FindUs";
import News from "./components/news/News";
import ShopAll from "./components/shop/ShopAll";
import InCart from "./components/shoppingCart/InCart"
import ErrorPage from "./ErrorPage";

library.add(fab, fas);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <NavPromotion />
          <Nav />
          <Switch>
            <Route path="/news" component={News} />
            <Route path="/concept" component={Concept} />
            <Route path="/findus" component={FindUs} />
            <Route path="/shop" component={ShopAll} />
            <Route exact path="/shoppingcart" component={InCart} />

            <Route exact path="/" component={Main} />
            <Route  component={ErrorPage} />

          </Switch>

          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
