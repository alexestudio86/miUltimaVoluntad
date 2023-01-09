import 'w3-css/w3.css';
import './app.css';
import { Notice } from './components/Notice';
import { Navbar } from "./components/Navbar";
import { Header } from './components/Header';
import { Features } from './components/Features'
import { Categories } from './components/Categories';
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='w3-row h-100 w3-light-gray'>
      <Notice />
      <Navbar />
      <Header />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
}

export default App