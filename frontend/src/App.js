import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          {/* using 'exact' below makes it so that only / will take us to homescreen, not / anything */}
          <Route path="/" component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
