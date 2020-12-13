import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/new-age.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    const imageUrl="https://www.bluterra.io/nasa.jpg";
    const description = "From consumer to material recovery facility, our AI-Powered software is reshaping recycling.\n";
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>

            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'keywords', content: 'recycling, AI, machine learning, waste, technology' },
              ]}
            >
              <meta property='og:image' content={imageUrl} />
              <meta property='twitter:image' content={imageUrl} />
              <meta property='og:image:width' content={4312} />
              <meta property='og:image:height' content={2868} />
              <meta property='description' content={description} />
              <meta property='og:description' content={description} />
              <meta property='twitter:description' content={description} />
              <meta property='twitter:card' content={"summary_large_image"} />
              <meta property='twitter:title' content={data.site.siteMetadata.title} />
              <meta property='og:title' content={data.site.siteMetadata.title} />

              <html lang="en" />
            </Helmet>
            <div className={'page-top'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
};

export default Layout;
