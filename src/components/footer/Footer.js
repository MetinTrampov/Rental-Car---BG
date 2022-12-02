import './Footer.scss';
import linkedin from './../../img/linkedin.png';
import github from './../../img/github.png';

export function Footer() {
  return (
    <div className="footer">
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-5 mt-md-0 mt-3">
              <br></br>
              <h5 className="text-uppercase">Best Bulgarian Rental Site</h5>
              <p>This is my first  ReactJS project i hope u like it ! ❤️</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-5 mb-md-0 mb-8 ">

              <ul id="ul_top_hypers" className="list-unstyled">
            
              <li >
              <h4> !</h4>
                  <a href="https://github.com/MetinTrampov/react">
                    <img   src={github} alt="Logo" />
                  </a>
                </li>
                <li>
                <h4>Social   links :</h4>
                  <a href="https://www.linkedin.com/in/metin-trampov-a595071b0/">
                    <img src={linkedin} alt="Logo" />
                  </a>
                
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright: ПУ  "Паисий Хилендарски" 
        </div>
      </footer>
    </div>
  );
}
