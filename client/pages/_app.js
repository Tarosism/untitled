import "../style/globals.css";
import "../style/slick-carousel/slick/slick.css";
import "../style/slick-carousel/slick/slick-theme.css";
import wrapper from "../store/configureStore";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
