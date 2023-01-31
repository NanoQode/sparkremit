import React from "react"; 
import './footer.scss' ;
import {footer1,footer2,footer3,footer4,footer5,footer6,footer7,footer8 } from "./../../../images";
const Footer = () => {

 
  return (
    <>
        <footer>
            <div className="container">
                <div className="left-subscribe">
                    <div className="footer-logo">
                      <img src={footer1}alt=""></img>
                    </div>
                    <figure>
                      <img src={footer2} alt="" ></img>
                    </figure>
                    <h4>Subscribe now</h4>
                    <p>Industry's standard from dummy and make a type  book. </p>
                    <input type="text" placeholder="Enter your Email"></input>
                    <a>Subscribe</a>
                </div>
                <div className="footer-right">
                    <div className="footer-top">
                      {/* get in touch */}
                      <div className="get-in-touch">
                          <h3><img src={footer3} alt=""></img> Get in touch with</h3>
                          <a>+1 917 000 1212</a>
                          <p> nextlevel@marketing.com</p>
                      </div>
                      {/* Location */}
                      <div className="mt-locations">
                          <h3><img src={footer4} alt=""></img> Location</h3>
                          <p>10 Suna House 65 Rivington Street London  EC2A 3QQ</p>
                          <p>Pakistan</p>
                          <img src={footer5} alt=""></img>
                          <a>English</a>
                      </div>
                    </div>
                    {/* Footer Links */}
                    <div className="footer-links">
                        <div className="mt-links-wrap">
                          <h3><img src={footer6} alt=""></img> Pages</h3>
                          <ul>
                            <li>
                              <a>Home</a>
                            </li>
                            <li>
                              <a>About</a>
                            </li>
                            <li>
                              <a>Blog</a>
                            </li>
                            <li>
                              <a>Pricing Single</a>
                            </li>
                            <li>
                              <a>Contact</a>
                            </li>
                            <li>
                              <a>Services</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-links-wrap">
                          <h3><img src={footer7} alt=""></img> Uitility Pages</h3>
                          <ul> 
                            <li>
                              <a>Styleguide</a>
                            </li>
                            <li>
                              <a>404 Not Found</a>
                            </li>
                            <li>
                              <a>Password Protected</a>
                            </li>
                            <li>
                              <a>Licenses</a>
                            </li>
                            <li>
                              <a>Changelog</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-links-wrap">
                          <h3><img src={footer8} alt=""></img> Follows</h3>
                          <ul>
                            <li>
                              <a>Facebook</a>
                            </li>
                            <li>
                              <a>Twitter</a>
                            </li>
                            <li>
                              <a>Instagram</a>
                            </li>
                            <li>
                              <a>LinkedIn</a>
                            </li> 
                          </ul>
                        </div>
                    </div> 
                    {/* Copyright */}
                    <div className="copyright">
                      <p>Paysend Group © 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
