import React from 'react'    
import "./banner.scss"; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Banner = ({ banner_bg,banner_sub_title,banner_title, banner_description,banner_img,banner_img_alt }) => {
  return (
    <>
     <section className='mt-banner ss'  style={{backgroundImage : 'url('+ banner_bg +')'}}>
        <Container>
            <div className='row'>
                <div className='col-xxl-8 col-lg-7 col-12'>
                    <div className='mt-banner-title'>
                        <span>{banner_sub_title}</span>
                        <h1>{banner_title}</h1>
                        <p>{banner_description}</p>
                        <Button variant="primary">Get started</Button> 
                    </div>  
                </div>
                <div className='col-xxl-4 col-lg-5 col-12 right-sec'>
                    <figure>
                        <img src={banner_img} alt={banner_img_alt}/>   
                    </figure>
                </div>
            </div>
        </Container>
     </section>
    </> 
  )
}

export default Banner

