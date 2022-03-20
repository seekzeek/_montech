import "../../public/assets/fonts/Poppins/fonts.css";
import "../../public/assets/fonts/Inter/fonts.css";
import "../../public/assets/fonts/Montserrat/fonts.css";
import "../../public/assets/fonts/Aventir/fonts.css";
import "../styles/globals.scss";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
