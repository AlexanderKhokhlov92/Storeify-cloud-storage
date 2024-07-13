import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import store from "./redux/store.js";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
