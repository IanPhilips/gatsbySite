import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';


import bg from "../assets/img/glassjars.jpg";

import emailjs from 'emailjs-com';
import {
  MDBBtn, MDBCard,
  MDBContainer,
  MDBModal,
  MDBModalFooter,
} from 'mdbreact';
import { Fade } from 'react-awesome-reveal';

class Contact extends Component{

  state = {
    modal: false
  };

  toggle() {
    console.log("toggled");
    this.setState({
      modal: !this.state.modal
    });
  };


  render(){
    return(
      <Layout>
        <Header />
        {/*hero div*/}
        <div style={{ position:"relative"}}>
          {/*background image*/}
          <img  className={'video'} src={bg} alt={''}
                style={{
                  height: '120vh',
                  width: '100vw',
                  objectFit: 'cover'}}
          />
          {/*title div*/}
          <section className={"contact"}  style={{
            position:"absolute",
            top:0,
            height:"100%",
            background:"rgba(200,200,200,0.4)",
            width:"100vw",
            objectFit:"cover",
            padding:"0 0"
          }}>

            <MDBCard border={"none"} className={"mx-auto"} style={{
              maxWidth:"550px",
              borderWidth:"0",
              marginTop:"20vh",
              marginLeft:"20px",
              background:"rgba(250,250,250,0.7)"}}
            >
              <Fade triggerOnce delay={0} >
              <h1 className={"text-center mt-4"}> Get In Touch </h1>
                <div className="container text-left mb-5 p-0" style={{width:"95%"}}>
                  <form className="contact-form " onSubmit={this.sendEmail}>
                    {/*NAME*/}
                    <div className={"row d-flex justify-content-center align-content-center"}>
                      <label htmlFor={"name"} className={"col-2  m-3 p-0 my-1"}> Name </label>
                      <input className={"mt-3 col-lg-7 col-8 "} type="text" id={"name"}
                             placeholder={""} name="name"
                             style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                    </div>
                    {/*PHONE*/}
                    <div className={"row d-flex justify-content-center align-content-center"}>
                    <label htmlFor={"phone"} className={"col-2 col-lg-2 m-3 my-1 p-0"}> Phone </label>
                      <input className={"mt-3 col-lg-7 col-8"} type="text" id={"phone"}
                             placeholder={""} name="phone"
                             style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                    </div>
                    {/*EMAIL*/}
                    <div className={"row d-flex justify-content-center align-content-center"}>
                      <label htmlFor={"email"} className={"col-2 col-lg-2 m-3 my-1 p-0"}> Email </label>
                      <input className={"mt-3 col-lg-7 col-8 "} type="email" id={"email"}
                             placeholder={""} name="email"
                             style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                    </div>
                    {/*Interests*/}
                    <div className={"row d-flex justify-content-center align-content-center my-2"}>
                      <label htmlFor={"beta"} className={"col-3 col-lg-2 mt-3 mb-3 mr-3 my-1 p-0 interest-label"}>
                        Interests
                      </label>
                      <div className={"row col-4 col-lg-4 text-left mt-3 mr-2 interest-section"}>
                        <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                               id="beta" name="beta" value="beta"
                        />
                        <p className={"my-1 ml-2"}>Learn More</p>
                      </div>
                      <div className={"row col-3 col-lg-3  text-left mt-3"}>
                        <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                               name="pricing" value="pricing" id={"pricing"}
                        />
                        <p className={"my-1 ml-2"}>Pricing</p>
                      </div>
                    </div>
                      {/*MESSAGE*/}
                    <div className={"row d-flex justify-content-center align-content-center"}>
                    <label htmlFor={"message"} className={"col-3 col-lg-2 m-3 my-1 p-0 message-label"}> Message </label>
                      <textarea className={"mt-3 col-lg-7 col-7 contact-text "} rows={"4"} cols={"50"}
                                placeholder={""} style={{borderRadius:"5px", borderWidth:"1.5px"}}
                                name="message" id={"message"}
                      />
                    </div>
                    {/*SUBMIT*/}
                    <div className={"col-lg-12 text-center"}>
                    <input type="submit" onClick={ ()=>this.toggle()} value="Submit"
                           className="btn-default btn text-white mt-3 btn-tertiary"
                           style={{width:"200px"}}
                    />
                    </div>
                  </form>
                </div>
              </Fade>
          </MDBCard>
          </section>
        </div>

        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={()=>this.toggle()}>
            <h5 className={"m-4 text-center"}> Thanks!  We'll be in touch.</h5>
            <MDBModalFooter className={"align-content-center justify-content-center "}>
              <MDBBtn className={"mt-3 text-white btn-tertiary"}  onClick={()=>this.toggle()}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        <section className="contact bg-secondary" id="contact" style={{padding:"3px"}}>
        </section>
        <Footer/>
      </Layout>

    );
  }
  sendEmail(e) {
    e.preventDefault();
    console.log("email sent");
    emailjs.sendForm('gmail', 'template_jjrY3GEB', e.target,
      'user_cV1OsELmIYfBvcQFwMZHH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
export default Contact;


