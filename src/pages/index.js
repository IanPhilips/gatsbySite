import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
// import Scroll from '../components/Scroll';
import Footer from '../components/Footer';

import down from "../assets/img/icon_processingcosts.png";
// import recyc from "../assets/img/recyc.jpeg";
import meter from "../assets/img/icon_efficiency.png";
import trash from "../assets/img/icon_contamination.png";
import up from "../assets/img/icon_increaserevenue.png";
import dashboard1 from "../assets/images/dashboard_mainoverview.png";
import dashboard2 from "../assets/images/dashboard_inboundpartner.png";
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
            <video autoPlay={"autoplay"} loop={"loop"} muted className={"video"}
            style={{
              height:"100%",
              width:"100%",
              objectFit:"cover"
            }}>
              <source src={vid} type={"video/mp4"}/>
            </video>

      <div  style={{
        position:"absolute",
        top:0,
        background: "rgba(100,100,100,.3)",
        height:"100%",
        width:"100%",
        objectFit:"cover"
      }}>
      <div className="header-content mx-auto"
           style={{
             marginTop:"30vh",
           }}
           >
        <h1 className={"text-left ml-5 my-5"} style={{maxWidth:"800px"}}>
         Applied Intelligent Systems For Your Material Recovery Facility
        </h1>
        <h4 className={"ml-5 my-5 text-left"} style={{maxWidth:"700px"}}>
          Real-time data to reduce processing
          costs, track contamination, and drive operational efficiency.
        </h4>
        {/*<Scroll type="id" element="contact">*/}
        <div className={"text-left ml-5"}>
          <MDBBtn href={"/contact"} >
            JOIN OUR BETA
          </MDBBtn>
        </div>
        {/*</Scroll>*/}
      </div>
      </div>
    </header>



    <section className="features bg-gray-slant" id="benefits">
      <div className="container-fluid">
        <div className="section-heading text-center ">
          <h2>Actionable data to optimize your operations</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid ">
              <div className="row ">

                <div className="col-lg-3">
                <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"0.25s"} reveal={"true"}>
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={down} alt={""} style={{height:"125px"}}
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
                         src={trash} alt={""} style={{height:"125px"}}
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
                         src={up} alt={""} style={{height:"125px"}}
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
                           src={meter} alt={""} style={{height:"125px"}}
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
      <div className="container">
        <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >

        <div className="section-heading text-center">
          <h3>Maintain a pulse on your material stream, all in one place</h3>
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
              <p> - Easily view trends of material, contamination, and tonnage in order to better plan and mange your facility </p>
              <p> - Quickly sort and view inbound partners by several metrics, letting you to focus on the most important ones </p>
              <p> - Find and identify areas for opportunity and growth </p>
            </MDBAnimation>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 mt-3 bg-right-bleed bg-gray p-4">
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} >
              <h5> Partner-Specific Data </h5>
              <hr align={"left"} className={"align-content-left justify-content-left  mb-4"}/>
              <p> - Always maintain a view into how an individual company or paratner is impacting your bottom line </p>
              <p> - Track important metrics for each partner, like contamination, in order to effectively invoice </p>
              <p> - View a log of each inbound load as well as the overall trend of a partner’s performance over time </p>
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


    {/*<img src={recyc} alt={"recycling"} style={{width:"100%", height:"400px", objectFit:"cover"}} />*/}

    <section className="bg-tertiary" id="contact" style={{padding:"10px"}}>

      <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} >
      <div className="container row col-lg-12">
        <div className={"col-lg-8 my-auto text-white"} >
          <h6 className={"m-0 text-right"}> Ready to have adaptable, intelligent systems work for you? Contact us to learn more. </h6>
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn href={"/contact"} className={"text-white mr-auto"}>
            JOIN OUR BETA
          </MDBBtn>
        </div>
      </div>
      </MDBAnimation>

    </section>
    <section className="contact bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>


    <Footer />
  </Layout>

);
}

}
export default IndexPage;
