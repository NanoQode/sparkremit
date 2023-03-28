import React from 'react'
import Container from 'react-bootstrap/Container';
import { about1, about2, about3, about4, about5 } from '../../images';
import Title from '../title/title';
import "./about.scss"

const About = ({ iconBg, iconImage, subTitle, title, buttonText }) => {
    return (
        <section className='about-wrap'>
            <Container>

                <div className='about-img'>
                    <figure>
                        <span style={{ backgoundImage: "" }}></span>
                        <img src={about2} alt=''></img>
                    </figure>
                    <a>Get link via QR-code</a>
                </div>
                <div className='about-text'>
                    <Title iconBg={iconBg} iconImage={about1} subTitle={subTitle} title={title} buttonText={buttonText}></Title>
                    <div className='about-description'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ftyuu Ipsum has been the industry's standard book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                    <ul className='about-inner'>
                        <li>
                            <figure>
                                <img src={about3} alt=''></img>
                            </figure>
                            <div className='about-inner-text'>
                                <h4>Get on Apple Store</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src={about4} alt=''></img>
                            </figure>
                            <div className='about-inner-text'>
                                <h4>Get on Apple Store</h4>
                                <p>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem.</p>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src={about5} alt=''></img>
                            </figure>
                            <div className='about-inner-text'>
                                <h4>Get on Apple Store</h4>
                                <p>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem.</p>
                            </div>
                        </li>
                    </ul>
                </div>


            </Container>
        </section>
    )
}

export default About

