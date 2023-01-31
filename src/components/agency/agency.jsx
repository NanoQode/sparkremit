import React from 'react'; 
import "./agency.scss"; 
import {agency1,agency2,agency3,agency4,agency5,agency6,agency7} from "../../images";
const Agency = ({ iconBg,iconImage, subTitle,title,buttonText }) => {
  return (
     <section className='agency'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='agency-title'>
                        <span>Agency</span>
                        <h1>Send money to <span>marketing</span> agency</h1>
                        <p>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt ius ex. Ut vis mazim erroribus forensibus.</p>
                    </div>
                    <div className='agency-btn'>
                        <a>Our Services</a>
                        <a>Get Started</a>
                    </div>
                    <div className='mt-agency-list'>
                        <ul>
                            <li>
                                <figure>
                                    <img src={agency1} alt=''/>
                                </figure>
                                <p>fast and hassle
free</p>
                            </li>
                            <li>
                                <figure>
                                    <img src={agency2} alt=''/>
                                </figure>
                                <p>Trusted by over 
6M customers</p>
                            </li>
                            <li>
                                <figure>
                                    <img src={agency3} alt=''/>
                                </figure>
                                <p>global 24/7
support</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4 right-sec'>
                        <div className='bg-effect'></div>
                    <div className='banner-form'>
                        <span class="banner-img-1">
                            <img src={agency4}></img>
                        </span>
                        <span class="banner-img-2">
                            <img src={agency6}></img>
                        </span>
                        <span class="banner-img-3">
                            <img src={agency5}></img>
                        </span>
                        <div className='input-group'>
                            <label>You Send</label>
                            <input type="text" ></input>
                            <select>
                                <option>EUR</option>
                            </select>
                        </div>
                        <div className='input-group'>
                            <label>Recipient Goals</label>
                            <input type="text" ></input>
                            <select>
                                <option>EUR</option>
                            </select>
                        </div>
                        <div className='mt-fees'>
                            <p><span>Fee:</span>
                                <span>1.50 EUR, incl. <img src={agency7}></img></span>
                            </p>
                            <p><span>Should arrive:</span>
                                <span>In a few minutes <img src={agency7}></img></span>
                            </p>
                        </div>
                        <a>Get Started</a>
                    </div>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Agency
