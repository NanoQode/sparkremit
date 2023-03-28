import React from 'react';
import "./help.scss";  
import {nextIcon} from "../../images";

const Help = () => {
  return (
     <>
     <div className='inner-banner'>
        <div className='container'>
            <h1 className='text-center'>Help</h1>
            <div className='search-field'> 
                <input type='text' placeholder="Search" ></input>
            </div>
        </div>
     </div>
        <div className='help-page'>
            <div className='container'>
                <div className='related-articles'>
                    <ul>
                        <li><a>General <img src={nextIcon}></img></a></li>
                        <li><a>Your profits and limits <img src={nextIcon}></img></a></li>
                        <li><a>Transfers <img src={nextIcon}></img></a></li>
                    </ul>
                </div>
                {/* <div className='recent-activity'>
                    <h3>Recent Activity</h3>
                    <ul>
                        <li>
                            <div className='recent-left'>
                                <h4>About limits. Common questions</h4>
                                <p>How to take photos of documents</p>
                            </div>
                            <div className='recent-right'>
                                <p>Article created 6 months ago <span>0</span></p>
                            </div>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
     </>

  )
}

export default Help
