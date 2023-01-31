import React from 'react' 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import "./services.scss" 
import Title from '../title/title'; 
import { servicesData } from '../../constant'; 
import {nextIcon} from "../../images";

const Services = ({ iconBg,iconImage, subTitle,title,buttonText }) => {
  return (
    <section className='services-wrap'>
        <Container>
            <Title iconBg={iconBg} iconImage={iconImage} subTitle={subTitle} title={title} buttonText={buttonText}></Title>

            <div className='services-outer'>
            {
                    servicesData?.map((item) =>
                    (
                <div className='seervices-inner'>
                    <figure>
                        <img src={item.icons} alt=''/>
                    </figure>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Button variant="primary">Read More <img src={nextIcon}></img> </Button>
                </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default Services
