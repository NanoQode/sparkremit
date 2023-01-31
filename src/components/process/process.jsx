


import React from 'react' 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
 
import Accordion from 'react-bootstrap/Accordion';

import Title from '../title/title';
import "./process.scss";
import { process2,process3,process4 } from '../../images';

const Process = ({ iconBg,iconImage, subTitle,title,buttonText }) => {
  return (
    <section className='process-wrap'>
        <Container>
            <div className='process-inner'>
            <Title iconBg={iconBg} iconImage={iconImage} subTitle={subTitle} title={title} buttonText={buttonText}></Title>

                <div className='process-list'>
                    <div className='process-list-inner'>
                        <figure>
                            <img src={process2} alt=''></img>
                        </figure>
                        <div className='process-text'>
                            <h3>Marketing Plan</h3>
                            <p>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
                        </div>
                    </div>
                    <div className='process-list-inner'>
                        <figure>
                            <img src={process3} alt=''></img>
                        </figure>
                        <div className='process-text'>
                            <h3>Work Execution</h3>
                            <p>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
                        </div>
                    </div>
                    <div className='process-list-inner'>
                        <figure>
                            <img src={process4} alt=''></img>
                        </figure>
                        <div className='process-text'>
                            <h3>Growth & Scale</h3>
                            <p>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Process

