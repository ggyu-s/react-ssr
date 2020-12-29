import { Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
}

export default App;
