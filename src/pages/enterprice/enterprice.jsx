import React from 'react' ;
import "./enterprice.scss";
import { Banner } from '../../components';
import { Enterprice,banner,services1} from '../../images';
import { Agency, Services ,About,About2, Process , Testimonials ,CaseStudies , Countries} from '../../components';
const Home = () => {
    return (
        <>
           <Banner  
                banner_bg={banner}
                banner_sub_title="Enterprice"
                banner_title="Boost your global payments network"
                banner_description="Power your payments and send instant, reliable and secure payouts to cards, accounts and wallets around the world."
                banner_img={Enterprice}
                banner_img_alt="Enterprice"
           > 
           </Banner>
           
           <section className='info-boxes'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='info-boxes-inner'>
                                <figure>
                                    <img src={services1} alt=''/>
                                </figure>
                                <h3>Reduce your payment costs</h3>
                                <p>Avoid unnecessary surprises with transparent, market-leading FX rates and low-cost payments.</p>
                            </div>
                        </div>   
                        <div className='col-md-4'>
                            <div className='info-boxes-inner'>
                                <figure>
                                    <img src={services1} alt=''/>
                                </figure>
                                <h3>Reduce your payment costs</h3>
                                <p>Make instant payments from your existing platform or infrastructure through a single API integration.</p>
                            </div>
                        </div> 
                        <div className='col-md-4'>
                            <div className='info-boxes-inner'>
                                <figure>
                                    <img src={services1} alt=''/>
                                </figure>
                                <h3>Reduce your payment costs</h3>
                                <p>Make instant payments from your existing platform or infrastructure through a single API integration.</p>
                            </div>
                        </div>  
                    </div> 
                </div>
           </section>
           <Services  
                    iconBg="#5956E8"
                    iconImage=""
                    subTitle=""
                    title="High-impact services to take your business to the next level"
                    buttonText="" 
            ></Services>

        </> 
    )
}

export default Home
