


import React from 'react'  
import Container from 'react-bootstrap/Container';  
import "./testimonial.scss";
import Title from '../title/title'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { testimonial2 ,testimonial4,testimonial5} from "../../images";


const options = {
  margin: 26,
  responsiveClass: true,
  nav: true,
  loop: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  touchDrag: false,
  mouseDrag: false,
  freeDrag: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      touchDrag: true,
    },
    768: {
      items: 2,
      nav: true,
      touchDrag: true,
    }
  },
};

const Testimonials = ({ iconBg,iconImage, subTitle,title,buttonText }) => {
  return (
    <section className='testimonal-wrap'>
        <Container>
            <Title iconBg={iconBg} iconImage={iconImage} subTitle={subTitle} title={title} buttonText={buttonText}></Title>

            <OwlCarousel  {...options} >
              
            <div className='item  '>
                  <div className="review-outer">
                      <div className='image-raring'>
                          <figure>
                            <img src={testimonial2} alt="img"/>
                          </figure>
                          <div className='rating'>
                            <img src={testimonial4} alt="img"/>
                          </div>
                      </div>
                      <div className='review-text'>
                        <p>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. </p>
                      </div>
                  </div>
                  <div className='user-name'>
                    <figure>
                      <img src={testimonial5} alt="img"/>
                    </figure>
                    <h4>John Carter
                      <span>Marketing Lead at Google</span>
                    </h4>
                  </div> 
                </div> 
                <div className='item  '>
                  <div className="review-outer">
                      <div className='image-raring'>
                          <figure>
                            <img src={testimonial2} alt="img"/>
                          </figure>
                          <div className='rating'>
                            <img src={testimonial4} alt="img"/>
                          </div>
                      </div>
                      <div className='review-text'>
                        <p>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. </p>
                      </div>
                  </div>
                  <div className='user-name'>
                    <figure>
                      <img src={testimonial5} alt="img"/>
                    </figure>
                    <h4>Peeter pawl
                      <span>Designer</span>
                    </h4>
                  </div> 
                </div> 
                <div className='item  '>
                  <div className="review-outer">
                      <div className='image-raring'>
                          <figure>
                            <img src={testimonial2} alt="img"/>
                          </figure>
                          <div className='rating'>
                            <img src={testimonial4} alt="img"/>
                          </div>
                      </div>
                      <div className='review-text'>
                        <p>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. </p>
                      </div>
                  </div>
                  <div className='user-name'>
                    <figure>
                      <img src={testimonial5} alt="img"/>
                    </figure>
                    <h4>John Carter
                      <span>Marketing Lead at Google</span>
                    </h4>
                  </div> 
                </div> 
                <div className='item  '>
                  <div className="review-outer">
                      <div className='image-raring'>
                          <figure>
                            <img src={testimonial2} alt="img"/>
                          </figure>
                          <div className='rating'>
                            <img src={testimonial4} alt="img"/>
                          </div>
                      </div>
                      <div className='review-text'>
                        <p>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. </p>
                      </div>
                  </div>
                  <div className='user-name'>
                    <figure>
                      <img src={testimonial5} alt="img"/>
                    </figure>
                    <h4>Peeter pawl
                      <span>Designer</span>
                    </h4>
                  </div> 
                </div> 
            </OwlCarousel>
           
        </Container>
    </section>
  )
}

export default Testimonials

