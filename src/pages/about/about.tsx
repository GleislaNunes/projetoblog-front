import{Link} from 'react-router-dom'
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
export function About() {
  return (
    <div className='container-about'>
      <Navbar/>
      <img src="./" alt="" />
      <footer className='footer-div'>
        <Footer></Footer>
      </footer>
    </div>
  );
}