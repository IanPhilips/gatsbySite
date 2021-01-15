import React, { Component } from 'react';
import config from '../../config';
import logo from "../assets/images/Bluterra_Logo_4x.png";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { navigate } from '../../.cache/gatsby-browser-entry';
import { MDBBtn } from 'mdbreact';

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

  async handleNavLinkClick(path){
    this.toggleMenu(false);
    if (!window.location.href.endsWith(path)) {
      await navigate("/" + path);
    }
    scrollTo(path);
    document.getElementById(path).blur();
    }



  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container-fluid">
          <a title={config.siteTitle} className="navbar-brand " href="/"  >
            <img src={logo} alt={"logo"} width={180}
                 onClick={() =>     this.toggleMenu(false)}
                 onKeyDown={() =>    this.toggleMenu(false)}/>
          </a>
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
            <ul className="navbar-nav my-auto ">
              <li className="nav-item my-auto mx-2">
                <b tabIndex={0} role="button" className="nav-link" id={"#Solutions"}
                   onClick={() => this.handleNavLinkClick("#Solutions")}
                   onKeyDown={() => this.handleNavLinkClick("#Solutions")} >
                    Solutions
                </b>
              </li>
              <li className="nav-item my-auto mx-2 ">
                <a  className="nav-link" href="/app">
                  <b role="button" tabIndex={0}>App</b>
                </a>
                  {/*<b tabIndex={0} role="button" id={"#features"} className="nav-link"*/}
                  {/*   onClick={() => this.handleNavLinkClick("#features") } onKeyDown={() => this.handleNavLinkClick("#features")}>*/}
                  {/*  MRFS*/}
                  {/*</b>*/}
              </li>
              {/*<li className="nav-item my-auto mx-2">*/}
              {/*    <a  className="nav-link" href="/contact">*/}
              {/*      <b role="button" tabIndex={0}>Contact</b>*/}
              {/*    </a>*/}
              {/*</li>*/}
            </ul>
              <div className="nav-item ml-auto">
                <MDBBtn className={"text-white btn-tertiary"} style={{lineHeight:"1.5"}} href={"/contact"}> CONTACT </MDBBtn>
              </div>
          </div>

        </div>


      </nav>

    );
  }
}
