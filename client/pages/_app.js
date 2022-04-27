import "../style/globals.css";
import "../style/slick-carousel/slick/slick.css";
import "../style/slick-carousel/slick/slick-theme.css";
import wrapper from "../store/configureStore";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
