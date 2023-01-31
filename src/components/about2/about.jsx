


import React from 'react' 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
 
import Accordion from 'react-bootstrap/Accordion';

import {about2_1,about2_2,about2_3,about2_4,about2_5} from '../../images';
import Title from '../title/title';
import "./about.scss"

const About2 = ({ iconBg,iconImage, subTitle,title,buttonText }) => {
  return (
    <section className='about-wrap about-left-title'>
        <Container>

            <div className='about-img w-50'>
                <Title iconBg={iconBg} iconImage={iconImage} subTitle={subTitle} title={title} buttonText={buttonText}></Title>
                <figure>
                    <span style={{backgoundImage : ""}}></span>
                    <img src={about2_5} alt=''></img>
                </figure> 
            </div>    
            <div className='about-text w-50'> 
                    <ul className='about-inner'>
                        <li>
                            <figure>
                                <img src={about2_2} alt=''></img>
                            </figure>
                            <div className='about-inner-text'>
                                <h4>Page Rankings</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src={about2_3} alt=''></img>
                            </figure>
                            <div className='about-inner-text'>
                                <h4>Site Optimisation</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src={about2_4} alt=''></img>
                            </figure>
                            <div className='about-inner-text'>
                                <h4>Reporting & Analysis</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </li>
                    </ul>
            </div>
               
           
        </Container>
    </section>
  )
}

export default About2

