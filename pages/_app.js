import '../styles/globals.css';
import { Header, Title, Footer } from '../components';

function MyApp({ Component, pageProps, children }) {
  return (
  <div>
    <Header />
    <Title />
    <Component {...pageProps} />
    <Footer />
  </div>)
}

export default MyApp
