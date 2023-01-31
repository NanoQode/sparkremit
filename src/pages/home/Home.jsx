import React from 'react' ;
import { Agency, Services ,About,About2, Process , Testimonials ,CaseStudies , Countries} from '../../components';
import { servicesIcon , process1 ,testimonial1 , caseStudies1 ,benefitsIcon ,about2_1} from '../../images/';
const Home = () => {
    return (
        <>
            <Agency></Agency>
            <Services  
                    iconBg="#5956E8"
                    iconImage={servicesIcon}
                    subTitle="01 . Services"
                    title="High-impact services to take your business to the next level"
                    buttonText="Our Services" 
            ></Services>
            <About
                iconBg="#FFDC60"
                iconImage="aa"
                subTitle="02 . About Us"
                title="Get the Paysend app today!"
                buttonText=""
             ></About>
            <Process
                iconBg="#292930"
                iconImage={process1}
                subTitle="03 . Proccess"
                title="How to send money to Luxembourg?"
                buttonText="" 
            ></Process>
            <Testimonials
                iconBg="#F5B7FF"
                iconImage={testimonial1}
                subTitle=" 04 . Testimonial"
                title="We work with customers across all industries"
                buttonText="" 
            ></Testimonials>
            <CaseStudies 
                iconBg="#F96A4B"
                iconImage={caseStudies1}
                subTitle="05 . CASE STUDIES"
                title="Available delivery methods to Luxembourg"
                buttonText="Add Button Here" 
            ></CaseStudies>
            <Countries></Countries>
            <About2
                iconBg="#CA87FF"
                iconImage={about2_1}
                subTitle="07 . Benifits"
                title="Benifit of working with Maruncy"
                buttonText=""
             ></About2>

        </> 
    )
}

export default Home
