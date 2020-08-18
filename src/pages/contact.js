import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';


import bg from "../assets/images/bg-cta.jpg";

import emailjs from 'emailjs-com';
import {
  MDBAnimation,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalFooter,
  MDBModalHeader,
} from 'mdbreact';

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

        <header className="masthead">
          <img  className={"video"}
                src={bg}
                 style={{
                   height:"100vh",
                   width:"100vw",
                   objectFit:"cover"
                 }}>
          </img>

          <div  style={{
            position:"absolute",
            top:0,
            background: "rgba(190,190,190,.3)",
            height:"100vh",
            width:"100vw",
            objectFit:"cover"
          }}>
            <div className="header-content mx-auto"
                 style={{
                   left:"50vh",
                   marginTop:"30vh",
                 }}
            >
              <h1 className={"text-center m-5"}>
                Contact
              </h1>
              <h3 className={"m-5 text-center"}> </h3>
              <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} >
                <div className="container mt-5 mb-5">
                  <form className="contact-form" onSubmit={this.sendEmail}>
                {/*EMAIL*/}
                    <div className={"row"}>
                    <label className={"col-lg-3 text-right m-3 my-1"}> Email </label>
                    <input className={"mt-3 col-lg-6"} type="email"  placeholder={"you@email.com"} name="email" />
                    <br/>
                    </div>
                {/*BETA*/}
                    <div className={"row"}>
                      <label className={"col-lg-3 text-right m-3 my-1"}> Subject </label>
                      <div className={"row col-lg-3 text-left my-auto"}>
                        <input type="checkbox" style={{width:"20px", height:"20px", marginTop:"5px"}}
                               id="beta" name="Beta" value="beta"
                        />
                          <p className={"my-1 ml-2"}>Interested in Beta</p>
                      </div>
                {/*MESSAGE*/}
                    </div>
                    <div className={"row"}>
                    <label className={"col-lg-3 text-right m-3 my-1"}> Message </label>
                    <textarea className={"mt-3 col-lg-6"} rows={"4"} cols={"50"} placeholder={"What's up?"} style={{borderRadius:"5px"}}  name="message" />
                    <br/>
                    </div>
                {/*SUBMIT*/}
                    <input type="submit" onClick={ ()=>this.toggle()} value="Submit" className="btn btn-outline btn-xl mt-3" />
                  </form>
                </div>
              </MDBAnimation>
            </div>
          </div>
        </header>


        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={()=>this.toggle()}>
            <MDBModalHeader> Thanks!  We'll be in touch.</MDBModalHeader>

            <MDBModalFooter className={"align-content-center justify-content-center bg-primary"}>
              <MDBBtn className={"btn btn-outline btn-xl mt-3"} color={"tr"} onClick={()=>this.toggle()}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>

        <Footer />
      </Layout>

    );
  }
  sendEmail(e) {
    e.preventDefault();
    console.log("email sent")
    // emailjs.sendForm('gmail', 'template_jjrY3GEB', e.target,
    //   'user_cV1OsELmIYfBvcQFwMZHH')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  }
}
export default Contact;
