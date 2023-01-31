import React from 'react' 
import "./countries.scss";
import Container from 'react-bootstrap/Container'; 

import { countriesList } from '../../constant';

const Countries = () => {
  return (
    <section className='countries-wrap'>
        <Container>
            <div className='countries-title'>
                <h3>Supported Countries</h3>
                <p>We deliver money to 170 countries worldwide</p>
            </div>

            <div className='countries-list'>
                <ul>{
                    countriesList?.map((item) =>
                    (
                    <li>
                        <figure>
                            <img src={item.icon} alt=""></img>
                        </figure>
                        <p>{item.name}</p>
                    </li>
                     ))}
                </ul>
            </div> 
        </Container>
    </section>
  )
}

export default Countries