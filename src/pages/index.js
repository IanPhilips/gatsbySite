import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Slide, Fade } from "react-awesome-reveal";


import down from "../assets/img/icon_processingcosts.png";
import accounts from "../assets/img/accounts.png";
import trash from "../assets/img/icon_contamination.png";
import customer from "../assets/img/customer.png";
import dashboard1 from "../assets/images/Route_Dashboard.png";
import dashboard2 from "../assets/images/Communication items.jpeg";
import fam from "../assets/images/recycling-family.jpg";
import contam from "../assets/images/contaminant_screen.png";

import {
  MDBBtn, MDBCard,
} from 'mdbreact';


// eslint-disable-next-line no-unused-vars
let typed = null;
class IndexPage extends Component{


  render(){
  return(
  <Layout>
    <Header />

    <header className="masthead">
      <img src={fam} alt={"earth"} style={{ height: "100%", width: "100%", objectFit: "cover" }}/>
      <div  style={{ position:"absolute", top:0, background: "rgba(0,0,0,.45)", height:"100%", width:"100%", objectFit:"cover" }}>

      <div className="header-content mx-auto" >
        <h1 className={"my-2 mx-auto"}  style={{fontSize:"44px"}}>
          Say hello to your customers and goodbye to contamination.
        </h1>
        <h4 className={" mt-3 mb-5 mx-auto"} style={{fontSize:"22px", maxWidth:"500px", fontWeight:"300"}} >
          Track & reduce contamination, monitor waste diversion, and eliminate audits through automated collection stream analysis        </h4>
        <Fade triggerOnce delay={500} >
        <MDBBtn href={"/contact"} >
            LEARN MORE
          </MDBBtn>
        </Fade>
      </div>
      </div>
    </header>


    <section className="about" id={"Solutions"} style={{padding:"50px"}}>
      <div className="container" >
        <div className="row">
              <div className=" text-left col-12 col-md-6 ">
          <Fade triggerOnce delay={100} >
            <h2>Identify Contaminants in Real-Time,</h2>
                <h2>No RFID’s Needed</h2>
              <p className={"mt-4"}>
                Bluterra identifies specified contaminants for each cart tip in the hopper, automatically logs the data to the appropriate customer’s account, instantaneously notifies the account holder of the contaminant items, and provides you with actionable data to streamline your operations and grow your bottom line.
              <p className={"mt-4"}>
                Bluterra identifies each customer through the serial number printed on their cart, so no RFID’s means more margin for you.              </p>
              </p>
              <MDBBtn className={"text-white btn-tertiary"} href={"/contact"} >
                LEARN MORE
              </MDBBtn>
          </Fade>
            </div>
          <div className={"col-12 col-md-6 my-auto"}>
            <Fade triggerOnce delay={500} >
              <img className={"img-fluid"} style={{ boxShadow:"8px 8px 5px lightgray"}}
                   src={contam} alt={""}
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>


    <section className="benefits bg-gray" id="benefits" style={{padding:"25px 0"}}>
      <div className="container-fluid">
        <div className="section-heading text-center ">
          <h2>Here to Help Grow Your Bottom Line</h2>
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
                    <h5>Negotiate Better MRF Rates</h5>
                  </div>
                </Fade>
                </div>

                <div className="col-lg-3">
                  <Fade triggerOnce delay={500} >
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={trash} alt={""}/>
                    <h5>Clean Your Recycling or Organics Stream</h5>
                  </div>
                  </Fade>
                </div>

                <div className="col-lg-3">
                  <Fade triggerOnce delay={750} >
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={customer} alt={""}
                    />
                    <h5>Better Experience For Your Customers</h5>
                  </div>
                  </Fade>
                </div>

                <div className="col-lg-3">
                  <Fade triggerOnce delay={1000} >

                    <div className="feature-item">
                      <img className={"mb-4 align-content-center justify-content-center"}
                           src={accounts} alt={""}
                      />
                      <h5>Track, Tag, or Reject High-Contaminant Accounts</h5>
                    </div>
                  </Fade>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className="features " id="features" style={{paddingTop:"50px"}}>
      <div className="container" >
        <Slide triggerOnce delay={0} direction={"right"}   >
        <div className="section-heading text-center">
          <h2>Sit Back & Let Bluterra Do the Heavy Lifting</h2>
          <p>Bluterra requires no extra effort from your team to reduce contamination at the curb and gives you</p>
          <p>powerful data along with additional actions you can take with just the click of a button.</p>
        </div>
        </Slide>
        <div className="row mb-5">
          <div className="col-lg-8 text-center my-auto">
            <Slide triggerOnce delay={0} direction={"left"}>
              <img src={dashboard1} className={"mx-auto"} alt={""} style={{ boxShadow:"8px 8px 5px lightgray"}}/>
            </Slide>
          </div>
          <div className="col-lg-4 mt-3 p-4">
            <Slide triggerOnce delay={0} direction={"right"}   >
              <h5> Track What Matters</h5>
              <hr align={"left"} className={"align-content-left justify-content-left mb-4"}/>
                <p>Set an allowable contamination threshold, see heat maps, track contamination data, number of strikes, and more. Dashboards allow you to see actionable data for you service-area, route specific, or even individual accounts.</p>
                <p>Download or receive reports on routes, high-contaminant or multiple strike accounts, and see how your stream changes over time.</p>
            </Slide>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 mt-3 p-4 text-right">
            <Slide triggerOnce delay={0} direction={"left"}   >
              <h5> Seamless Communication</h5>
              <hr align={"right"} className={"align-content-right justify-content-right  mb-4"}/>
                <p>Attack contamination through automated and individualized feedback, delived directly to your customers.</p>
              <div className={"row text-center"} style={{marginLeft:"80px"}}>
                <p className={"col-6"}>Text Notifications</p>
                <p className={"col-6"}>Email</p>
              </div>
              <div className={"row text-center"} style={{marginLeft:"80px"}}>
                <p className={"col-6"}>Postcard Mailers</p>
                <p className={"col-6"}>Mobile App</p>
              </div>

                <p>Want us to send a postcard to the top 10% contaminated accounts? No problem! One click is all it takes, and then monitor the campaign’s impact through the dashboard.</p>
            </Slide>
          </div>
          <div className="col-lg-8 order-first order-lg-last text-center my-auto">
            <Slide triggerOnce delay={0} direction={"right"}   >
                  <img src={dashboard2} alt={""} style={{}}/>
            </Slide>
          </div>

        </div>

      </div>
    </section>



    <section className="bg-gray" id="gettingStarted" style={{padding:"20px"}}>
      <div className={"row text-center"}>
        <div className={"col-12 mx-auto "}>
          <MDBCard border={"none"}  className={"p-4"} style={{
            borderColor:"transparent",
            backgroundColor:"transparent"}}>

            <h2 className={"mb-4"}> Getting Started is Easy.</h2>

            <p className={"mb-4"}>No RFID’s. No new carts. No headaches.</p>
            <p className={"mx-auto"} style={{maxWidth:"50%"}}>Contact us to get started and see if Bluterra will work with your existing hopper camera system and service area.</p>

            <Fade triggerOnce delay={500} >
              <MDBBtn className={"text-white btn-tertiary"} href={"/contact"} >
                LEARN MORE
              </MDBBtn>
            </Fade>
          </MDBCard>
        </div>
      </div>
    </section>

    <section className="bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>


    <Footer />
  </Layout>

);
}

}
export default IndexPage;
