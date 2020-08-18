import React, { Component } from 'react';
import config from '../../config';
// import Scroll from './Scroll';
import { AnchorLink } from "gatsby-plugin-anchor-links";

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

  // handleScroll = () => {
  //   const { visibilityClass } = this.state;
  //   if (window.pageYOffset > 300) {
  //     if (visibilityClass !== 'navbar-shrink') {
  //       this.setState({ visibilityClass: 'navbar-shrink' });
  //     }
  //   } else {
  //     if (visibilityClass === 'navbar-shrink') {
  //       this.setState({ visibilityClass: '' });
  //     }
  //   }
  // };
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <AnchorLink title={config.siteTitle} className="navbar-brand" to="/"  >
            <a onClick={() => this.toggleMenu(false)}>
              {config.siteTitle}
            </a>
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
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <AnchorLink title={"Benefits"} className="nav-link" to="/#benefits" >
                <a onClick={() => this.toggleMenu(false)}>
                    Benefits
                </a>
                  </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink title={"Features"} className="nav-link" to="/#features" >
                  <a onClick={() => this.toggleMenu(false)}>
                    Features
                  </a>
                </AnchorLink>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
