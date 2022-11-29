import "../styles/globals.css";
import NavBar from "../components/Navbar";
import { Provider } from "react-redux";
import store from "../redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
