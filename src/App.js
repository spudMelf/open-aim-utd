import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate,
} from "react-router-dom";

import Home from "./home";

//import data resources here
import DataIntro from "./Topics/Working-with-data/introduction-to-data";
import DataView from "./Topics/Working-with-data/view";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/open-aim-utd" element={<Home />}></Route>
          <Route
            exact
            path="/open-aim-utd/Working-with-data/introduction-to-data"
            element={<DataIntro />}
          ></Route>
          <Route
            exact
            path="/open-aim-utd/Working-with-data/view"
            element={<DataView />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
