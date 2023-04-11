import RouterView from "./router";
import {HashRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RouterView />
      </HashRouter>
    </Provider>
  );
}

export default App;
