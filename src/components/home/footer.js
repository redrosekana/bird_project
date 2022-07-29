import React from 'react';
import './footer.css'

function Footer() {
    return ( 
        <footer>
            <div className='container d-flex h-100 align-items-center justify-content-center'>
                <div className='row g-3 text-center'>
                    <div className='col-lg-4 boxfooter'>
                        <p >LOCATION</p>
                        <p >2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                    <div className='col-lg-4 boxfooter'>
                        <p>AROUND THE WEB</p>
                        <p>
                            <i className="fa-brands fa-facebook mx-1"></i>
                            <i className="fa-brands fa-instagram mx-1"></i>
                            <i className="fa-brands fa-twitter mx-1"></i>
                            <i className="fa-brands fa-line mx-1"></i>
                        </p>
                    </div>
                    <div className='col-lg-4 boxfooter'>
                        <p>ABOUT FREELANCER</p>
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;