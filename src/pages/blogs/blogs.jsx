import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import "../../App.scss";
import "./blogs.scss";
import BannerInnerPages from "../../components/banner-inner-pages/banner-inner-pages";
import bannerBg from "../../images/banner-blogs.png";
import { Link } from "react-router-dom";
import iconDoc from "../../images/doc.svg";
import imgMarketing from "../../images/marketing.png";
import badHire from "../../images/bad-hire.png";
import Post from "../../components/post/post";
// import HeadingWithIcon from "../../components/heading-with-icon/heading-with-icon";

const Blogs = function () {
    return (
        <>
            <BannerInnerPages bannerBg={bannerBg} bannerTitle="News & Blog" />
            <div className="blogs-header">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="b-h-left">
                                <div className="b-h-icon">
                                    <img src={iconDoc} alt="doc" />
                                </div>
                                <div className="b-h-text">
                                    <h6>// 01 . Articles</h6>
                                    <h2>Browse our content on sending money</h2>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="search-wrap">
                                <Form>
                                    <Form.Group className="mb-3" controlId="search-blog">
                                        <Form.Control type="search" placeholder="Search the blog..." />
                                    </Form.Group>
                                    <Button className="main-button" type="submit">
                                        Search
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="blog-big">
                <Container>
                    <div className="b-b-wrap">
                        <Row className="align-items-center">
                            <Col md={7}>
                                <div className="b-b-text">
                                    <div className="tag-n-date">
                                        <Link to="/" className="tag">Marketing</Link>
                                        <span>September 1, 2022</span>
                                    </div>
                                    <h2>4 easy steps to send money to Peru</h2>
                                    <p>Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.</p>
                                    <Link to="/" className="main-button">Read More <i class="fa-solid fa-circle-chevron-right"></i></Link>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="b-b-img">
                                    <img src={imgMarketing} alt="doc" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="latest-posts sec-padding">
                <Container>
                    <div className="l-p-filter">
                        <h2>Latest Posts</h2>
                        <ul className="filter-buttons list-unstyled">
                            <li>
                                <Button className="main-button m-b-bordered active" type="button">
                                    All
                                </Button></li>
                            <li>
                                <Button className="main-button m-b-bordered" type="button">
                                    Growth
                                </Button>
                            </li>
                            <li>
                                <Button className="main-button m-b-bordered" type="button">
                                    Content
                                </Button>
                            </li>
                            <li>
                                <Button className="main-button m-b-bordered" type="button">
                                    Social Media
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="l-p-wrap">
                        <Row>
                            <Col md={6}>
                                <Post postImg={badHire} postTitle="The Cost of a Bad Hire: The Importance of 
Strong Values in Interview Process" postTag="Marketing" postDate="september 1, 2022"></Post>
                            </Col>
                            <Col md={6}>
                                <Post postImg={badHire} postTitle="The Cost of a Bad Hire: The Importance of 
Strong Values in Interview Process" postTag="Marketing" postDate="september 1, 2022"></Post>
                            </Col>
                            <Col md={6}>
                                <Post postImg={badHire} postTitle="The Cost of a Bad Hire: The Importance of 
Strong Values in Interview Process" postTag="Marketing" postDate="september 1, 2022"></Post>
                            </Col>
                            <Col md={6}>
                                <Post postImg={badHire} postTitle="The Cost of a Bad Hire: The Importance of 
Strong Values in Interview Process" postTag="Marketing" postDate="september 1, 2022"></Post>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Blogs;