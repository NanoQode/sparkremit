import React from 'react'  
import Container from 'react-bootstrap/Container'; 
import Accordion from 'react-bootstrap/Accordion'; 
import Title from '../title/title';
import "./case-studies.scss"
import {caseStudies2} from '../../images/';

const CaseStudies = ({ iconBg,iconImage, subTitle,title,buttonText }) => {
  return (
    <section className='case-studies-wrap'>
        <Container>
            <Title iconBg={iconBg} iconImage={iconImage} subTitle={subTitle} title={title} buttonText={buttonText}></Title>


            <div className='case-studies-faq'>
                <div className='left-faq'>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Directly to bank cards</Accordion.Header>
                    <Accordion.Body>
                    We deliver money directly to any bank account in Luxembourg. *For transfers to bank accounts Paysend fee is 0 € until February 1, 2023.
            Money is usually transferred on the same day.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Directly to bank accounts</Accordion.Header>
                    <Accordion.Body>
                    We deliver money directly to any bank account in Luxembourg. *For transfers to bank accounts Paysend fee is 0 € until February 1, 2023.
            Money is usually transferred on the same day.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Paysend Link</Accordion.Header>
                    <Accordion.Body>
                    We deliver money directly to any bank account in Luxembourg. *For transfers to bank accounts Paysend fee is 0 € until February 1, 2023.
            Money is usually transferred on the same day.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </div>
                <div className='right-img'>
                    <div className='right-image-wrap'>
                        <figure>
                            <img src={caseStudies2} alt='' />
                        </figure>
                    </div>

                </div>
            </div>

            <div className='case-studies-statics'>
                <ul>
                    <li>
                        <div className='statics-inner'>
                            <h4>325
                                <span>+</span>
                            </h4>
                            <p>Clients 
Worldwide</p>
                        </div>
                    </li>
                    <li>
                        <div className='statics-inner'>
                            <h4>970
                                <span>+</span>
                            </h4>
                            <p>Projects 
Completed</p>
                        </div>
                    </li>
                    <li>
                        <div className='statics-inner'>
                            <h4>70
                                <span>+</span>
                            </h4>
                            <p>Team 
Members</p>
                        </div>
                    </li>
                    <li>
                        <div className='statics-inner'>
                            <h4>80m
                                <span>+</span>
                            </h4>
                            <p>Revenue
Generated</p>
                        </div>
                    </li>
                </ul>
            </div>

 
        </Container>
    </section>
  )
}

export default CaseStudies

