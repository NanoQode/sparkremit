import React from "react";
import "../../App.scss";
import "./banner-inner-pages.scss";
import { Container } from "react-bootstrap";

const BannerInnerPages = function ({ bannerBg, bannerTitle }) {
    return (
        <div className="banner-inner-pages" style={{ backgroundImage: "url(" + bannerBg + ")" }}>
            <Container>
                <h1>{bannerTitle}</h1>
            </Container>
        </div>
    )
}

export default BannerInnerPages;