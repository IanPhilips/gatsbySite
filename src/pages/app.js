import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Typed from 'typed.js';
import { Slide, Fade } from "react-awesome-reveal";



import sampleEmail from "../assets/images/Sample_Email.png";
import phoneApp from "../assets/images/Phone_App.png";
import hero from "../assets/images/Hero_Image.png";
import frustration from "../assets/images/Frustration.png";
import labels from "../assets/images/Labels.png";
import contaminants from "../assets/images/Contaminants.png";
import quote1 from "../assets/images/Quote1.png";
import quote2 from "../assets/images/Quote2.png";
import quote3 from "../assets/images/Quote3.png";

import {
  MDBBtn,
} from 'mdbreact';


// eslint-disable-next-line no-unused-vars
let typed = null;
class IndexPage extends Component{

  componentDidMount() {
    typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
      loop:true, startDelay:3000, backDelay: 3000, typeSpeed:50, backSpeed: 50
    });
  }

  render(){
  return(
  <Layout>
    <Header />

    <header className="masthead">
      <img src={hero} alt={"earth"} style={{ height: "100%", width: "100%", objectFit: "cover" }}/>
      <div  style={{ position:"absolute", top:0, background: "rgba(100,100,100,.3)", height:"100%", width:"100%", objectFit:"cover" }}>

        <div className={"row d-flex justify-content-center align-content-center h-100"}>
          <div className="col-12 text-center" >
            <h1 className={"mx-auto typed-education-header"} >

                {/*Imagine a world <b> </b>*/}
              {/*Does my collection company recycle this coffee cup?*/}
              <div id="typed-strings">
                <p> Does my collection company recycle this coffee cup?</p>
                <p> Can I recycle this pizza box?</p>
                <p> Do I need to rinse out this container? </p>
                <p> Can I recycle number five plastic?</p>
              </div>
              {/*NECESSARY:*/}
              <span id="typed"></span>


            </h1>
            <h4 className={"mb-5 mx-auto"} style={{textTransform:"uppercase", fontWeight:"normal", fontSize:"20px"}} >
              From consumer to material recovery facility, our AI-Powered software is reshaping recycling.
            </h4>
            <Fade triggerOnce delay={500} >
            <MDBBtn href={"/contact"} >
                LEARN MORE
              </MDBBtn>
            </Fade>
          </div>
      </div>
      </div>
    </header>

    <section className="educationConsumers" id="educationConsumers">
      <div className="container" >
        <div className="row d-flex">
          {/*CONSUFED CONSUMERS*/}
          <div className=" text-center col-12">
            <h2> Consumers are Confused About Recycling, and it's Harming the Industry</h2>
            <hr/>
          </div>
          <div className="text-center col-12 col-md-3 my-auto">
            <Slide triggerOnce delay={0} direction={"left"}   >
              <img src={frustration} alt={"frustrated consumer"} className={"img-fluid shadow-image my-auto"}/>
            </Slide>
          </div>
          <div className="text-center col-12 col-md-6">
            <h2 className={"big-num mt-4"}> 92% </h2>
            <p className={"mx-4"}>
              According to the Grocery Manufacturers Association, 92% of consumers believe that recycling is
              <b> more confusing </b> than either doing taxes, building Ikea furniture, the stock market, or understanding
              the opposite sex.
            </p>
          </div>
          <div className="text-center col-12 col-md-3 my-auto">
            <Slide triggerOnce delay={0} direction={"right"}>
              <img src={labels} alt={"frustrated consumer"} className={"img-fluid shadow-image my-auto"}/>
            </Slide>
          </div>
        </div>

        {/*QUOTES*/}
        <div className="row mt-5">
          <div className="text-center col-12 col-md-4">
            <Fade triggerOnce delay={400} >
              <img src={quote1} alt={"frustrated consumer quote"} className={"img-fluid"}/>
            </Fade>
          </div>
          <div className="text-center col-12 col-md-4">
            <Fade triggerOnce delay={800} >
              <img src={quote2} alt={"frustrated consumer quote"} className={"img-fluid"}/>
            </Fade>
          </div>
          <div className="text-center col-12 col-md-4 ">
            <Fade triggerOnce delay={1200} >
              <img src={quote3} alt={"frustrated consumer quote"} className={"img-fluid"}/>
            </Fade>
          </div>
        </div>

      </div>
    </section>


    {/*EDUCATION PROGRAMS*/}
    <section className="educationPrograms" id="educationPrograms" style={{position:"relative"}}>
      <img src={contaminants} alt={"contaminants"} style={{ height: "100%", width: "100%", objectFit: "cover",  position:"absolute", top:0,}}/>
      <div  style={{ background: "rgba(100,100,100,.3)", height:"100%", width:"100%", objectFit:"cover" }}>
      <div className="container">
        <Fade triggerOnce delay={0} >

        <div className="row d-flex justify-content-center align-content-center">
          <div className="text-center col-12 ">
            <h2 className={"text-white"}>Education Programs are Key to Cutting Contamination</h2>
            <hr/>
            <h1 className={"text-white big-num mt-4"}>20%</h1>
          </div>
          <p className={"col-12 col-md-8 text-center text-white"}>
            Comprehensive recycling education programs, including curbside feedback,
            have been shown to <b>reduce residential contamination rates </b> by up to 20%.
            This vastly affects the ROI of recycling.
            Existing programs require boots on the ground, impact a limited number
            of customers, and the benefits can wear off as people move, products change,
            and MRF’s accept different materials.
          </p>
        </div>
        </Fade>
      </div>
      </div>
    </section>

    {/*EDUCATION PRODUCTS*/}

    <section className="educationProducts" id="educationProducts">
      <div className="container" >
        <Fade triggerOnce delay={0} >
          <div className={"row d-flex justify-content-center align-content-center mb-5"}>
          <div className="text-center col-12 ">
            <h2>We’re Making Recycling Mindlessly Easy, Profitable, & Universal</h2>
            <hr/>
          </div>
            <div className={"text-center col-12 col-md-8"}>
            <p>
              Our technology builds on today’s programs by making them automated,
              digital, affordable, continuous, and universal. In addition, our new
              mobile app revolutionizes how consumers interact with their recycling
              by completely removing confusion and recycling friction.
            </p>
            </div>
          </div>
        </Fade>

        <div className="row mt-5">
          <div className="col-lg-6 mt-5 mx-auto text-center">
            <Slide triggerOnce delay={0} direction={"left"} >
              <img src={phoneApp} alt={"phone app"}  style={{width:"100%"}}/>
            </Slide>
          </div>
          <div className="col-lg-6 mt-3 p-4">
            <Slide triggerOnce delay={0} direction={"right"} >
              <h5> AI Sorting Mobile App </h5>
              <p>
                Empower your customers to recycle correctly from the start.
                After all, you can order a pizza or latte with your phone,
                so why not let your phone do your recycling sorting too? Our
                app uses computer vision to identify an object, let the user
                know if their service provider accepts that item, and what steps
                should be taken before recycling.
              </p>
              <p>
                <b>Customers</b>
                <li>  Easily determine in seconds if an item is recyclable and steps needed  - no handouts, research, or thought required</li>
                <li>  Access list of items recyclable by their hauler</li>
                <li>  Always up to date with accepted materials and procedures</li>
              </p>
              <p>
                <b>Haulers</b>
                <li>  Update items and materials you can receive</li>
                <li> Send notificaitons to customers - new materials accepted, pickup delays or updates, and more</li>
              </p>
              <p>
                <b>Optional Expansions</b>
                <li>Combine with mobile app for comprehensive approach</li>
                <li>  Billing portal for customers</li>
                <li>  Real-time truck and status updates for customers</li>
              </p>

            </Slide>
            <Fade triggerOnce={true}>
              <MDBBtn href={"/contact"} className={"text-white mr-auto btn-tertiary"}>
                get started
              </MDBBtn>
            </Fade>
          </div>

        </div>

      </div>
    </section>


    <section className="bg-gray educationNumbers" id="educationNumbers" >
          <Fade delay={0} triggerOnce={true}>
      <div className={"row "}>
        <div className={"col-12 text-center mb-2"}>
          <h4>The Time to Transform Recycling is Now</h4>
          <hr/>
        </div>
        <div className={"col-12 col-md-6"}>
          <div className={"row"}>
            <div className={"col-6 col-sm-4"}>
              <h1 className={"big-num text-right"}>50%</h1>
            </div>
            <div className={"col-6 col-sm-7"}>
              <p className={"ml-md-3 ml-lg-0 "}>
                The EPA has set a National Recycling Goal to increase the national
                recycling rate to 50 percent by 2030. Their first measure to
                accomplish this is to recuce contamination.
              </p>
            </div>
          </div>
        </div>
        <div className={"col-12 col-md-6"}>
          <div className={"row"}>
            <div className={"col-6 col-sm-4"}>
            <h1 className={"big-num text-right"}>10x</h1>
          </div>
            <div className={"col-6 col-sm-7"}>
              <p className={"ml-md-3 ml-lg-0 "}>
                Recycling in the United States creates ten times more jobs than
                landfills. In 2012, there were 681,000 recycling jobs in the
                United States, and there are many more to be created.
              </p>
            </div>
          </div>
        </div>
      </div>
        </Fade>
    </section>
    <section className="bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>


    <Footer />
  </Layout>

);
}

}
export default IndexPage;
