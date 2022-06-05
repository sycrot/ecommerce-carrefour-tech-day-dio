import { Footer } from "./components/footer";
import { Router } from "./router";


function App() {
  return (
    <div className="App">
      <Router />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
