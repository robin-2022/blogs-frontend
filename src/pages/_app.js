import '@/styles/globals.css';
import LoginPage from './login/login';
import 'bootstrap/scss/bootstrap.scss';

export default function App({ Component, pageProps }) {
  if (Component === LoginPage){
  return <Component {...pageProps} />
  }
  return <LoginPage />
}
