import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import down from "../assets/img/icon_processingcosts.png";
import meter from "../assets/img/icon_efficiency.png";
import trash from "../assets/img/icon_contamination.png";
import up from "../assets/img/icon_increaserevenue.png";
import dashboard1 from "../assets/images/Bluterra_Dashboard_Overview.png";
import dashboard2 from "../assets/images/Bluterra_Dashboard_PartnerDetail.png";
import nasa from "../assets/images/nasa.jpg";
import vid from "../assets/videos/JumboShortMRF.mp4";

import {
  MDBAnimation,
  MDBBtn,
} from 'mdbreact';

class IndexPage extends Component{


  render(){
  return(
  <Layout>
    <Header />

    <header className="masthead">

      <img src={nasa} alt={"earth"} style={{ height: "100%", width: "100%", objectFit: "cover" }}/>

      <div  style={{
        position:"absolute",
        top:0,
        background: "rgba(100,100,100,.3)",
        height:"100%",
        width:"100%",
        objectFit:"cover"
      }}>

      <div className="header-content" style={{ marginTop:"40vh"}}>
        <h1 className={"my-5"} >
          Imagine a world without waste.
        </h1>
        <h4 className={"my-5"} >
          FROM CONSUMER TO MATERIAL RECOVERY FACILITY, OUR
          AI-POWERED SOFTWARE IS RESHAPING RECYCLING.
        </h4>
          <MDBBtn href={"/contact"} >
            LEARN MORE
          </MDBBtn>
      </div>
      </div>
    </header>

    <section className="about" id="video">
      <div className="container" >
        <div className="row">
        <div className=" text-center col-12 col-md-6 ">
          <h3> Live Actionable Data About Your Inbound Material</h3>
          <p className={"mt-5"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={"mt-5"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
          <div className={"col-12 col-md-6"}>
            <video autoPlay={"autoplay"} loop={"loop"} muted className={"video img-fluid"}>
              <source src={vid} type={"video/mp4"}/>
            </video>
          </div>
        </div>
      </div>
    </section>


    <section className="benefits bg-gray-slant" id="benefits">
      <div className="container-fluid">
        <div className="section-heading text-center ">
          <h2>AI Software Benefits</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container" >
              <div className="row ">

                <div className="col-lg-3">
                <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"0.25s"} reveal={"true"}>
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={down} alt={""}
                    />
                    <h5>Reduce Processing Costs</h5>
                    <p className="mt-4">
                      Understand your current inbound material stream and allow processing equipment to stay optimized for more efficient sorting.                    </p>
                  </div>
                </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={".5s"} reveal={"true"}>

                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={trash} alt={""}
                    />
                    <h5>Track Contamination</h5>
                    <p className=" mt-4">
                      Monitor contamination levels for your facility and all inbound partners in order to identify target areas for increased focus and efficiency.
                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} delay={"1s"}>
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={up} alt={""}
                    />
                    <h5>Increase Revenue</h5>
                    <p className=" mt-4">
                      Ensure optimal billing for inbound partners based on current stream composition, contamination levels, and tonnage.
                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"1.25s"} reveal={"true"}>

                    <div className="feature-item">
                      <img className={"mb-4 align-content-center justify-content-center"}
                           src={meter} alt={""}
                      />
                      <h5>Increase Efficiency</h5>
                      <p className=" mt-4">
                        Reduce facility downtime through real-time hazardous material alerts and monitor productivity gains through equipment parameter modifications.
                      </p>
                    </div>
                  </MDBAnimation>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className="features " id="features">
      <div className="container " >
        <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >

        <div className="section-heading text-center">
          <h3>Configurable Data Puts You in Control</h3>
        </div>
        </MDBAnimation>
        <div className="row">
          <div className="col-lg-8 ">
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} >
              <img src={dashboard1} alt={""} style={{width:"100%",  boxShadow:"8px 8px 5px lightgray"}}/>
            </MDBAnimation>
          </div>
          <div className="col-lg-4 mt-3 bg-gray bg-left-bleed p-4">
            <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >
              <h5> Your Facility at a Glance</h5>
              <hr align={"left"} className={"align-content-left justify-content-left mb-4"}/>
              <p> Easily view trends of material, contamination, and tonnage in order to better plan and mange your facility </p>
              <p> Quickly sort and view inbound partners by several metrics, letting you to focus on the most important ones </p>
              <p> Find and identify areas for opportunity and growth </p>
            </MDBAnimation>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 mt-3 bg-right-bleed bg-gray p-4">
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} >
              <h5> Partner-Specific Data </h5>
              <hr align={"left"} className={"align-content-left justify-content-left  mb-4"}/>
              <p> Always maintain a view into how an individual company or paratner is impacting your bottom line </p>
              <p> Track important metrics for each partner, like contamination, in order to effectively invoice </p>
              <p> View a log of each inbound load as well as the overall trend of a partner’s performance over time </p>
            </MDBAnimation>
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >
                  <img src={dashboard2} alt={""} style={{width:"100%", boxShadow:"8px 8px 5px lightgray"}}/>
            </MDBAnimation>
          </div>

        </div>

      </div>
    </section>



    <section className="bg-gray" id="contact" style={{padding:"10px"}}>

      {/*<MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} >*/}
      <div className={"row d-flex justify-content-center align-content-center "}>
        <div className="row px-5">
          <b className={"my-auto mr-4"}> Ready to have adaptable, intelligent systems work for you? </b>
          <MDBBtn href={"/contact"} className={"text-white mr-auto btn-tertiary"}>
            LEARN MORE
          </MDBBtn>
        </div>
      </div>
      {/*</MDBAnimation>*/}

    </section>
    <section className="contact bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>


    <Footer />
  </Layout>

);
}

}
export default IndexPage;
