import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          {/* using 'exact' below makes it so that only / will take us to homescreen, not / anything */}
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/product/:id" component={ProductScreen}/>
          {/* Using ? after :id allow the id to be optional */}
          <Route path="/cart/:id?" component={CartScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
