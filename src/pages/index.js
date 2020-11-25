import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Typed from 'typed.js';
import { Slide, Fade } from "react-awesome-reveal";


import down from "../assets/img/icon_processingcosts.png";
import meter from "../assets/img/icon_efficiency.png";
import trash from "../assets/img/icon_contamination.png";
import up from "../assets/img/icon_increaserevenue.png";
import dashboard1 from "../assets/images/Bluterra_Dashboard_Overview.png";
import dashboard2 from "../assets/images/Bluterra_Dashboard_PartnerDetail.png";
import nasa from "../assets/images/nasa.jpg";
import vid from "../assets/videos/JumboShortMRF.mp4";

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
      <img src={nasa} alt={"earth"} style={{ height: "100%", width: "100%", objectFit: "cover" }}/>
      <div  style={{ position:"absolute", top:0, background: "rgba(100,100,100,.3)", height:"100%", width:"100%", objectFit:"cover" }}>

      <div className="header-content" >
        <h1 className={"my-2 mx-auto typed-header"} >
            Imagine a world <b> </b>
          <div id="typed-strings">
            <p> without waste.</p>
            <p> without landfills.</p>
            <p> that's sustainable.</p>
          </div>
          {/*NECESSARY:*/}
          <span id="typed"></span>


        </h1>
        <h4 className={"mb-5"} >
          FROM CONSUMER TO MATERIAL RECOVERY FACILITY, OUR
          AI-POWERED SOFTWARE IS RESHAPING RECYCLING.
        </h4>
        <Fade triggerOnce delay={500} >
        <MDBBtn href={"/contact"} >
            LEARN MORE
          </MDBBtn>
        </Fade>
      </div>
      </div>
    </header>

    <section className="about" id="video">
      <div className="container" >
        <div className="row">
              <div className=" text-center col-12 col-md-6 ">
          <Fade triggerOnce delay={100} >
              <h3>Say Goodbye to the Trash Can</h3>
              <p className={"mt-4"}>
                Bluterra is working to accelerate the world's transition to a circular economy by helping divert material away from our landfills and back into our economy.
              </p>
              <p className={"mt-4"}>
                Our products leverage Artificial Intelligence to drive revolutionary efficiencies in Material Recovery Facilities and educate consumers through mobile app and vehicle-based software solutions, leading to cleaner and more robust recycling streams.
              </p>
          </Fade>
            </div>
          <div className={"col-12 col-md-6"}>
            <Fade triggerOnce delay={500} >
              <video autoPlay={"autoplay"} loop={"loop"} muted className={"video img-fluid"}>
                <source src={vid} type={"video/mp4"}/>
              </video>
            </Fade>
          </div>
        </div>
      </div>
    </section>


    <section className="benefits bg-gray-slant" id="benefits">
      <div className="container-fluid">
        <div className="section-heading text-center ">
          <h2>Actionable Data About Your Inbound Material</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container" >
              <div className="row ">

                <div className="col-lg-3">
                  <Fade triggerOnce delay={250} >
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={down} alt={""}
                    />
                    <h5>Reduce Processing Costs</h5>
                    <p className="mt-4">
                      Understand your current inbound material stream and allow processing equipment to stay optimized for more efficient sorting.                    </p>
                  </div>
                </Fade>
                </div>

                <div className="col-lg-3">
                  <Fade triggerOnce delay={500} >

                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={trash} alt={""}
                    />
                    <h5>Track Contamination</h5>
                    <p className=" mt-4">
                      Monitor contamination levels for your facility and all inbound partners in order to identify target areas for increased focus and efficiency.
                    </p>
                  </div>
                  </Fade>
                </div>

                <div className="col-lg-3">
                  <Fade triggerOnce delay={750} >
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={up} alt={""}
                    />
                    <h5>Increase Revenue</h5>
                    <p className=" mt-4">
                      Ensure optimal billing for inbound partners based on current stream composition, contamination levels, and tonnage.
                    </p>
                  </div>
                  </Fade>
                </div>

                <div className="col-lg-3">
                  <Fade triggerOnce delay={1000} >

                    <div className="feature-item">
                      <img className={"mb-4 align-content-center justify-content-center"}
                           src={meter} alt={""}
                      />
                      <h5>Increase Efficiency</h5>
                      <p className=" mt-4">
                        Reduce facility downtime through real-time hazardous material alerts and monitor productivity gains through equipment parameter modifications.
                      </p>
                    </div>
                  </Fade>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className="features " id="features">
      <div className="container" >
        <Slide triggerOnce delay={0} direction={"right"}   >
        <div className="section-heading text-center">
          <h3>Configurable Data Puts You in Control</h3>
        </div>
        </Slide>
        <div className="row">
          <div className="col-lg-8 ">
            <Slide triggerOnce delay={0} direction={"left"}   >
              <img src={dashboard1} alt={""} style={{width:"100%",  boxShadow:"8px 8px 5px lightgray"}}/>
            </Slide>
          </div>
          <div className="col-lg-4 mt-3 bg-gray bg-left-bleed p-4">
            <Slide triggerOnce delay={0} direction={"right"}   >
              <h5> Your Facility at a Glance</h5>
              <hr align={"left"} className={"align-content-left justify-content-left mb-4"}/>
              <p> Easily view trends of material, contamination, and tonnage in order to better plan and mange your facility </p>
              <p> Quickly sort and view inbound partners by several metrics, letting you to focus on the most important ones </p>
              <p> Find and identify areas for opportunity and growth </p>
            </Slide>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 mt-3 bg-right-bleed bg-gray p-4">
            <Slide triggerOnce delay={0} direction={"left"}   >
              <h5> Partner-Specific Data </h5>
              <hr align={"left"} className={"align-content-left justify-content-left  mb-4"}/>
              <p> Always maintain a view into how an individual company or paratner is impacting your bottom line </p>
              <p> Track important metrics for each partner, like contamination, in order to effectively invoice </p>
              <p> View a log of each inbound load as well as the overall trend of a partner’s performance over time </p>
            </Slide>
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <Slide triggerOnce delay={0} direction={"right"}   >
                  <img src={dashboard2} alt={""} style={{width:"100%", boxShadow:"8px 8px 5px lightgray"}}/>
            </Slide>
          </div>

        </div>

      </div>
    </section>



    <section className="bg-gray" id="contact" style={{padding:"10px"}}>

      <div className={"row d-flex justify-content-center align-content-center "}>
        <div className="row px-5">
          <b className={"my-auto mr-4"}> Ready to have adaptable, intelligent systems work for you? </b>
          <MDBBtn href={"/contact"} className={"text-white mr-auto btn-tertiary"}>
            LEARN MORE
          </MDBBtn>
        </div>
      </div>

    </section>
    <section className="contact bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>


    <Footer />
  </Layout>

);
}

}
export default IndexPage;
