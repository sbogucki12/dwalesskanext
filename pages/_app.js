import "../styles/globals.css";
import { Header, Title, Footer, FAB } from "../components";

function MyApp({ Component, pageProps, children }) {
  return (
    <div>
      <Header />
      <Title />
      <Component {...pageProps} />
      <Footer />
      <FAB />
    </div>
  );
}

export default MyApp;
