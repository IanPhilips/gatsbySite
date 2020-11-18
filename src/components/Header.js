import React, { Component } from 'react';
import config from '../../config';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import logo from "../assets/images/Bluterra_Logo_4x.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };
  componentDidMount() {

    // hotjar
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2043647,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
      //google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'G-YPC306R5M1');

  }



  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container-fluid">
          <AnchorLink title={config.siteTitle} className="navbar-brand " to="/"  >
            <img src={logo} alt={"logo"} width={250}
                 onClick={() => this.toggleMenu(false)} onKeyDown={() => this.toggleMenu(false)}/>
          </AnchorLink>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={` collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav my-auto mr-auto">
              <li className="nav-item my-auto mx-2">
                <AnchorLink title={"Benefits"} className="nav-link" to="/#benefits" >
                <b tabIndex={0} role="button" onClick={() => this.toggleMenu(false)} onKeyDown={() => this.toggleMenu(false)} >
                    Benefits
                </b>
                  </AnchorLink>
              </li>
              <li className="nav-item my-auto mx-2 ">
                <AnchorLink title={"Features"} className="nav-link" to="/#features" >
                  <b tabIndex={0} role="button" onClick={() => this.toggleMenu(false) } onKeyDown={() => this.toggleMenu(false)}>
                    Features
                  </b>
                </AnchorLink>
              </li>
              <li className="nav-item my-auto mx-2">
                  <a  className="nav-link" href="/contact">
                    <b role="button" tabIndex={0}>Contact</b>
                  </a>
              </li>
              {/*<li className="nav-item">*/}
              {/*  <MDBBtn className={"text-white"} style={{lineHeight:"1.5"}} href={"/contact"}> JOIN OUR BETA </MDBBtn>*/}
              {/*</li>*/}
            </ul>
          </div>

        </div>


      </nav>

    );
  }
}
