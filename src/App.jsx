import RouterView from "./router";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <RouterView />
      </HashRouter>
    </>
  );
}

export default App;
