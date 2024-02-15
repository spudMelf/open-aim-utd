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
import StatView from './Topics/StatModels/view';
import NNView from './Topics/NN/view';
import IntroMathView from './Topics/IntroMath/view';
import CVView from './Topics/CV/view';
import NLPView from './Topics/NLP/view';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/open-aim-utd" element={<Home />}></Route>
          <Route
            exact
            path="/open-aim-utd/Topics/Working-with-data/introduction-to-data"
            element={<DataIntro />}
          ></Route>
          <Route
            exact
            path="/open-aim-utd/Topics/Working-with-data/view"
            element={<DataView />}
          ></Route>
          <Route
            exact
            path="/open-aim-utd/Topics/StatModels/view"
            element={<StatView />}
          ></Route>
          <Route
            exact
            path="/open-aim-utd/Topics/NN/view"
            element={<NNView />}
          ></Route>
          <Route
            exact
            path="/open-aim-utd/Topics/IntroMath/view"
            element={<IntroMathView />}
          ></Route>
          <Route
            exact
            path="/open-aim-utd/Topics/CV/view"
            element={<CVView />}
          ></Route>
          <Route
            exact
            path="/open-aim-utd/Topics/NLP/view"
            element={<NLPView />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
