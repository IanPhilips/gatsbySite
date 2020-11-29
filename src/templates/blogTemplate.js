// from: https://www.gatsbyjs.com/docs/adding-markdown-pages/
import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import Header from '../components/Header';
import { MDBContainer } from 'mdbreact';

export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Header/>
      <section className="blogPost" style={{paddingTop:"90px"}}>
        <div style={{ position:"relative"}}>
          {/*background image*/}
          <img  className={'video'} src={frontmatter.photo} alt={''} style={{ height: '75vh', width: '100vw', objectFit: 'cover' }}/>
          {/*title div*/}
          <div  style={{ position:"absolute", top:0, background: "rgba(0,0,0,.3)", height:"75vh", width:"100vw", objectFit:"cover" }}>
            <div className="header-content text-white mx-auto" style={{ left:"50vh", marginTop:"25vh", }}>
              <h1 className={"text-center"} style={{fontSize:"60px"}}> {frontmatter.title} </h1>
              <p className={"text-center text-white"} >{frontmatter.date}</p>
            </div>
          </div>
        </div>
        <section className="bg-gray"  style={{padding:"10px"}}/>
        <MDBContainer className="blog-post-container">
          <div className="blog-post mx-auto mt-5 col-8">
            <div
              // style={{lineHeight:"1.5 !important"}}
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          </MDBContainer>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        photo
      }
    }
  }
`
