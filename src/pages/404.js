import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <Header/>
    <section className="NotFound">
      <div className="cta-content">
        <div className="container">
          <h2>
            404 Page not found
            <br />
            <Link className="btn btn-outline btn-xl" to="/">
              Go back
            </Link>
          </h2>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
