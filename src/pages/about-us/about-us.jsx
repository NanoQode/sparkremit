import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "../../App.scss";
import "./about-us.scss";
import BannerInnerPages from "../../components/banner-inner-pages/banner-inner-pages";
import bannerBg from "../../images/banner-blogs.png";
import consumer from "../../images/consumer.png";
import pippaClarkson from "../../images/pippa-clarkson.jpg";
import goal from "../../images/goal.svg";
import megaphone from "../../images/megaphone.svg";
import check from "../../images/check.svg";
import handShake from "../../images/hand-shake.svg";
import mapMarker from "../../images/map-marker.svg";
import fb from "../../images/fb.svg";
import twitter from "../../images/twitter.svg";
import usa from "../../images/usa.svg";
import canada from "../../images/canada.svg";
import insta from "../../images/insta.svg";
import { Link } from "react-router-dom";
import HeadingWithIcon from "../../components/heading-with-icon/heading-with-icon";
import efficiency from "../../images/efficiency.png";
import accountability from "../../images/accountability.png";
import commitment from "../../images/commitment.png";
import teamWork from "../../images/team-work.png";
import { IoCallOutline } from 'react-icons/io5';
import { IoMailOutline } from 'react-icons/io5';
// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const AboutUs = function () {
    return (
        <div className="about-us-wrap">
            <BannerInnerPages bannerBg={bannerBg} bannerTitle="About Us" />
            <div className="milestones sec-padding">
                <Container>
                    <ul>
                        <li><div className="m-counter">325<span className="color-blue">+</span></div>Clients <br /> worldwide</li>
                        <li><div className="m-counter">975<span className="color-red">+</span></div>Projects <br /> completed</li>
                        <li><div className="m-counter">70<span className="color-yellow">+</span></div>Team <br /> members</li>
                        <li><div className="m-counter">85m<span className="color-green">+</span></div>Revenue <br /> generated</li>
                    </ul>
                </Container>
            </div>
            <div className="consumer sec-padding">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className="consumer-image">
                                <img src={consumer} alt="" />
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="consumer-text">
                                <HeadingWithIcon icon={goal} subTitle="// 01 . About Us" title="Paysend Consumer"></HeadingWithIcon>
                                <div className="consumer-tags">
                                    <span className="tag tag-not-clickable"><img src={goal} alt="" />Development Scale</span>
                                    <span className="tag tag-not-clickable"><img src={megaphone} alt="" />Research & Strategy</span>
                                </div>
                                <p>Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla aliquam
                                    Aliquam vestibulum libero morbi blandit cursus risus. Laoreet non curabitur gravida arcu ac tortor semper vivera nam libero justo laoreet mollis aliquam ut porttitor leo a diam.</p>
                                <Link to="/" className="main-button m-b-bordered">Send Money</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="core-values sec-padding">
                <HeadingWithIcon icon={check} subTitle="// 02 . OUR VALUES" title="The core values behind
our work"></HeadingWithIcon>
                <Swiper className="swiper-core-values"
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3.5}
                    navigation
                    breakpoints={{
                        320: {
                            slidesPerView: 1.25,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1200: {
                            slidesPerView: 3.5,
                        },
                    }}>
                    <SwiperSlide>
                        <div className="c-v-container">
                            <div className="c-v-icon">
                                <img src={efficiency} alt="" />
                            </div>
                            <div className="c-v-text">
                                <h3>Efficiency</h3>
                                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="c-v-container">
                            <div className="c-v-icon">
                                <img src={accountability} alt="" />
                            </div>
                            <div className="c-v-text">
                                <h3>Accountability</h3>
                                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="c-v-container">
                            <div className="c-v-icon">
                                <img src={commitment} alt="" />
                            </div>
                            <div className="c-v-text">
                                <h3>Commitment</h3>
                                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="c-v-container">
                            <div className="c-v-icon">
                                <img src={teamWork} alt="" />
                            </div>
                            <div className="c-v-text">
                                <h3>Team Work</h3>
                                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="c-v-container">
                            <div className="c-v-icon">
                                <img src={efficiency} alt="" />
                            </div>
                            <div className="c-v-text">
                                <h3>Lorem</h3>
                                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="c-v-container">
                            <div className="c-v-icon">
                                <img src={efficiency} alt="" />
                            </div>
                            <div className="c-v-text">
                                <h3>Ipsum</h3>
                                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="careers sec-padding">
                <HeadingWithIcon icon={handShake} subTitle="// 03 . OUR TEAM" title="Careers at Paysend"></HeadingWithIcon>
                <div className="team-wrap">
                    <Container>
                        <Row>
                            <Col md={4} sm={6}>
                                <div className="team-container">
                                    <div className="team-image">
                                        <img src={pippaClarkson} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h3>Pippa Clarkson</h3>
                                        <h6>Lead Manager</h6>
                                        <ul className="l-s-none">
                                            <li><Link to="/"><img src={fb} alt="" /></Link></li>
                                            <li><Link to="/"><img src={twitter} alt="" /></Link></li>
                                            <li><Link to="/"><img src={insta} alt="" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="team-container">
                                    <div className="team-image">
                                        <img src={pippaClarkson} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h3>Pippa Clarkson</h3>
                                        <h6>Lead Manager</h6>
                                        <ul className="l-s-none">
                                            <li><Link to="/"><img src={fb} alt="" /></Link></li>
                                            <li><Link to="/"><img src={twitter} alt="" /></Link></li>
                                            <li><Link to="/"><img src={insta} alt="" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="team-container">
                                    <div className="team-image">
                                        <img src={pippaClarkson} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h3>Pippa Clarkson</h3>
                                        <h6>Lead Manager</h6>
                                        <ul className="l-s-none">
                                            <li><Link to="/"><img src={fb} alt="" /></Link></li>
                                            <li><Link to="/"><img src={twitter} alt="" /></Link></li>
                                            <li><Link to="/"><img src={insta} alt="" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="visit-us sec-padding">
                <Container>
                    <HeadingWithIcon icon={mapMarker} subTitle="// 04 . OUR OFFICES" title="Come and visit us all around the world"></HeadingWithIcon>
                    <Link to="/" className="main-button m-b-dark">Get in Touch</Link>
                </Container>
                <div className="v-u-wrap">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className="v-u-container">
                                    <img src={usa} alt="" />
                                    <h3>San Francisco, USA</h3>
                                    <p>1650 Page. San Francisco, California(CA), 94117</p>
                                    <Link to="/"><IoCallOutline />(414) 809 - 2567</Link>
                                    <Link to="/"><IoMailOutline />Contact@marketingagency.com</Link>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="v-u-container">
                                    <img src={canada} alt="" />
                                    <h3>San Francisco, USA</h3>
                                    <p>1650 Page. San Francisco, California(CA), 94117</p>
                                    <Link to="/"><IoCallOutline />(414) 809 - 2567</Link>
                                    <Link to="/"><IoMailOutline />Contact@marketingagency.com</Link>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="v-u-container">
                                    <img src={usa} alt="" />
                                    <h3>San Francisco, USA</h3>
                                    <p>1650 Page. San Francisco, California(CA), 94117</p>
                                    <Link to="/"><IoCallOutline />(414) 809 - 2567</Link>
                                    <Link to="/"><IoMailOutline />Contact@marketingagency.com</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;