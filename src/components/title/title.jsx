import React from 'react' 
import Button from 'react-bootstrap/Button';
import "./title.scss";
import {nextIcon} from "../../images";

const Title = ({ iconBg,iconImage, subTitle,title,buttonText }) => {
  return (
    <div className='mt-heading'>
        <div className='d-flex  mt-heading-wrap'>
            <div className='icon-title'>
                <div className='icon' style={{backgroundColor: iconBg}}>
                    <img src={iconImage} alt="img"/>
                </div>
                <div className='sub-title'>
                    <h3><span>//</span>{subTitle}</h3>
                    <h2>{title}</h2>
                </div>
            </div>
            {buttonText &&
            <div className='right-btn'>
                <Button variant="primary">{buttonText} <img src={nextIcon}  alt="img"></img></Button>
            </div>
            } 
        </div>

    </div>
  )
}

export default Title
