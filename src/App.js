import { Outlet } from 'react-router-dom';
import NavBar from './views/navbar/navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <footer className='footer'>
        <div className='footer-block'>
          <div className='footer-block-left'>
            <p>Find me on</p>
          </div>
          <div className='footer-block-right'>
            <div className='footer-block-right-linkedin'>
              <a href="https://www.linkedin.com/in/lingadahalli-srinath-215475232/" rel="noreferrer" target="_blank">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
            <div className='footer-block-right-email'>
              <a href="mailto:lingadahallisrinath06@gmail.com?subject=subject text" rel="noreferrer" target="_blank">
                <i class="bi bi-envelope-at"></i>
              </a>
            </div>
            <div className='footer-block-right-whatsapp'>
              <a href="https://wa.me/+919642031606" rel="noreferrer" target="_blank">
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
            <div className='footer-block-right-telephone'>
              <a href="tel: +91 9642031606" rel="noreferrer" target="_blank">
                <i class="bi bi-telephone"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
