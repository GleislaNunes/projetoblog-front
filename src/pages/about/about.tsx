import{Link} from 'react-router-dom'
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
export function About() {
  return (
    <div className='container-about'>
      <Navbar/>
      <div></div>
      <footer className='footer-div'>
        <Footer></Footer>
      </footer>
    </div>
  );
}